import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0B1E3B] text-[#DDE2E7]">
      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-normal tracking-wide mb-4 text-white">
          Unlock AI.<br />
          Dominate Your Data.
        </h1>
        <p className="text-lg md:text-xl text-[#DDE2E7] max-w-2xl mb-8">
          Build custom, local-first AI search and research systems for yourself or your team.
        </p>
        <Button className="bg-[#D35400] text-white hover:bg-orange-700 px-8 py-6 text-base font-semibold">
          GET IN TOUCH
        </Button>
      </section>

      {/* Services Section - Two Column with Logo */}
      <section className="bg-[#11243F] rounded-2xl p-8 md:p-12 mx-6 mb-12 shadow-xl">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 max-w-6xl mx-auto">
          <div className="flex-shrink-0 md:w-48">
            <Image 
              src="/logo_square.png" 
              alt="Maze Logo" 
              width={128}
              height={128}
              className="w-24 h-24 md:w-32 md:h-32 mx-auto md:mx-0"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#D35400] mb-6">What I Do</h2>
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
      <section className="bg-[#1A2D4B] rounded-2xl p-8 md:p-12 mx-6 mb-12 shadow-xl">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Image 
              src="/vaultbubbles-icon-48.png" 
              alt="VaultBubble Logo" 
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#D35400]">VaultBubble</h2>
          </div>
          <p className="text-base md:text-lg mb-6">
            A Chrome extension and local AI system to build your personal research vault. Save URLs, text, and notes as you browse. VaultBubble automatically organizes everything into topics and visualizes your knowledge in an interactive bubble chart. Ask questions about your captured documents using natural language search. Everything stays private on your computer.
          </p>
          <div className="mb-6">
            <Image 
              src="/VB_screenshot.png" 
              alt="VaultBubble Screenshot" 
              width={1200}
              height={800}
              className="w-full rounded-lg"
            />
          </div>
          <Button className="bg-[#D35400] text-white hover:bg-orange-700">READ MORE &gt;</Button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center px-6 py-12 mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Contact</h2>
        <p className="text-[#DDE2E7] mb-6">Need AI knowledge tools now? <span className="text-white font-bold">Reach out</span>:</p>
        <div className="space-y-2 text-base md:text-lg text-[#DDE2E7]">
          <p>[ YOUR EMAIL HERE ]</p>
          <p>[ YOUR TWITTER HERE ]</p>
          <p>[ YOUR GITHUB HERE ]</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-700 pt-6 pb-8 px-6 text-center text-xs md:text-sm text-gray-400 max-w-4xl mx-auto">
      Building with AI.  Driven by Humans.
      </footer>
    </div>
  );
}
