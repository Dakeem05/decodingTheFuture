import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localfont from "next/font/local";
import "./globals.css";

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
 });


const xeroda = localfont({
  src: [
    {
      path: "../../public/xeroda-font/XerodaRegular-p7dwr.otf",
      
    }
  ],
  variable: "--font-xeroda"
})

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
      <body className={`${xeroda.variable} ${montserrat.className}`}>{children}</body>
    </html>
  );
}
