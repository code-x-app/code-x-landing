import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-orbitron", 
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Code-X | Defend the Digital Frontier",
  description: "Code-X is assembling an intergalactic cyber-spider force — tools and experiments that keep explorers safe while they tinker at the web's edge. Featuring Securi-X, our MVP Web3 security companion.",
  keywords: ["Web3 Security", "Ethereum", "Blockchain Security", "DeFi Protection", "Cyber Security", "Code-X", "Securi-X"],
  authors: [{ name: "Code-X Team" }],
  creator: "Code-X",
  publisher: "Code-X",
  metadataBase: new URL("https://code-x.app"),
  openGraph: {
    title: "Code-X | Defend the Digital Frontier",
    description: "Intergalactic cyber-spider force protecting Web3 explorers",
    url: "https://code-x.app",
    siteName: "Code-X",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Code-X - Cyber Spider Force",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Code-X | Defend the Digital Frontier",
    description: "Intergalactic cyber-spider force protecting Web3 explorers",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${orbitron.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
