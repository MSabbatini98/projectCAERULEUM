// 'use client'
import { ImageSlider } from "../../components/slider"
import CoolTitle from "@/components/utils/coolTitle"
import AboutMap from "@/components/aboutMap"

import car1 from "../../../public/media/sliderImgs/car-1.jpg"
import car2 from "../../../public/media/sliderImgs/car-2.jpg"
import car3 from "../../../public/media/sliderImgs/car-3.jpg"
import car4 from "../../../public/media/sliderImgs/car-4.jpg"
import car5 from "../../../public/media/sliderImgs/car-5.jpg"

const SLIDES = [
  { url: car1, alt: "Car One", title: "Title 1", content: "content1" },
  { url: car2, alt: "Car Two", title: "Title 2", content: "content1" },
  { url: car3, alt: "Car Three", title: "Title 3", content: "content1" },
  { url: car4, alt: "Car Four", title: "Title 4", content: "content1"  },
  { url: car5, alt: "Car Five", title: "Title 5", content: "content1"  }
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
      <ImageSlider images={SLIDES} />

      <AboutMap/>
      
    </div>
  </section>
  )
}