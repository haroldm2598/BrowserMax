import { navLinks } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
        <header className="flex h-14 items-center justify-between border-b border-zinc-300 px-4 text-sm text-zinc-500 sm:px-6">
            <Link href="/" className="flex items-center gap-3 font-semibold">
                <Image
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={89}
                    height={18}
                    priority
                />
            </Link>

            <nav className="flex items-center gap-4 text-sm font-medium">
                {navLinks.map(({ name, href }) => (
                    <Link
                        key={name}
                        href={href}
                        className="hover:text-zinc-950"
                    >
                        {name}
                    </Link>
                ))}
            </nav>
        </header>
    );
}

export default Header;
