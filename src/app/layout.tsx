import type { Metadata } from "next";
import { Goldman } from "next/font/google";
import "./globals.scss";
import "./styles/curriculum.scss";
import "./styles/projects.scss";
import "./styles/hero.scss";
import "./styles/about.scss";
import "./styles/contacts.scss";
import "./styles/loading.scss";
import "./styles/modes.scss";
import "../components/styles/footer.scss";
import "../components/styles/header.scss";
import "../components/styles/theater.scss";
import "../components/styles/card.scss";
import "../components/styles/cooltitle.scss";
import "../components/styles/slider.scss";
import "../components/styles/expandCTA.scss";
import "../components/styles/navbar.scss";

//components
import Navbar from '@/components/navbar'
import Header from '@/components/Header'
import Footer from '../components/footer'
import Breadcrumbs from '@/components/Breadcrumbss'



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
      <body >
        <Header />
        <Navbar />
        <div className="mainContent">
          <Breadcrumbs /> 
          {children}
        </div>
        <Footer />
      </body>

    </html>
    
  );
}


