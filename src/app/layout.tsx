import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import SceneWrapper from "@/components/SceneWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ahmed Ben Abid | Software Engineer",
  description: "Software Engineer specializing in JS/TS, Full-Stack development, and Automation. CEO & Founder of BlazeShift.",
  keywords: ["Software Engineer", "Full-Stack Developer", "Automation", "TypeScript", "Next.js", "React", "BlazeShift"],
  authors: [{ name: "Ahmed Ben Abid" }],
  openGraph: {
    title: "Ahmed Ben Abid | Software Engineer",
    description: "I build systems, tools, and automations that scale teams.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Ben Abid | Software Engineer",
    description: "I build systems, tools, and automations that scale teams.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        <SceneWrapper />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
