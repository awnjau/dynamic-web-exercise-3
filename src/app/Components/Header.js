import Link from "next/link";
const Header = () => (
    <header>
        <nav>
            <Link href="/Tokyo">Tokyo</Link>
            <Link href="/Mexico City">Mexico City</Link>
            <Link href="/Nairobi">Nairobi</Link>
            <Link href="/Fairbanks">Fairbanks</Link>
        </nav>
    </header>
);

export default Header;