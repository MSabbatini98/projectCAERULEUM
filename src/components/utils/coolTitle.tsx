import "../styles/card.scss"

type titleProps = {
    title:string;
    color:string;
}

export default function CoolTitle({title, color} : titleProps) {
    console.log(color)
    return (
        <div className="cool_title">
            <h3 className={color}><span >{title}</span></h3>
        </div>
    )
}
