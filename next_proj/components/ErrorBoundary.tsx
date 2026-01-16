'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console
    console.error('Error caught by boundary:', error, errorInfo);

    // Send to error tracking service if configured
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.toString(),
        fatal: false,
      });
    }

    // You can also send to Sentry or other error tracking here
    // Example: Sentry.captureException(error, { contexts: { react: errorInfo } });
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen bg-[#0B1E3B] text-[#DDE2E7] flex items-center justify-center px-6">
            <div className="text-center max-w-md">
              <h1 className="text-2xl font-bold text-white mb-4">
                Something went wrong
              </h1>
              <p className="text-[#DDE2E7] mb-6">
                We're sorry, but something unexpected happened. Please try refreshing the page.
              </p>
              <button
                onClick={() => {
                  this.setState({ hasError: false, error: undefined });
                  window.location.reload();
                }}
                className="bg-[#D35400] text-white hover:bg-orange-700 px-6 py-3 rounded-md font-semibold focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-[#0B1E3B]"
              >
                Refresh Page
              </button>
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mt-6 text-left">
                  <summary className="cursor-pointer text-[#D35400] mb-2">
                    Error Details (Development Only)
                  </summary>
                  <pre className="bg-[#11243F] p-4 rounded text-xs overflow-auto">
                    {this.state.error.toString()}
                    {this.state.error.stack}
                  </pre>
                </details>
              )}
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
