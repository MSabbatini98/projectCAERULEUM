// 'use client'
import { ImageSlider } from "../../components/slider"
import CoolTitle from "@/components/utils/coolTitle"
import AboutMap from "@/components/aboutMap"

import hobby1 from "../../../public/media/sliderImgs/car-1.jpg"
import hobby2 from "../../../public/media/sliderImgs/car-2.jpg"
import hobby3 from "../../../public/media/sliderImgs/car-3.jpg"
import hobby4 from "../../../public/media/sliderImgs/car-4.jpg"
import hobby5 from "../../../public/media/sliderImgs/car-5.jpg"

const SLIDES = [
  { url: hobby1, 
    alt: "", 
    title: "Guardare anime", 
    content: "Questo elenco non è in ordine, ma tra tutti i miei hobby, gli anime occupano sicuramente più tempo, in quanto è una delle poche passioni che durano orami da diversi anni " 
  },
  { url: hobby2, alt: "Car Two", title: "Pollice Verde-Acqua", content: "content1" },
  { url: hobby3, alt: "Car Three", title: "Decorazioni in argilla", content: "content1" },
  { url: hobby4, alt: "Car Four", title: "Dipingere", content: "content1"  },
  { url: hobby5, alt: "Car Five", title: "Suonare", content: "content1"  },
  { url: hobby5, alt: "Car Four", title: "Cucinare", content: "content1"  },
  { url: hobby5, alt: "Car Four", title: "Recuperare", content: "content1"  }

]
import "../styles/about.scss"


export default function About() {

    return (
  <section className="main_content about">
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        aspectRatio: "10 / 6",
        margin: "0 auto",
      }}
    >

      <CoolTitle
        title="La mia mission"
        colorClass="blue_2"
      />  
      <p className="about_mission">
        La mia mission è quella di condividere le mie esperienze e conoscenze con gli altri, 
        in modo da ispirare e motivare le persone a vivere una vita più piena e soddisfacente. 
        Credo che la condivisione delle esperienze sia un modo potente per imparare e crescere, 
        e spero che il mio sito possa essere un luogo dove le persone possano trovare ispirazione e supporto per raggiungere i loro obiettivi.
      </p>

      <CoolTitle
        title="Matteo e i suoi hobby"
        colorClass="blue_2"
      />  
      <p className="about_hobby">
        I miei hobby includono la fotografia, il viaggio, la cucina e l'ambientalismo. 
        Amo esplorare nuovi luoghi e culture attraverso i miei viaggi, e mi piace condividere le mie esperienze con gli altri attraverso la fotografia. 
        La cucina è un'altra passione che mi permette di esprimere la mia creatività e di sperimentare nuovi sapori. 
        Infine, l'ambientalismo è una causa a cui tengo molto, e cerco di fare la mia parte per proteggere il nostro pianeta.
      </p>
      
      <ImageSlider images={SLIDES} />

      <CoolTitle
        title="Coding Timeline"
        colorClass="blue_2"
      />  
      <p className="about_coding">
        La mia timeline di coding è iniziata nel 2020, quando ho deciso di imparare a programmare. 
        Ho iniziato con il linguaggio Python, e da allora ho imparato diversi altri linguaggi e tecnologie, tra cui JavaScript, React, Node.js e molti altri. 
        La programmazione è diventata una passione per me, e mi piace risolvere problemi complessi e creare soluzioni innovative attraverso il codice.
      </p>

      
      <CoolTitle
        title="Matteo e l'ambientalismo... "
        colorClass="blue_2"
      />  
      <p className="about_ambientalism">
        L'ambientalismo è una causa a cui tengo molto, e cerco di fare la mia parte per proteggere il nostro pianeta. 
        Credo che sia importante sensibilizzare le persone sui problemi ambientali e incoraggiare azioni concrete per ridurre l'impatto umano sull'ambiente. 
        Spero che il mio sito possa essere un luogo dove le persone possano trovare informazioni e risorse per vivere in modo più sostenibile e contribuire alla protezione del nostro pianeta.
      </p>

      <CoolTitle
        title="Parti del mondo visitate"
        colorClass="blue_2"
      /> 
      <AboutMap/>
      
    </div>
  </section>
  )
}