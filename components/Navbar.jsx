import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="stayput">
            <Link href='#home'>
                <a>Home</a>
            </Link>
            <Link href='#about'>
                <a>About me</a>
            </Link>
            <Link href='#skillz'>
                <a>Skills</a>
            </Link>
            <Link href='#projects'>
                <a>Projects</a>
            </Link>
            <Link href='#contact'>
                <a>Contact</a>
            </Link>


        </nav>
    )
}