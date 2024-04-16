import Image from "next/image"
import Link from "next/link"

const Logo:React.FC = () => {
    return (
        <Link href={'/'} className="cursor-pointer mx-auto">
            <Image width={32} height={32} src="/assets/images/logo.png" alt="logo" />
        </Link>
    )
}

export default Logo