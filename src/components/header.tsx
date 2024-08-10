import Image from "next/image"

export default function Header() {
    return (
        <div className="header header-HP">
            <div className="languages">
                <Image
                    src="/media/header/flags/flag-italy.avif"
                    alt="Italian flag icon"
                    width={52}
                    height={52}
                />
                <Image
                    src="/media/header/flags/flag-germany.avif"
                    alt="German flag icon"
                    width={52}
                    height={52}
                />
                <Image
                    src="/media/header/flags/flag-united-kingdom.avif"
                    alt="UK flag icon"
                    width={52}
                    height={52}
                />
                <Image
                    src="/media/header/flags/flag-france.avif"
                    alt="France flag icon"
                    width={52}
                    height={52}
                />
            </div>
            <div className="logo">
                <Image
                    src="/media/LOGO.avif"
                    fill={true}
                    alt="CAERULEUM logo"
                />
            </div>
            <div className="modes">

            </div>
        </div>
    )
}
