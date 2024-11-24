'use client'

import Image from "next/image"
import CustomizedSwitches from "./Header/modes"
import Link from "next/link"

import "./styles/header.scss"

import { usePathname } from 'next/navigation'
 
export default function Header() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    pathname === '/' ? (
        <div className="header">
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
        <div className="header ">
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
              <div className="page_title">
                
              </div>
              <div className="chosen_mode">
                <Image
                    src="/media/header/mode-sun.avif"
                    width={120}
                    height={120}
                    alt="sun icon"
                />
              </div>
          </div>
      )
  )
}