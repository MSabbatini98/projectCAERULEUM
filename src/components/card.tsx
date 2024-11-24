import { ReactNode } from "react";
import Image from 'next/image'
import "./styles/card.scss"
import { Button } from '@mui/material'
import CoolTitle from './utils/coolTitle'


type CardProps = {
    children: ReactNode;
    // Your other props here.
  }

export default function Card({children, ...props} : CardProps) {


    return (
        <div className="card-container">
            <div className="card">
                <div className="card_title">
                {children}
                </div>
                <div className="card_content">
                    <div className="card_text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione exercitationem nisi expedita numquam nam nesciunt pariatur quasi fuga quod veniam corrupti, laboriosam doloremque animi cum tempore ipsum. Voluptas, modi voluptate?</p>
                        <Button>CIAOOO</Button>
                    </div>
                    <div className="card_image">
                        <Image
                                className="active"
                                src="/media/header/flags/flag-italy.avif"
                                alt="Italian flag icon"
                                width={100}
                                height={100}
                            />
                    </div>
                </div>
                <div className="card_skills">
                    <Image
                            className="active"
                            src="/media/header/flags/flag-italy.avif"
                            alt="Italian flag icon"
                            width={30}
                            height={30}
                        />
                    <Image
                            className="active"
                            src="/media/header/flags/flag-italy.avif"
                            alt="Italian flag icon"
                            width={30}
                            height={30}
                        />
                    <Image
                            className="active"
                            src="/media/header/flags/flag-italy.avif"
                            alt="Italian flag icon"
                            width={30}
                            height={30}
                        />
                </div>
            </div>
        </div>
    )
}
