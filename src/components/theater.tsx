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
  const [skillIndex, setSkillIndex] = useState(-1);

  
  function showNextImage() {
    setSkillIndex(index => {
      console.log(index + "next");
      if (index === skills.length - 1) return 0
      return index + 1
    })
  }

  function showPrevImage() {
    setSkillIndex(index => {
      console.log(index + "prev");
      if (index === 0) return skills.length - 1
       return index - 1
    })
  }

  return (
    <section className="cv_theater"
      aria-label="Image Slider"

    >
      <div className="cv_slide">
        <div className="skill_selection" >
        {skills.map(({urlIcon, altIcon,title}, index) => (
          <div
            key={index}
            className="skill_thumb"


            style={{ translate: skillIndex !== -1 ?  `${-55 * skillIndex}%` : `0`  }}

            aria-label={`View Image ${index + 1}`}
            onClick={() => { 
              console.log(skillIndex, index)
              skillIndex === index 
              ? setSkillIndex(-1) 
              : setSkillIndex(index)}
            }
          >
              <div className={ index === skillIndex ? "card active":"card"}>
                <div className="about_slider-content">
                  <p>{title}</p>
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
          </div>
        ))}
      </div>
      <div className="arrow_nav">
        <button
          onClick={showPrevImage}
          className="cv_prev"
          aria-label="View Previous Image"
          >
          <ArrowBigLeft size={64}aria-hidden />
        </button>
        <button
          onClick={showNextImage}
          className="cv_next"
          aria-label="View Next Image"
          >
          <ArrowBigRight size={64}aria-hidden />
        </button>
      </div>
    </div>
      {skillIndex >= 0 && 
      <div className="cv_stage card" >
        <h3 className="cv_stage_title">{skills[skillIndex].title}</h3>
        <div className="cv_stage_content">
          <p>{skills[skillIndex].content}</p>
        </div>
        {skills[skillIndex].urlMainImg && 
        <Image 
          src={skills[skillIndex].urlMainImg }
          alt={skills[skillIndex].altMainImg || "skill image preview"}
          width={800}
          height={600}
          className="cv_stage_img"
        />    
        }
      </div>
    }

      {/* <button
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
      </button> */}


    </section>
  )
}