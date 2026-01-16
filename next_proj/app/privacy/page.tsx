import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Knowledge Algorithms',
  description: 'Privacy policy for Knowledge Algorithms - how we collect, use, and protect your information.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0B1E3B] text-[#DDE2E7]">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link 
          href="/"
          className="text-[#D35400] hover:text-orange-400 mb-8 inline-block"
        >
          ← Back to Home
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        
        <p className="text-sm text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        
        <div className="space-y-8 text-base md:text-lg leading-relaxed">
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#D35400] mb-4">Introduction</h2>
            <p>
              Knowledge Algorithms ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website at www.knowledgealgorithms.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#D35400] mb-4">Information We Collect</h2>
            
            <h3 className="text-lg font-semibold text-white mt-4 mb-2">Automatically Collected Information</h3>
            <p className="mb-4">
              When you visit our website, we automatically collect certain information through Google Analytics, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website or source</li>
              <li>Approximate geographic location (country/city level)</li>
              <li>Device type (desktop, mobile, tablet)</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-white mt-4 mb-2">Information You Provide</h3>
            <p>
              If you contact us via email, we collect the information you voluntarily provide, such as your name, email address, and message content.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#D35400] mb-4">How We Use Your Information</h2>
            <p className="mb-4">We use the collected information to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Understand how visitors use our website</li>
              <li>Improve our website content and user experience</li>
              <li>Respond to inquiries and communications</li>
              <li>Analyze website traffic and trends</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#D35400] mb-4">Cookies and Tracking Technologies</h2>
            <p className="mb-4">
              We use Google Analytics, which uses cookies and similar technologies to collect and analyze information about website usage. Google Analytics cookies collect information anonymously and report website trends without identifying individual visitors.
            </p>
            <p>
              You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#D35400] hover:text-orange-400 underline">Google Analytics Opt-out Browser Add-on</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#D35400] mb-4">Third-Party Services</h2>
            <p className="mb-4">
              We use the following third-party services:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Google Analytics</strong> - for website analytics (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#D35400] hover:text-orange-400 underline">Google Privacy Policy</a>)</li>
              <li><strong>Cloudflare</strong> - for website hosting and security (<a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-[#D35400] hover:text-orange-400 underline">Cloudflare Privacy Policy</a>)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#D35400] mb-4">Data Retention</h2>
            <p>
              Analytics data is retained according to Google Analytics' data retention settings. Email correspondence is retained as long as necessary to respond to inquiries and maintain business records.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#D35400] mb-4">Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Opt out of analytics tracking</li>
              <li>Request information about data we hold about you</li>
              <li>Request deletion of your personal information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#D35400] mb-4">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, please contact us at:{' '}
              <a href="mailto:info@knowledgealgorithms.com" className="text-[#D35400] hover:text-orange-400 underline">
                info@knowledgealgorithms.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#D35400] mb-4">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
