// import type { Metadata } from "next";
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

// export const metadata: Metadata = {
//   title: "Decoding The Future",
//   description: "This belongs to FACOSA",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="csrf-token" content="{{ csrf_token() }}"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="Decoding The Future event held by FACOSA" />
        {/* <link rel="icon" type="image/x-icon" href="@/public/favicon.ico" /> */}
        <title>Decoding The Future</title>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://decodingthefuture.xyz" />
        <meta property="og:title" content="Compad | Private Sale" />
        <meta property="og:description" content="Compad private sale website" />
        <meta property="og:image" content="https://pbs.twimg.com/profile_images/1685353964450004993/7q2iSxcW_400x400.jpg" />
        <meta name="twitter:card" content="Decoding The Future event held by FACOSA" />
        <meta name="twitter:url" content="https://x.com/Compadofficial?t=O7E36yY3IgiypnzQ9f9MwQ&s=09" />
        <meta name="twitter:title" content="Compad | Private Sale" />
        <meta name="twitter:description" content="Compad private sale website" />
        <meta name="twitter:image" content="https://pbs.twimg.com/profile_images/1685353964450004993/7q2iSxcW_400x400.jpg" />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
      </head>
      <body className={`${xeroda.variable} ${montserrat.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
