import Image from "next/image"
import CustomizedSwitches from "./modes"

export default function Header() {
    return (
        <div className="header header-HP">
            <div className="languages">
                <Image
                    src="/media/header/flags/flag-italy.avif"
                    alt="Italian flag icon"
                    width={46}
                    height={46}
                />
                <Image
                    src="/media/header/flags/flag-germany.avif"
                    alt="German flag icon"
                    width={46}
                    height={46}
                />
                <Image
                    src="/media/header/flags/flag-united-kingdom.avif"
                    alt="UK flag icon"
                    width={46}
                    height={46}
                />
                <Image
                    src="/media/header/flags/flag-france.avif"
                    alt="France flag icon"
                    width={46}
                    height={46}
                />
            </div>
            <div className="logo">
                <Image
                    src="/media/LOGO.avif"
                    width={350}
                    height={120}
                    alt="CAERULEUM logo"
                />
            </div>
            <div className="modes">
                <CustomizedSwitches />
            </div>
        </div>
    )
}