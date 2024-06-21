import { Signika } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader"; 
import { GoogleTagManager } from "@next/third-parties/google";
import Headcontent from "@/shared/head-content";
import   { Toaster } from 'react-hot-toast';
const inter = Signika({ subsets: ["latin"] });

// export const metadata = {
//   manifest: "/manifest.json",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Headcontent/>
      <body className={inter.className}>
        <NextTopLoader />
        {children}

        <Toaster
  position="top-center"
  reverseOrder={false}
/>
      </body>
      <GoogleTagManager gtmId="GTM-W3QZ559" />
    </html>
  );
}
