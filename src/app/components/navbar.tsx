import Link from 'next/link'
export default function Navbar() {
    return (
        <nav>
            <h1>This is the beggining of the side navigation</h1>
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
                <Link href="/about_me">Su di me</Link>
                </li>
                <li><Link href="/contacts">Contatti</Link></li>
            </ul>
        </nav>
    )
}
