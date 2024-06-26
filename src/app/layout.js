// import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localfont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { GlobalStateProvider } from "@/context/GlobalStateContext";

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
        <meta name="csrf-token" content="{{ csrf_token() }}" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Register for the upcoming 'Decoding The Future' event organized by FACOSA Uniuyo."
        />
        {/* <link rel="icon" type="image/x-icon" href="@/public/favicon.ico" /> */}
        <title>Registration | Decoding The Future</title>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://decodingthefuture.xyz" />
        <meta property="og:title" content="Registration | Decoding The Future" />
        <meta
          property="og:description"
          content="Register for the upcoming 'Decoding The Future' event organized by FACOSA Uniuyo."
        />
        <meta
          property="og:image"
          content="https://pbs.twimg.com/profile_images/1794030166236090368/g5Sl3KvE_400x400.jpg"
        />
        <meta
          name="twitter:card"
          content="Register for the upcoming 'Decoding The Future' event organized by FACOSA Uniuyo."
        />
        <meta name="twitter:url" content="https://x.com/Focosauniuyo" />
        <meta name="twitter:title" content="Registration | Decoding The Future" />
        <meta
          name="twitter:description"
          content="Register for the upcoming 'Decoding The Future' event organized by FACOSA Uniuyo."
        />
        <meta
          name="twitter:image"
          content="https://pbs.twimg.com/profile_images/1794030166236090368/g5Sl3KvE_400x400.jpg"
        />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
      </head>
      <body
        className={`${xeroda.variable} ${montserrat.className} h-full relative`}
      >
        <GlobalStateProvider>{children}</GlobalStateProvider>
      </body>
    </html>
  );
}
