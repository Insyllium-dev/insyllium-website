import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const OpenSans = Open_Sans({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Insyllium",
  description: "Software development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
