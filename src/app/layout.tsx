import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Hameed & Azra Awards",
  description:
    "The Hameed & Azra Awards — celebrating excellence in academic research.",
  openGraph: {
    title: "Hameed & Azra Awards",
    description:
      "The Hameed & Azra Awards — celebrating excellence in academic research.",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "The Hameed & Azra Awards",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hameed & Azra Awards",
    description:
      "The Hameed & Azra Awards — celebrating excellence in academic research.",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {/* <Navbar / */}
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}