'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    // Only load analytics if GA_ID is provided
    if (!gaId || typeof window === 'undefined') return;

    // Initialize Google Analytics
    if (!window.gtag) {
      // Load gtag script
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(script1);

      // Initialize dataLayer and gtag
      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer?.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', gaId, {
        page_path: window.location.pathname,
      });
    } else {
      // Update page path on navigation
      window.gtag('config', gaId, {
        page_path: window.location.pathname,
      });
    }
  }, [gaId]);

  // Don't render anything
  return null;
}
