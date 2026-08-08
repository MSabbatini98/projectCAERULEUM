import Image from "next/image"
import "../app/styles/hero.scss"
import Pronunciation from "../components/Pronunciation";
import { Goblin_One } from "next/font/google";

const font_header = Goblin_One({ 
  subsets: ['latin'],
  weight: ['400']
})

export default function Home() {
  return (
    <>
    <div className="hero">
      <div className={`hero_content ` + font_header.className}>
        <h1>Project <br /> Caeruleum</h1>
        <h3>By Matteo Sabbatini</h3>
        <Pronunciation
          audioUrl="/audio/pronuncia-enhanced.mp3"
          alt="Website name pronunciation"
        />
      </div>
    <div className="bg_image">
        <Image
          src="/media/MatteoSabbatiniHP.webp"
          height={850}
          width={400}
          alt="Foto dell'autore del sito: Matteo Sabbatini"
        />
      </div>
    </div>
  </>
  );
}
