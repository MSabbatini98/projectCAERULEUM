import Link from 'next/link'

import "./styles/footer.scss"


export default function Footer() {
    return (
        <div className="footer">
            <div className="footer_left">
                <p>Some content</p>
            </div>
            <div className="footer_center">
                <Link href="/docs/credits">Credits</Link>
            </div>
            <div className="footer_right">
                <Link href="/">Homepage</Link>
            </div>
        </div>
    )
}
