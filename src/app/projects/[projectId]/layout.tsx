import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import "./../../globals.scss"

//components
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"


export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
