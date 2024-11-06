// 'use client'
import { ImageSlider } from "../../components/slider"
import CoolTitle from "@/components/utils/coolTitle"

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
  <section className="main_content">
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        aspectRatio: "10 / 6",
        margin: "0 auto",
      }}
    >
      <ImageSlider images={SLIDES} />
      <a href="/" style={{ fontSize: "4rem" }}>
        Link
      </a>



      {/* Start map section */}
      <div className="map_container">
        <CoolTitle
        title="Nazioni visitate"
        color="blue_2"/>
       
        <div className="about_map">

          <script src="https://static-bundles.visme.co/visme-embed.js"></script>

          <div className="visme_d" data-title="Top 10 Countries Map Square" data-url="x40zw83y-untitled-project" data-w="800" data-full-h="false" data-h="600" data-domain="my">
          </div>

          <p>Made with <a href="https://www.visme.co/?vc=Made-With-Visme&amp;utm_medium=Embed" target="_blank" rel="noreferrer">Visme</a></p>
        </div>
      </div>

    </div>
  </section>
  )
}