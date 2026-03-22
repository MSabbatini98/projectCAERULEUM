import { ReactNode } from "react";
import Image from 'next/image'
import "./styles/card.scss"
import { Button } from '@mui/material'
import CoolTitle from './utils/coolTitle'
import Link from 'next/link'


type CardProps = {
        children: ReactNode;
        href: string;
        hrefTitle: string;
        projectLongDescription: string;
    }

export function Card({children, href, hrefTitle, projectLongDescription, ...props} : CardProps) {

    return (
        <div className="card-container">
            <div className="card">
                <div className="card_title">
                {children}
                </div>
                <div className="card_content">
                    <div className="card_text">
                        <p>{projectLongDescription}</p>
                        <Link href={href}>{hrefTitle}</Link>
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

export function CardHalf({children, href, hrefTitle, projectLongDescription, ...props} : CardProps) {

    return (
        <div className="card-half-container">
            <div className="card-half card">
                <div className="card_title">
                {children}
                </div>
                <div className="card_content">
                    <div className="card_text">
                        <p>{projectLongDescription}</p>
                        <Link href={href}>{hrefTitle}</Link>
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
