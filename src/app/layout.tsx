import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "../../node_modules/next/link";
import "./globals.css";


//components
import Navbar from '../components/navbar'
import Header from '../components/header'
import Footer from '../components/footer'



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PROJECT CAERULEUM",
  description: "Coded by Matteo Sabbatini",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Navbar />
        <div className="main_content">
          {children}  
        </div>

        <Footer />

      </body>
    </html>
  );
}
