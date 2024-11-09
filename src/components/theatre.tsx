'use client'
import { useState } from "react"
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react"
import "./styles/slider.scss"
import Image from "next/image"
import { StaticImageData } from 'next/image';


type SkillSliderProps = {
  skills: {
    urlIcon: StaticImageData
    altIcon: string
    urlMainImg : StaticImageData
    altMainImg: string
    title: string
    content: string
  }[]
}

export function ImageSlider({ skills }: SkillSliderProps) {
  const [imageIndex, setImageIndex] = useState(0)

  function showNextImage() {
    setImageIndex(index => {
      if (index === skills.length - 1) return 0
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
    <section className="theatre"
      aria-label="Skill Slider"
    >
      <a href="#after-image-slider-controls" className="skip-link">
        SkipImage Slider Controls
      </a>
      <div className="skill_div">
        {skills.map(({ urlIcon, altIcon }, index) => (
          <div 
            className="theatre-container"
            key={index}
            // style={{ translate: `${-100 * imageIndex}%` }}
          >
              <Image 
                src={urlIcon}
                alt={altIcon}
                width={200}
                height={300}
                aria-hidden={imageIndex !== index}
                className="threatre_img"
              />
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