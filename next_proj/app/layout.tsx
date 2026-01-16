import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/Analytics";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.knowledgealgorithms.com"),
  title: "Knowledge Algorithms - AI Search & Research Systems",
  description: "Build custom, local-first AI search and research systems. Expert in RAG pipelines, vector databases, topic modeling, and knowledge visualization.",
  keywords: ["AI", "RAG", "vector databases", "knowledge systems", "local-first AI", "topic modeling", "VaultBubble"],
  openGraph: {
    title: "Knowledge Algorithms - AI Search & Research Systems",
    description: "Build custom, local-first AI search and research systems for yourself or your team.",
    type: "website",
    url: "https://www.knowledgealgorithms.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Knowledge Algorithms - AI Search & Research Systems",
    description: "Build custom, local-first AI search and research systems for yourself or your team.",
  },
  icons: {
    icon: "/logo_square.png",
    apple: "/logo_square.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ErrorBoundary>
          {children}
          <Analytics />
        </ErrorBoundary>
      </body>
    </html>
  );
}
