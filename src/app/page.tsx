'use client'

import Image from "next/image";
import { Goblin_One,  Goldman } from 'next/font/google'


const font_header = Goblin_One({ 
  subsets: ['latin'],
  weight: ['400']
})
const font_text = Goldman({ 
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function Home() {
  return (
    <>
     <style jsx global>{`
        .hero {
          font-family: ${font_header.style.fontFamily};
        }
        nav.main_nav, span {
          font-family : ${font_text.style.fontFamily};
        }
      `}</style>
    <div className="hero">
      <div className="hero_content">
        <h1>Project <br /> Caeruleum</h1>
        <h3>By Matteo Sabbatini</h3>
        <div className="icon">
          <Image
            src="/media/pronunciation.avif"
            width={50}
            height={50}
            alt="icona della pronuncia, clicca per ascoltare"
            />
        </div>        
      </div>
    <div className="bg_image">
        <Image
          src="/media/preview.webp"
          height={850}
          width={400}
          alt="Foto dell'autore del sito: Matteo Sabbatini"
        />
      </div>
    </div>
  </>
  );
}
