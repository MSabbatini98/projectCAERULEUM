import Image from "next/image";
import "../styles/curriculum.scss"

export default function Curriculum() {
    return (
        <main>
            <h1> This is my pretty Curriculum</h1>
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
        </main>
    )
}