'use client'
import "./styles/theater.scss"
import { useState } from "react"
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react"
import Image from "next/image"
import { StaticImageData } from 'next/image';


type LangSliderProps = {
  langs: {
    urlIcon: StaticImageData
    altIcon: string
    urlMainImg: StaticImageData
    altMainImg: string
    title: string
    content: string
    example: string
  }[]
}

export default function Theater({ langs }: LangSliderProps) {
  const [langIndex, setLangIndex] = useState(-1);

  
  function showNextImage() {
    setLangIndex(index => {
      console.log(index + "next");
      if (index === langs.length - 1) return 0
      return index + 1
    })
  }

  function showPrevImage() {
    setLangIndex(index => {
      console.log(index + "prev");
      if (index === 0) return langs.length - 1
       return index - 1
    })
  }

  return (
    <section className="cv_theater theater_lang"
      aria-label="Image Slider"

    >
      <div className="cv_slide lang_slide">
        <div className=" nav_left">
          <button
            onClick={showPrevImage}
            className="cv_prev"
            aria-label="View Previous Image"
            >
            <ArrowBigLeft size={64}aria-hidden />
          </button>
        </div>
        <div className="skill_selection lang_selection" >
        {langs.map(({urlIcon, altIcon,title, example}, index) => (
          <div
            key={index}
            className="skill_thumb lang_thumb"
            aria-label={`View Image ${index + 1}`}
            onClick={() => { 
              langIndex === index 
              ? setLangIndex(-1) 
              : setLangIndex(index)}
            }
          >
              <div className={ index === langIndex ? "card active":"card"}>
                <div className="about_slider-content">
                  <p className="thumb_lang">{title}</p>
                  <Image 
                    src={urlIcon}
                    alt={altIcon}
                    width={800}
                    height={600}
                    aria-hidden={langIndex !== index}
                    className="slider_img"
                  />
                </div>
              </div>
          </div>
        ))}
      </div>
      <div className=" nav_right">
        <button
          onClick={showNextImage}
          className="cv_next"
          aria-label="View Next Image"
          >
          <ArrowBigRight size={64}aria-hidden />
        </button>
      </div>
    </div>
      {langIndex >= 0 && 
      <div className="cv_stage card stage_lang" >
        <h3 className="cv_stage_title">{langs[langIndex].title}</h3>
        <div className="cv_stage_content">
          <div className="cv_stage_content_intro">
          <p>{langs[langIndex].content} </p>
          <h4>Esempio :</h4>
          <p>{langs[langIndex].example}</p> 
          </div>

        {langs[langIndex].urlMainImg && 
        <div className="cv_stage_img">
          <Image 
            src={langs[langIndex].urlMainImg }
            alt={langs[langIndex].altMainImg || "lang image preview"}
            width={400}
            height={300}
            className="cv_stage_img"
            />    
          </div>
        }
        </div>
        
      </div>
    }
    </section>
  )
}

