import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Knowledge Algorithms',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B1E3B] text-[#DDE2E7] flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl md:text-8xl font-bold text-[#D35400] mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-lg md:text-xl text-[#DDE2E7] mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or the URL might be incorrect.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-[#D35400] text-white hover:bg-orange-700 focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-[#0B1E3B] px-8 py-6 text-base font-semibold transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-md border-2 border-[#D35400] text-[#D35400] hover:bg-[#D35400] hover:text-white focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-[#0B1E3B] px-8 py-6 text-base font-semibold transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
