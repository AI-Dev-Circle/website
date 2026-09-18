import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/dm-sans";
import "./globals.css";
import Header from "@/components/header";
import Atmosphere from "@/components/atmosphere";
import { Footer } from "@/components/site";
export const metadata: Metadata = {
  title: {
    default: "AI Dev Circle — Good people. Big possibilities.",
    template: "%s · AI Dev Circle",
  },
  description:
    "A community for developers exploring and building with AI. Born from ReactPlay, bringing people together in Bengaluru through meetups, ideas, and shared curiosity.",
  applicationName: "AI Dev Circle",
};
export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Atmosphere />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
