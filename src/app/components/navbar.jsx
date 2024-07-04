import Link from 'next/link'
export default function Navbar() {
    return (
        <nav>
            <h1>This is the beggining of the Header</h1>
            <Link href="/">Homepage</Link>
            <Link href="/curriculum">Curriculum</Link>
            <Link href="/curriculum/programming">Programming</Link>
        </nav>
    )
}
