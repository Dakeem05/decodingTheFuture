import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localfont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

const xeroda = localfont({
  src: [
    {
      path: "../../public/xeroda-font/XerodaRegular-p7dwr.otf",
    },
  ],
  variable: "--font-xeroda",
});

export const metadata: Metadata = {
  title: "Decoding The Future",
  description: "This belongs to FACOSA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta name="csrf-token" content="{csrf_token()}"/>
      </head>
      <body className={`${xeroda.variable} ${montserrat.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
