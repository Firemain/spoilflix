import Link from "next/link";

export default function NavLink({ href, title }) {
    return (
        <Link href={href} className="block font-semibold py-2 pl-3 pr-4 text-[#f2e9e4] sm:text-xl rounde md:p-0 hover:text-white ">{title}</Link>
    )
}