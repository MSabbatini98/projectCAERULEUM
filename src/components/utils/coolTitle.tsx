import "../styles/card.scss"
import "../styles/cooltitle.scss"


type titleProps = {
    title:string;
    colorClass:string;
}

export default function CoolTitle({title, colorClass} : titleProps) {
    return (
        <div className="coolTitle">
            <h3 className={colorClass}><span >{title} </span></h3>
        </div>
    )
}
export function  SuperCoolTitle({title, colorClass} : titleProps) {
    return (
        <div className=" superCoolTitle">
            <h3 className={colorClass}><span className="left-sct" >{title}</span><span className="right-sct"></span></h3>
        </div>
    )
}