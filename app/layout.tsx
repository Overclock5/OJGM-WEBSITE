import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "Best Physics Coaching in Delhi NCR for IIT-JEE & NEET | OJGM Chhavic Classes",
  description: "Join OJGM Chhavic Classes by Gold Medalist Indu Tyagi. Premier Physics coaching in Delhi NCR for IIT-JEE, NEET, and Boards since 2003.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
             __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "OJGM CHHAVIC CLASSES",
              "description": "Premier physics coaching institute in Delhi NCR providing preparation for IIT-JEE Mains, NEET, and Boards.",
              "foundingDate": "2003",
              "founder": {
                "@type": "Person",
                "name": "Indu Tyagi",
                "jobTitle": "Lead Educator",
                "award": "Gold Medalist"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Delhi NCR",
                "addressCountry": "IN"
              },
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Normal Batch",
                  "category": "Physics Coaching"
                },
                {
                  "@type": "Offer",
                  "name": "Star Batch",
                  "category": "Advanced Physics Coaching for JEE/NEET"
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans bg-slate-50 text-slate-900 flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow pt-20">
            {children}
        </main>
        <Footer />
        
        {/* Floating Contact Button */}
        <a 
          href="https://wa.me/919266597895" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-emerald-500 text-white p-4 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:bg-emerald-400 hover:scale-110 transition-all z-50 flex items-center justify-center"
          aria-label="Contact us"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </body>
    </html>
  );
}
