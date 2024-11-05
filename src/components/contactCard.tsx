import "./styles/card.scss"
import Image from "next/image"
import { StaticImageData } from 'next/image';

import car1 from "../../../public/media/sliderImgs/car-1.jpg"

type contactCardProps = {
    cards: {
        imageUrl: StaticImageData
        imageAlt: string
        url: string
        text: string
    }[]
}

export default function ContactCard({ cards } : contactCardProps) {
  console.log(cards)
    return ( <div className="contact_container">

{cards.map(({ imageUrl, imageAlt, url , text}, index) => (
          <div 
            className="contact_card card"
            key={index}
          >
            <a href={url} rel="noopener noreferrer" target="_blank">            
              <Image 
                src={imageUrl}
                alt={imageAlt}
                width={90}
                height={90}
                className="img-slider-img"
              />
              <p>{text}</p>
            </a>
          </div>
        ))}
        </div>
    )
}
