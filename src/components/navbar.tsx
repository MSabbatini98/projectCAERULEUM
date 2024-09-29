import { Button } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    return (
        <nav className='main_nav'>
            <div className="nav_open">
                <ul>
                    <li>
                        <Link href="/">Homepage</Link>
                    </li>

                    <li>
                        <Link href="/curriculum">Curriculum</Link>
                    </li>

                    <li>
                        <Link href="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link href="/about">Su di me</Link>
                    </li>
                    <li>
                        <Link href="/contacts">Contatti</Link>
                    </li>
                </ul>
            </div>  
            <div className="nav_close">
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
                    <Button>
                        <Image
                            src="/media/arrow-right.avif"
                            width={70}
                            height={70}
                            alt="arrow icon to open side navigation"
                        />
                    </Button>
                </div>
            </div>  
        </nav>
    )
}
