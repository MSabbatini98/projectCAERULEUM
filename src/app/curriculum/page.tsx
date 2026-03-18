import Image from "next/image"

import "../styles/curriculum.scss"
import CoolTitle from "@/components/utils/coolTitle"
import Theater from "@/components/theater"
import TheaterLang from "@/components/theaterLang";


import {SKILLZ,  LANG_SLIDER} from "./data"

export default function Curriculum() {

        

  
    return (
       <div className="main_content curriculum">
            <div className="cv_upper">
                <div className="cv_txt">
                    <p className="intro">
                        {"Dall'esperienza accumulata nell'e-Commerce in Spotview alla passione innata per l'ambiente, scopri le più importanti esperienze lavorative e formatice che hanno contribuito a costruire una professionalità versatile e responsabile."}
                    </p>
                    <p className="fake_cta">Clicca sul curriculum per scaricarlo   &rarr; </p>
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

            <CoolTitle
                title={"Lingue conosciute"}
                colorClass="blue_5"
            />
            <p>Clicca sui vari banner per avere più informazioni sulle lingue che parlo e che sto imparando. Utilizza le frecce per spostarti e clicca di nuovo se vuoi chiudere.</p>
            <div className="cv_theater theater_lang" >
                <TheaterLang  langs={ LANG_SLIDER} />
            </div>

            {/* <p> {SKILLZ[0].title}</p> Single item from DATA - SKILLZ*/}

            {SKILLZ.map(({ title, content}, index) => (
          <div
            className="PPF" //Past (soft skills ), Present (programming skills), Future (mission)-> Conoscenze passate (), presenti e future 
                key={index}
            >
                <CoolTitle
                    title={title}
                    colorClass="blue_5"
                />
                <div >
                    <p className="PPFcontent">{content}</p>
                </div>
            </div>
            ))}


        </div>
    )
}