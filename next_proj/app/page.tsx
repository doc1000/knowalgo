'use client';

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { logEvent } from "@/lib/errorTracking";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0B1E3B] text-[#DDE2E7]">
      {/* Skip to main content link for screen readers */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#D35400] focus:text-white focus:rounded-md"
      >
        Skip to main content
      </a>
      
      {/* Hero Section */}
      <section 
        className="relative px-6 py-16 md:py-24 overflow-hidden"
        aria-label="Hero section"
      >
        {/* Background image - full width on desktop */}
        <div 
          className="absolute inset-0 bg-no-repeat bg-center opacity-30 pointer-events-none"
          style={{ 
            backgroundImage: 'url(/chaos_clarity_map_no_text.webp)',
            backgroundSize: '100% auto',
          }}
          aria-hidden="true"
        />
        
        {/* Content - aligned with sections below */}
        <div className="relative z-10 max-w-6xl mx-auto pl-0 md:pl-48">
          <h1 className="text-4xl md:text-5xl font-normal tracking-wide mb-4 text-white">
            Unlock AI.<br />
            Dominate Your Data.
          </h1>
          <p className="text-lg md:text-xl text-[#DDE2E7] max-w-xl mb-8">
            Build custom, local-first AI search and research systems for yourself or your team.
          </p>
          <Button 
            className="bg-[#D35400] text-white hover:bg-orange-700 focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-[#0B1E3B] px-8 py-6 text-base font-semibold"
            onClick={() => {
              logEvent('button_click', { button_name: 'get_in_touch' });
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            aria-label="Get in touch - scroll to contact section"
          >
            GET IN TOUCH
          </Button>
        </div>
      </section>

      {/* Services Section - Two Column with Logo */}
      <section id="main-content" className="bg-[#11243F] rounded-2xl p-8 md:p-12 mx-6 mb-12 shadow-xl" aria-labelledby="services-heading">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 max-w-6xl mx-auto">
          <div className="flex-shrink-0 md:w-48">
            <Image 
              src="/logo_square.webp" 
              alt="Knowledge Algorithms logo - a square logo representing AI and knowledge systems" 
              width={128}
              height={128}
              className="w-24 h-24 md:w-32 md:h-32 mx-auto md:mx-0"
              loading="lazy"
              quality={90}
            />
          </div>
          <div className="flex-1">
            <h2 id="services-heading" className="text-2xl md:text-3xl font-extrabold text-[#D35400] mb-6">What I Do</h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <h3 className="text-white font-bold mb-1">AI Search & RAG Systems</h3>
                <p className="text-[#DDE2E7] text-sm md:text-base">Build smarter document search experiences with Retrieval-Augmented Generation.</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Vector Databases</h3>
                <p className="text-[#DDE2E7] text-sm md:text-base">Find ideas in documents, images, and audio using the best of AI AND SQL.</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Topic Modeling & Summarization</h3>
                <p className="text-[#DDE2E7] text-sm md:text-base">Auto-detect themes in research and generate summaries.</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Topic Visualization</h3>
                <p className="text-[#DDE2E7] text-sm md:text-base">See the big picture quickly. Take the straight path.</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Data Drift</h3>
                <p className="text-[#DDE2E7] text-sm md:text-base">See changes. Grab Opportunities. Avoid disasters.</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Local-First Deployments</h3>
                <p className="text-[#DDE2E7] text-sm md:text-base">Own your data. Systems that work even when offline.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I REALLY Do - Graffiti style, rebellious tone */}
      <section 
        className="bg-gradient-to-br from-orange-900 via-black to-blue-900 border-4 border-[#D35400] rounded-xl p-8 md:p-12 mx-6 mb-12 shadow-2xl font-mono text-[#F1F1F1]"
        aria-labelledby="really-do-heading"
      >
        <h2 id="really-do-heading" className="text-2xl md:text-3xl font-extrabold text-[#FF6B00] mb-8 uppercase tracking-widest">
          What I really do: un-screw your data flow
        </h2>
        
        <ul className="space-y-5 text-base md:text-lg">
          <li>
            <span className="text-[#FF6B00] font-bold">Do you have multiple databases, document stores, and data silos that don't talk to each other?</span><br />
            <span className="text-[#F1F1F1]">➤ Break the silos. Funnel into a single searchable source — more insight, less noise.</span>
          </li>
          <li>
            <span className="text-[#FF6B00] font-bold">Is your internal image search broken (or non-existent)?</span><br />
            <span className="text-[#F1F1F1]">➤ Build custom image embeddings trained on your descriptions. Stop scrolling, start finding.</span>
          </li>
          <li>
            <span className="text-[#FF6B00] font-bold">Tired of hunting through folders? Want to "JUST ASK" a question and get the right doc?</span><br />
            <span className="text-[#F1F1F1]">➤ Talk to your knowledge. Ask questions. Get instant RAG-powered answers from your local server.</span>
          </li>
          <li>
            <span className="text-[#FF6B00] font-bold">No big picture view of your content?</span><br />
            <span className="text-[#F1F1F1]">➤ Map it. Visualize dynamic topics across time, space, and source.</span>
          </li>
          <li>
            <span className="text-[#FF6B00] font-bold">Need to know what changed TODAY in your data?</span><br />
            <span className="text-[#F1F1F1]">➤ Deploy multi-factor drift detection. Spot risks. Seize opportunities before anyone else does.</span>
          </li>
        </ul>
      </section>

      {/* About Me - Two Column */}
      <section className="bg-[#1A2D4B] rounded-2xl p-8 md:p-12 mx-6 mb-12 shadow-xl">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#D35400] mb-6">About Me</h2>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 text-base md:text-lg">
          <div>
            <p className="mb-4">
              I'm an AI engineer and knowledge systems designer with a background in embeddings, RAG pipelines, and research workflow automation. I've built tools like VaultBubbles (browser-based knowledge capture and exploration) and proposed novel metrics like Divariance for faster image/text classification.
            </p>
          </div>
          <div>
            <p className="mb-4">
              I built data and decision systems for electricity trading for ten years - focusing on what was important TODAY in a sea of noise. I know quantitative risk and factor analysis intimately.
            </p>
            <p>
              Whether you're a team drowning in docs or an individual tracking complex research, I help turn noise into knowledge. Dominate your data.
            </p>
          </div>
        </div>
      </section>

      {/* VaultBubble Section */}
      <section className="bg-[#1A2D4B] rounded-2xl p-8 md:p-12 mx-6 mb-12 shadow-xl" aria-labelledby="vaultbubble-heading">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Image 
              src="/vaultbubbles-icon-48.webp" 
              alt="VaultBubble Logo" 
              width={48}
              height={48}
              className="w-12 h-12"
              loading="lazy"
              quality={90}
            />
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#D35400]">VaultBubble</h2>
          </div>
          <p className="text-base md:text-lg mb-6">
            A Chrome extension and local AI system to build your personal research vault. Save URLs, text, and notes as you browse. VaultBubble automatically organizes everything into topics and visualizes your knowledge in an interactive bubble chart. Ask questions about your captured documents using natural language search. Everything stays private on your computer.
          </p>
          <div className="mb-6">
            <Image 
              src="/VB_screenshot.webp" 
              alt="Screenshot of VaultBubble interface showing an interactive bubble chart visualization of knowledge topics, with search functionality and document organization features" 
              width={1200}
              height={800}
              className="w-full rounded-lg"
              loading="lazy"
              quality={85}
            />
          </div>
          <Button 
            className="bg-[#D35400] text-white hover:bg-orange-700 focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-[#1A2D4B]"
            onClick={() => {
              logEvent('button_click', { button_name: 'read_more_vaultbubble', destination: 'github' });
              window.open('https://github.com/doc1000/text_analyzer', '_blank');
            }}
            aria-label="Read more about VaultBubble on GitHub (opens in new tab)"
          >
            READ MORE &gt;
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="text-center px-6 py-12 mb-8" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="text-xl md:text-2xl font-bold text-white mb-4">Contact</h2>
        <p className="text-[#DDE2E7] mb-6">Need AI knowledge tools now? <span className="text-white font-bold">Reach out</span>:</p>
        <div className="space-y-2 text-base md:text-lg text-[#DDE2E7]" role="list">
          <a 
            href="mailto:info@knowledgealgorithms.com" 
            className="hover:text-[#D35400] focus:text-[#D35400] focus:outline-none focus:ring-2 focus:ring-[#D35400] focus:ring-offset-2 focus:ring-offset-[#0B1E3B] transition-colors block"
            aria-label="Send email to info@knowledgealgorithms.com"
            onClick={() => logEvent('link_click', { link_type: 'email' })}
          >
            info@knowledgealgorithms.com
          </a>
          <a 
            href="https://github.com/doc1000" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#D35400] focus:text-[#D35400] focus:outline-none focus:ring-2 focus:ring-[#D35400] focus:ring-offset-2 focus:ring-offset-[#0B1E3B] transition-colors block"
            aria-label="Visit GitHub profile (opens in new tab)"
            onClick={() => logEvent('link_click', { link_type: 'github' })}
          >
            https://github.com/doc1000
          </a>
          <a 
            href="https://www.linkedin.com/in/dosteresh/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#D35400] focus:text-[#D35400] focus:outline-none focus:ring-2 focus:ring-[#D35400] focus:ring-offset-2 focus:ring-offset-[#0B1E3B] transition-colors block"
            aria-label="Visit LinkedIn profile (opens in new tab)"
            onClick={() => logEvent('link_click', { link_type: 'linkedin' })}
          >
            https://www.linkedin.com/in/dosteresh/
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-700 pt-6 pb-8 px-6 text-center max-w-4xl mx-auto">
        <p className="text-xs md:text-sm text-gray-400 mb-4">
          Building with AI. Driven by Humans.
        </p>
        <div className="flex justify-center gap-4 text-xs text-gray-500">
          <Link 
            href="/privacy" 
            className="hover:text-[#D35400] transition-colors"
          >
            Privacy Policy
          </Link>
          <span>|</span>
          <Link 
            href="/terms" 
            className="hover:text-[#D35400] transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </footer>
    </div>
  );
}
