import type { Metadata } from "next";
import { Goblin_One, Gugi, Goldman } from "next/font/google";
import Link from "../../node_modules/next/link";
import "./globals.css";
import {Roboto} from '@next/font/google'


//components
import Navbar from '../components/navbar'
import Header from '../components/header'
import Footer from '../components/footer'



const gugi = Gugi({ 
  subsets: ["latin"],
  weight: ['400'] 
})

const goldman = Goldman({ 
  subsets: ["latin"],
  weight: ['400'] 
})

const goblin_one = Goblin_One({
  subsets: ['latin'],
  weight: '400' 
})

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
    <html lang="en" >
      <body>
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
