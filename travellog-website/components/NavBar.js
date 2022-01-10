import Link from 'next/link';
export default function NavBar() {
    return (
        <nav>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/explorer">
                <a>Explorer</a>
            </Link>
            <Link href="/chats">
                <a>Group Chats</a>
            </Link>
        </nav>
    )
}