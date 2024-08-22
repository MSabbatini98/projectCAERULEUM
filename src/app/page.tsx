import Image from "next/image";

export default function Home() {
  return (
   <main >
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
   </main>
  );
}
