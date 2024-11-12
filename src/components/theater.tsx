'use client'
import "./styles/theater.scss"
import { useState } from "react"
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react"
import Image from "next/image"
import { StaticImageData } from 'next/image';
import { div } from "framer-motion/client"


type SkillSliderProps = {
  skills: {
    urlIcon: StaticImageData
    altIcon: string
    urlMainImg: StaticImageData
    altMainImg: string
    title: string
    content: string
  }[]
}

export default function Theater({ skills }: SkillSliderProps) {
  const [skillIndex, setSkillIndex] = useState(0)

  function showNextImage() {
    setSkillIndex(index => {
      if (index === skills.length - 1) return 0
      return index + 1
    })
  }

  function showPrevImage() {
    setSkillIndex(index => {
      if (index === 0) return skills.length - 1
      return index - 1
    })
  }



  return (
    <section className="cv_theater"
      aria-label="Image Slider"

    >
      <a href="#after-image-slider-controls" className="skip-link">
        Skip Image Slider Controls
      </a>
      <div className="about_slide">
        <div
          style={{
            position: "relative",

            display: "flex",
            gap: "20px",
          }}
        >
        {skills.map(({urlIcon, altIcon,title}, index) => (
          <div
            key={index}
            className="skill_thumb"
            aria-label={`View Image ${index + 1}`}
            onClick={() => setSkillIndex(index)}
          >
            {index === skillIndex ? (
              <div className="card active">
                <div className="about_slider-content">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque hic adipisci blanditiis molestiae aspernatur molestias tenetur repellendus atque, et cupiditate ut velit similique ea voluptas a illo animi aperiam obcaecati!</p>
                  <Image 
                    src={urlIcon}
                    alt={altIcon}
                    width={800}
                    height={600}
                    aria-hidden={skillIndex !== index}
                    className="slider_img"
                  />
                </div>
              </div>
            )  : (
              <div className="card">
              <div className="about_slider-content">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque hic adipisci blanditiis molestiae aspernatur molestias tenetur repellendus atque, et cupiditate ut velit similique ea voluptas a illo animi aperiam obcaecati!</p>
                <Image 
                  src={urlIcon}
                  alt={altIcon}
                  width={800}
                  height={600}
                  aria-hidden={skillIndex !== index}
                  className="slider_img"
                />
              </div>
            </div>    
            )}

          </div>
        ))}
      </div>

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

      <div id="after-image-slider-controls" />
    </section>
  )
}