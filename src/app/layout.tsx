import type { Metadata } from "next";
import { Goldman } from "next/font/google";
import "./globals.scss";

//components
import Navbar from '@/components/navbar'
import Header from '@/components/Header'
import Footer from '../components/footer'



const goldman = Goldman({ 
  subsets: ['latin'],
  weight: ['400', '700']
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
      <body className={goldman.className}>
        <Header />
        <Navbar />
          {children}  
        <Footer />
      </body>

    </html>
    
  );
}
