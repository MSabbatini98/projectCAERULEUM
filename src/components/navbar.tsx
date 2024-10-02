'use client';
import { Button } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

import "./styles/navbar.scss"

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <section className={`${toggleMenu ? "main_nav main_nav_open" : "main_nav main_nav_close"} ` }> 
            <nav className={`${toggleMenu ? "nav_open" : "nav_close"} ` }>
                <ul>
                    <li  id='curriculum'>
                        <Link href="/curriculum">
                            <Button>
                                <span>Curriculum</span> 
                            </Button>
                        </Link>
                    </li>

                    <li id='projects'>
                        <Link href="/projects">  
                            <Button>
                                <span>Progetti</span> 
                            </Button>
                        </Link>
                    </li>

                    <li id='about'>
                        <Link href="/about">  
                            <Button>
                                <span>Su di me</span> 
                            </Button>
                        </Link>
                    </li>

                    <li id='contacts'>
                        <Link href="/contacts">
                            <Button>
                                <span>Contatti</span> 
                            </Button>
                        </Link>
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
