'use client'

import Image from "next/image"
import CustomizedSwitches from "@/components/Header/modes"
import Link from "next/link"

import "@/components/styles/header.scss"

import { usePathname } from 'next/navigation'
import { Goblin_One } from "next/font/google";

const font_header = Goblin_One({ 
  subsets: ['latin'],
  weight: ['400']
})

const renderHeader = (pathname : string) => {
    switch (pathname) {
        case "/curriculum": return <h1 className="header_title blue_5">Curriculum </h1>
        case "/projects": return <h1 className="header_title blue_4">Progetti </h1>
        case "/about": return <h1 className="header_title blue_2">Su di me </h1>
        case "/contacts": return <h1 className="header_title blue_1">Contatti  </h1>
    }
}
const renderHeaderBg = (pathname : string) => {
    switch (pathname) {
        case "/curriculum": return "blue_5"
        case "/projects": return "blue_4"
        case "/about": return "blue_2"
        case "/contact":return "blue_1"
    }
}
export default function Header() {
    const pathname = usePathname();

//   console.log(pathname);
  return (
    pathname === '/' ? (
        <div className="header header_hp">
              <div className="languages">
                  <div className="single_flag">
                      <Image
                          className="active"
                          src="/media/header/flags/flag-italy.avif"
                          alt="Italian flag icon"
                          width={46}
                          height={46}
                      />
                  </div>
                  <div className="single_flag">
                      <Image
                          src="/media/header/flags/flag-germany.avif"
                          alt="German flag icon"
                          width={46}
                          height={46}
                      />
                  </div>
  
                  <div className="single_flag">
                      <Image
                          src="/media/header/flags/flag-united-kingdom.avif"
                          alt="UK flag icon"
                          width={46}
                          height={46}
                      />
                  </div>
  
                  <div className="single_flag">
                      <Image
                          src="/media/header/flags/flag-france.avif"
                          alt="France flag icon"
                          width={46}
                          height={46}
                      />
                  </div>
              </div>
              <div className="logo_hp">
                  <Link href="/">
                      <Image
                          src="/media/LOGO.avif"
                          width={350}
                          height={120}
                          alt="CAERULEUM logo"
                      />
                  </Link>
              </div>
              <div className="modes">
                  <CustomizedSwitches />
              </div>
         </div>
              ) : (
        <div className={`header ` + renderHeaderBg(pathname)}>
            <div className="logo">
                <Link href="/">
                    <Image
                        src="/media/LOGO.avif"
                        width={350}
                        height={120}
                        alt="CAERULEUM logo"
                    />
                </Link>
            </div>
              <div className={`page_title ` + font_header.className}>
                { renderHeader(pathname) }
              </div>
              <div className="single_mode">
                <Image
                    src="/media/header/mode-sun.avif"
                    width={100}
                    height={100}
                    alt="sun icon"
                />
              </div>
              <div className="single_flag single_language">
                <Image
                    className="active"
                    src="/media/header/flags/flag-italy.avif"
                    alt="Italian flag icon"
                    width={62}
                    height={62}
                />
            </div>
          </div>
      )
  )
}