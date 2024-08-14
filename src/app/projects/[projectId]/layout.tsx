import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./../../globals.css"
<div className=""></div>

//components
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


export default function ProjectLayout() {
  return (
    <html lang="en">
      <body >
        <Navbar />
       
        <Footer />

      </body>
    </html>
  );
}
