import Image from "next/image"

import "../styles/curriculum.scss"
import CoolTitle from "@/components/utils/coolTitle"



export default function Curriculum() {
    const PPF  = [
        { 
            title: "CONOSCENZE", 
            content: "Lorem impsum UNO dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", 
        },
        { 
            title: "COMPETENZE", 
            content: "Lorem ipsum DUE dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
        },
        { 
            title: "PASSIONI",
            content: "Lorem ipsum TRE dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
        }
      ];
    return (
       <div className="main_content curriculum">
            <div className="cv_upper">
                <div className="cv_txt">
                    <p className="intro">
                        Dall'esperienza accumulata nell'e-Commerce in Spotview alla passione innata per l'ambiente, scopri i più importanti passi che hanno contribuito a costruire una professionalità versatile e responsabile.<br/><br/>
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
            {PPF.map(({ title, content}, index) => (
          <div
            className="PPF_single" 
                key={index}
            >
                <CoolTitle
                    title={title}
                    colorClass="blue_5"
                />
                <div className="about_slider-content">
                    <p>{content}</p>
                </div>
            </div>
            ))}

            <div className="cv_theatre" style={{height:"2000px"}}>

            </div>

        </div>
    )
}