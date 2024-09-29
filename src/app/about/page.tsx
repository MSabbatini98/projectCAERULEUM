import { ImageSlider } from "../../components/slider"

import car1 from "./sliderImgs/car-1.jpg"
import car2 from "./sliderImgs/car-2.jpg"
import car3 from "./sliderImgs/car-3.jpg"
import car4 from "./sliderImgs/car-4.jpg"

const IMAGES = [
  { url: car1, alt: "Car One", title: "Title 1", content: "content1" },
  { url: car2, alt: "Car Two", title: "Title 1", content: "content1" },
  { url: car3, alt: "Car Three", title: "Title 1", content: "content1" },
  { url: car4, alt: "Car Four", title: "Title 1", content: "content1"  }
]
import "../styles/about.scss"
export default function About() {
    console.log(IMAGES);

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
      <ImageSlider images={IMAGES} />
      <a href="/" style={{ fontSize: "4rem" }}>
        Link
      </a>
    </div>

        </section>
    )
}