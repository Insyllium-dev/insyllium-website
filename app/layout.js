import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const OpenSans = Open_Sans({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Insyllium",
  description: "At Insyllium, we take pride in crafting innovative solutions that empower businesses to thrive in the digital era. Our Services Section showcases the cutting-edge capabilities and unique offerings that set us apart from the rest.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Analytics />
      <SpeedInsights />
      <body className={`${OpenSans.className} bg-neutral-900`}>
        <div>
          <Navbar />
        </div>
        {children}
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
