import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="stay-put">
            <Link href='#home' >
                <a>Home</a>
            </Link>
            {/* <Link href='#tech'>
                <a>Tech</a>
            </Link> */}
            {/* <Link href='#skillz'>
                <a>Skills</a>
            </Link> */}
            <Link href='#projects'>
                <a>Engineering Projects</a>
            </Link>
            <Link href='#contact'>
                <a>Contact</a>
            </Link>
            <Link href='/gallery'>
                <a target="_blank" rel="noopener noreferrer">Artwork</a>
            </Link>

        </nav>
    )
}