'use client';
import { useState } from 'react'
import { Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { TransitionLink } from "./utils/TransitionLink";

import CoolTitle from './utils/coolTitle';
import "./styles/navbar.scss"

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <section className={`${toggleMenu ? "main_nav main_nav_open" : "main_nav main_nav_close"} ` }> 
            <nav className={`${toggleMenu ? "nav_open" : "nav_close"} ` }>
                <ul>
                    <li className={`${toggleMenu ? "nav_open" : "nav_closed"} ` }  id='curriculum'>
                        <TransitionLink href="/curriculum">
                            <Button>
                                <span>Curriculum</span> 
                            </Button>
                           <h3 className={"title"}>Curriculum</h3>
                        </TransitionLink>

                    </li>

                    <li className={`${toggleMenu ? "nav_open" : "nav_closed"} ` }  id='projects'>
                        <TransitionLink href="/projects">  
                            <Button>
                                <span>Progetti</span> 
                            </Button>
                            <h3 className={"title"}>Progetti</h3>
                        </TransitionLink>
                    </li>

                    <li className={`${toggleMenu ? "nav_open" : "nav_closed"} ` } id='about'>
                        <TransitionLink href="/about">  
                            <Button>
                                <span>Su di me</span> 
                            </Button>
                            <h3 className={"title"}>Su di me</h3>
                        </TransitionLink>
                    </li>

                    <li className={`${toggleMenu ? "nav_open" : "nav_closed"} ` } id='contacts'>
                        <TransitionLink href="/contacts">
                            <Button>
                                <span>Contatti</span> 
                            </Button>
                            <h3 className={"title"}>Contatti</h3>
                        </TransitionLink>
                    </li>
                </ul>
                <div className="arrow">
                    <Button
                    onClick={()=> setToggleMenu(!toggleMenu)}
                    >
                        <Image
                            src="/media/arrow-right.avif"
                            width={70}
                            height={70}
                            alt="arrow icon to open side navigation"
                        />
                    </Button>
                </div>
            </nav>  
        </section>
    )
}
