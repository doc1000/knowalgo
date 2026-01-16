/**
 * Error tracking utility
 * 
 * To use Sentry:
 * 1. Install: npm install @sentry/nextjs
 * 2. Initialize in a client component or _app
 * 3. Uncomment the Sentry code below
 */

export function logError(error: Error, context?: Record<string, any>) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.error('Error:', error, context);
  }

  // Send to Google Analytics if available
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'exception', {
      description: error.toString(),
      fatal: false,
      ...context,
    });
  }

  // Send to Sentry (uncomment when Sentry is set up)
  // if (typeof window !== 'undefined' && window.Sentry) {
  //   window.Sentry.captureException(error, {
  //     contexts: { custom: context },
  //   });
  // }
}

export function logEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
}

// Global error handler
if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    logError(event.error || new Error(event.message), {
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno,
    });
  });

  window.addEventListener('unhandledrejection', (event) => {
    logError(
      event.reason instanceof Error
        ? event.reason
        : new Error(String(event.reason)),
      { type: 'unhandledrejection' }
    );
  });
}
