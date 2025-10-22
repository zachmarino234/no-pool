import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ContactProvider } from "@/contexts/ContactContext";
import ContactOverlay from "@/components/ContactOverlay";
import ContactOverlayWrapper from "@/contexts/ContactOverlayWrapper";

export const metadata: Metadata = {
  title: "No Pool Productions",
  description: "No Pool Productions is here to make a splash in the theatrical landscape, committed to developing and fostering unique and thrilling work for a new generation of artists and audiences alike",
  openGraph: {
    title: 'My Website Title for Open Graph',
    description: 'A description specifically for Open Graph sharing.',
    url: 'https://www.example.com',
    siteName: 'My Website',
    images: [
      {
        url: 'https://www.example.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Open Graph Image Alt Text',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Awesome Page (Twitter)',
    description: 'A description of my awesome page for Twitter.',
    images: ['https://example.com/twitter-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/dbw5tsh.css" />
      </head>
      <body>
        <ContactProvider>
          <NavBar />
          {children}
          <Footer />
          <ContactOverlayWrapper />
        </ContactProvider>
      </body>
    </html>
  );
}