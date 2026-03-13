import Image from "next/image"

import "../styles/curriculum.scss"
import CoolTitle from "@/components/utils/coolTitle"
import Theater from "@/components/theater";

import {SKILLZ,  LANG_SLIDER} from "./data"

export default function Curriculum() {

        

  
    return (
       <div className="main_content curriculum">
            <div className="cv_upper">
                <div className="cv_txt">
                    <p className="intro">
                        {"Dall'esperienza accumulata nell'e-Commerce in Spotview alla passione innata per l'ambiente, scopri i più importanti passi che hanno contribuito a costruire una professionalità versatile e responsabile."}
                    </p>
                    <p className="fake_cta">Clicca sul curriculum per scaricarlo !</p>
                </div>
                <div className="cv_img">
                    <Image
                        src="/media/cv/cv.avif"
                        width={400}
                        height={800}
                        alt="Author handing out his CV"
                    />
                    <Image
                        src="/media/cv/extract-cv.avif"
                        className="hover"
                        width={400}
                        height={800}
                        alt="Author handing out his CV"
                    />                    
                </div>
            </div>
            {SKILLZ.map(({ title, content}, index) => (
          <div
            className="SKILLZ_single" 
                key={index}
            >
                <CoolTitle
                    title={title}
                    colorClass="blue_5"
                />
                <div >
                    <p>{content}</p>
                </div>
            </div>
            ))}

            <CoolTitle
                title={"Lingue conosciute"}
                colorClass="blue_5"
            />
            <div className="cv_theater" style={{height:"2000px"}}>
                <Theater  skills={ LANG_SLIDER} />
            </div>
        </div>
    )
}