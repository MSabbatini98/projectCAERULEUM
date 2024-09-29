'use client'
import { useState } from "react"
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react"
import "./styles/slider.scss"
import Image from "next/image"
import { StaticImageData } from 'next/image';


type ImageSliderProps = {
  images: {
    url: StaticImageData
    alt: string
    title: string
    content: string
  }[]
}

export function ImageSlider({ images }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0)

  function showNextImage() {
    setImageIndex(index => {
      if (index === images.length - 1) return 0
      return index + 1
    })
  }

  function showPrevImage() {
    setImageIndex(index => {
      if (index === 0) return images.length - 1
      return index - 1
    })
  }

  return (
    <section className="about_slider"
      aria-label="Image Slider"

    >
      <a href="#after-image-slider-controls" className="skip-link">
        Skip Image Slider Controls
      </a>
      <div className="about_slide">
        {images.map(({ url, alt, title }, index) => (
          <div 
            className="about_slide-container"
            key={index}
            style={{ translate: `${-100 * imageIndex}%` }}
          >
            <h1>{title}</h1>
            <div className="about_slider-content">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque hic adipisci blanditiis molestiae aspernatur molestias tenetur repellendus atque, et cupiditate ut velit similique ea voluptas a illo animi aperiam obcaecati!</p>
              <Image 
                src={url}
                alt={alt}
                width={800}
                height={600}
                aria-hidden={imageIndex !== index}
                className="img-slider-img"
                
              />
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={showPrevImage}
        className="img-slider-btn prev"
        aria-label="View Previous Image"
      >
        <ArrowBigLeft aria-hidden />
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn next"
        aria-label="View Next Image"
      >
        <ArrowBigRight aria-hidden />
      </button>
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: "20px",
        }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? (
              <CircleDot aria-hidden />
            ) : (
              <Circle aria-hidden />
            )}
          </button>
        ))}
      </div>
      <div id="after-image-slider-controls" />
    </section>
  )
}