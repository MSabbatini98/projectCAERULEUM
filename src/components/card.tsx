import { ReactNode } from "react";
import Image from 'next/image'
import "./styles/card.scss"
import { Button } from '@mui/material'
import CoolTitle from './utils/coolTitle'
import Link from 'next/link'

type CardProps = {
        children: ReactNode;
        href: string; //link alla pagina del progetto
        hrefCTA: string; //testo del link alla pagina del progetto
        projectLongDescription: string; //descrizione più lunga del progetto
        projectLinkCTA?: string; //testo del link per ulteriori informazioni (Es. Duolingo, GitHub, ecc. )
        projectDifficulty?: string; //Facile, Medio, Difficile, Folle
        projectSkills?: string[]; //es: CSS, HTML, JS...
        projectStatus?: string; //In corso, Completato, Sospeso
        projectDate?: string;  //data del progetto
        projectMainImage?: string; //immagine principale del progetto
        isProjectProgramming?: boolean; //indica se il progetto è di programmazione o meno
    }
const BROKEN_IMAGE = '/media/broken-img.png';

export function Card({children, href, hrefCTA, projectLongDescription, projectMainImage, isProjectProgramming, projectLinkCTA} : CardProps) {

    return (
        <div className="card-container">
            <div className="card">
                <div className="card_title">
                {children}
                </div>
                <div className="card_content">
                    <div className="card_text">
                        <p>{projectLongDescription}</p>
                        <Link href={href}>{hrefCTA}</Link>
                    </div>
                    <div className="card_image">
                        <Image
                                className="active"
                                src={projectMainImage || BROKEN_IMAGE}
                                alt="Italian flag icon"
                                width={100}
                                height={100}
                            />
                    </div>
                </div>
                {isProjectProgramming && (
                    <div className="card_skills">
                        <Image
                            className="active"
                            src={BROKEN_IMAGE}
                            alt="Italian flag icon"
                            width={30}
                            height={30}
                        />
                    <Image
                            className="active"
                                src={BROKEN_IMAGE}
                            alt="Italian flag icon"
                            width={30}
                            height={30}
                        />
                    <Image
                            className="active"
                            src={BROKEN_IMAGE}
                            alt="Italian flag icon"
                            width={30}
                            height={30}
                        />
                </div>
                )}
            </div>
        </div>
    )
}

export function CardHalf({children, href, hrefCTA, projectLongDescription, projectLinkCTA, ...props} : CardProps) {

    return (
        <div className="card-half-container">
            <div className="card-half card">
                <div className="card_title">
                {children}
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
                <div className="card_text">
                    <p>{projectLongDescription}</p>
                </div>
                <Link className="card_CTA" href={href}>{projectLinkCTA}</Link>
                </div>
            </div>
    )
}
