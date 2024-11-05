import Image from "next/image"
import Facebook from "../../../public/media/social/facebook.png"
import Linkedin from "../../../public/media/social/LINKEDIN-icon.avif"
import Onlyfans from "../../../public/media/social/ONLYFANS-icon.avif"
import Github from "../../../public/media/social/GITHUB-icon.avif"
import Gmail from "../../../public/media/social/GMAIL-icon.avif"
import Instagram from "../../../public/media/social/IG-icon.avif"
import Treedom from "../../../public/media/social/TREEDOM-icon.svg"
import Duolingo from "../../../public/media/social/DUOLINGO-icon.svg"
import Telegram from "../../../public/media/social/TELEGRAM-icon.avif"



import "../styles/contacts.scss"
import "../styles/about.scss"
import CoolTitle from "@/components/utils/coolTitle"
import Card from "@/components/card"
import ContactCard from "@/components/contactCard"

const HORCONTACTS = [
    { 
        imageUrl: Gmail, 
        imageAlt: "Gmail", 
        url: "mailto:matteosabbatini@gmail.com",
        text: "matteosabbatini23\n(@gmail.com)"
    },
    { 
        imageUrl: Linkedin, 
        imageAlt: "Linkedin", 
        url: "https://www.linkedin.com/in/23matteosabbatini/",
        text: "@23matteosabbatini"
    },
    { 
        imageUrl: Github, 
        imageAlt: "Github", 
        url: "https://github.com/MSabbatini98",
        text: "@MSabbatini98"
    }
]
const VERCONTACTS = [
    { 
        imageUrl: Treedom, 
        imageAlt: "Treedom", 
        url: "https://www.treedom.net/it/forest/twentytrees-forest",
        text: "Twenty Trees Forest"
    },
    { 
        imageUrl: Facebook, 
        imageAlt: "Facebook", 
        url: "https://www.google.it",
        text: "Davvero Facebook ?"
    },
// TODO CTA per gioco segreto per scoprire telegram
    { 
        imageUrl: Instagram, 
        imageAlt: "Instagram", 
        url: "string",
        text: "E' complicato con Instagram.."
    },
    { 
        imageUrl: Duolingo, 
        imageAlt: "Duolingo", 
        url: "https://www.duolingo.com/profile/Sebb23",
        text: "@Sebb23"
    },
// TODO CTA per gioco segreto per scoprire telegram
    { 
        imageUrl: Telegram, 
        imageAlt: "Telegram", 
        url: "https://www.google.com",
        text: "@BluedBlue"
    }
    /*
    { 
        imageUrl: Onlyfans, 
        imageAlt: "Onlyfans", 
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        text: " ... "
    }
    */
  ]

export default function Contacts() {
    return (
        <main className="main_content">
            <div className="contacts">
                <div className="contacts_hor">
                    <CoolTitle
                    title="Mettiti in contatto"
                    colorClass="blue_1"
                    />
                    <ContactCard cards= {HORCONTACTS}/>
                </div>
                <div className="contacts_ver">
                    <CoolTitle
                    title="Mettiti in contatto ancora meglio !!"
                    colorClass="blue_1"
                    />
                    <ContactCard cards= {VERCONTACTS}/>
                </div>
                <div className="contacts_map">
                    <CoolTitle 
                        title="Zona di interesse"
                        colorClass="blue_1"
                        />
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit quasi accusantium, ab quaerat provident ipsum itaque enim temporibus rerum quo fuga natus. Totam corrupti, iste nisi quia beatae repellendus voluptate.
                        </p>
                </div>
                <div className="newsletter ">
                <CoolTitle 
                    title="Zona di interesse"
                    colorClass="blue_3"
                    />    
                </div>
            </div>
        </main>
    )
}