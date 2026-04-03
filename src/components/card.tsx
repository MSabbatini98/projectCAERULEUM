import { ReactNode } from "react";
import Image from 'next/image'
import "./styles/card.scss"
import "./styles/cooltitle.scss"
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

// Skill to image mapping. Skill icons in public/media/skills/
const SKILL_IMAGES: Record<string, string> = {
    'HTML': '/media/skills/HTML.png',
    'CSS': '/media/skills/CSS.png',
    'JS': '/media/skills/JS.png',
    'Python': '/media/skills/PHYTON.png',
    'PHP': '/media/skills/PHP.png',
    'SQL': '/media/skills/SQL.png',
    'PostgreSQL': '/media/skills/POSTGRES.png',
    'REACT': '/media/skills/REACT.png',
    'Sass': '/media/skills/SASS.png',
    'TypeScript': '/media/skills/TYPESCRIPT.png',
    // 'Java': '/media/skills/java.svg',
    // 'Node.js': '/media/skills/nodejs.svg',
    // 'MongoDB': '/media/skills/mongodb.svg',
    // 'Git': '/media/skills/git.svg',
    // 'Docker': '/media/skills/docker.svg',
    // 'AWS': '/media/skills/aws.svg',
    // 'Azure': '/media/skills/azure.svg',
    // 'GCP': '/media/skills/gcp.svg',
    // 'Kubernetes': '/media/skills/kubernetes.svg',
    // 'GraphQL': '/media/skills/graphql.svg',
    // 'Django': '/media/skills/django.svg',
    // 'Flask': '/media/skills/flask.svg',
    // 'Spring': '/media/skills/spring.svg',
    // 'Laravel': '/media/skills/laravel.svg',
    // 'Symfony': '/media/skills/symfony.svg',
    // 'Vue.js': '/media/skills/vuejs.svg',
    // 'Angular': '/media/skills/angular.svg',
};

export function Card({children, href, hrefCTA, projectLongDescription, projectMainImage, isProjectProgramming, projectSkills, projectLinkCTA} : CardProps) {

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
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                    </div>
                </div>
                {isProjectProgramming && projectSkills && projectSkills.length > 0 && (
                    <div className="card_skills">
                        {projectSkills.slice(0, 4).map((skill, index) => (
                            <Image
                                key={`${skill}-${index}`}
                                className="active"
                                src={SKILL_IMAGES[skill] || BROKEN_IMAGE}
                                alt={`${skill} icon`}
                                width={50}
                                height={50}
                            />
                        ))}
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
