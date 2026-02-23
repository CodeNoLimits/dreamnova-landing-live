import type { Metadata } from "next";
import { Cinzel, Rajdhani, Space_Mono } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({ 
  subsets: ["latin"], 
  variable: "--font-cinzel" 
});

const rajdhani = Rajdhani({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani" 
});

const spaceMono = Space_Mono({ 
  subsets: ["latin"], 
  weight: ["400", "700"],
  variable: "--font-space-mono" 
});

export const metadata: Metadata = {
  title: "Dream Nova | DCS",
  description: "Le premier passeport qualitatif du mérite humain. Crée ton monde avec Genie 3.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark scroll-smooth" dir="ltr">
      <body className={`${cinzel.variable} ${rajdhani.variable} ${spaceMono.variable} font-rajdhani antialiased`}>
        {children}
      </body>
    </html>
  );
}
