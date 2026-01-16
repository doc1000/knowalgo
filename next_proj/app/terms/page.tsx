import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Knowledge Algorithms',
  description: 'Terms of service for Knowledge Algorithms website.',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#0B1E3B] text-[#DDE2E7]">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link 
          href="/"
          className="text-[#D35400] hover:text-orange-400 mb-8 inline-block"
        >
          ← Back to Home
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Terms of Service</h1>
        
        <p className="text-sm text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        
        <div className="space-y-8 text-base md:text-lg leading-relaxed">
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#D35400] mb-4">Agreement to Terms</h2>
            <p>
              By accessing or using the Knowledge Algorithms website (www.knowledgealgorithms.com), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#D35400] mb-4">Use of Website</h2>
            <p className="mb-4">You agree to use this website only for lawful purposes and in a way that does not:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Infringe on the rights of others</li>
              <li>Restrict or inhibit anyone else's use of the website</li>
              <li>Attempt to gain unauthorized access to any part of the website</li>
              <li>Introduce viruses, malware, or other harmful code</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#D35400] mb-4">Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, images, and software, is the property of Knowledge Algorithms or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#D35400] mb-4">Disclaimer</h2>
            <p className="mb-4">
              The information provided on this website is for general informational purposes only. While we strive to keep the information accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>The completeness, accuracy, or reliability of the content</li>
              <li>The availability or uninterrupted operation of the website</li>
              <li>The suitability of any information for your particular purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#D35400] mb-4">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Knowledge Algorithms shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#D35400] mb-4">External Links</h2>
            <p>
              This website may contain links to external websites that are not operated by us. We have no control over the content or practices of these sites and accept no responsibility for them. The inclusion of any link does not imply endorsement by Knowledge Algorithms.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#D35400] mb-4">Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after any changes indicates your acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#D35400] mb-4">Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#D35400] mb-4">Contact Us</h2>
            <p>
              If you have questions about these Terms of Service, please contact us at:{' '}
              <a href="mailto:info@knowledgealgorithms.com" className="text-[#D35400] hover:text-orange-400 underline">
                info@knowledgealgorithms.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
