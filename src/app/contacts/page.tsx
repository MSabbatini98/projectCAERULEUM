import Image from "next/image"
import car4 from "../../../public/media/sliderImgs/car-4.jpg"

import "../styles/contacts.scss"
import "../styles/about.scss"
import CoolTitle from "@/components/utils/coolTitle"
import Card from "@/components/card"
import ContactCard from "@/components/contactCard"

const HORCONTACTS = [
    { 
        imageUrl: car4, 
        imageAlt: "string", 
        url: "string"
    },
    { 
        imageUrl: car4, 
        imageAlt: "string", 
        url: "string"
    },
    { 
        imageUrl: car4, 
        imageAlt: "string", 
        url: "string"
    }
]
const VERCONTACTS = [
    { 
        imageUrl: car4, 
        imageAlt: "string", 
        url: "string"
    },
    { 
        imageUrl: car4, 
        imageAlt: "string", 
        url: "string"
    },
    { 
        imageUrl: car4, 
        imageAlt: "string", 
        url: "string"
    }
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
            </div>
        </main>
    )
}