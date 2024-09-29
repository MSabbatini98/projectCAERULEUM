import Image from "next/image"
import ImageSlider from '../../components/iconSlider'

import "../styles/curriculum.scss"

export default function Curriculum() {
    return (
        <main className="main_content">
            <div className="cv_upper">
                <div className="cv_txt">
                    <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi ullam aliquam, quo sapiente quisquam tenetur ipsum vero ea placeat beatae blanditiis, eveniet vel consectetur. Corrupti blanditiis veritatis tenetur non quo.
                    </p>
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
                        width={400}
                        height={800}
                        alt="Author handing out his CV"
                    />                    
                </div>
            </div>
            <div className="cv_lower">
                <div className="cv_box">
                    <h3>Conoscenze</h3>
                    <div className="cv_box_txt">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error dolores repellat, assumenda nam ut eius accusamus magni quibusdam quos ad animi beatae enim nisi expedita optio est reprehenderit earum? Quia!
                    </div>
                </div>
                <div className="cv_box">
                    <h3>Comnpetenze</h3>
                    <div className="cv_box_txt">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error dolores repellat, assumenda nam ut eius accusamus magni quibusdam quos ad animi beatae enim nisi expedita optio est reprehenderit earum? Quia!
                    </div>
                </div>
                <div className="cv_box">
                    <h3>Passioni</h3>
                    <div className="cv_box_txt">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error dolores repellat, assumenda nam ut eius accusamus magni quibusdam quos ad animi beatae enim nisi expedita optio est reprehenderit earum? Quia!
                    </div>
                </div>
            </div>
            <div className="cv_theatre">
                {/* //Slider here */}

            </div>

        </main>
    )
}