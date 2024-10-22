import "../styles/card.scss"

type titleProps = {
    title:string;
    colorClass:string;
}

export default function CoolTitle({title, colorClass} : titleProps) {
    return (
        <div className="cool_title">
            <h3 className={colorClass}><span >{title}</span></h3>
        </div>
    )
}
