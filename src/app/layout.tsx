import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "../../node_modules/next/link";
import "./globals.css";


//components
import Navbar from '../components/navbar'
import Header from '../components/header'



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
          <footer
            style={{
              backgroundColor: "ghostwhite",
              padding : "10px 0",
              color : "greenyellow",
              textAlign : "center",
            }}>
            <p>footer and credits</p>
          </footer>
        </div>


        </body>
    </html>
  );
}
