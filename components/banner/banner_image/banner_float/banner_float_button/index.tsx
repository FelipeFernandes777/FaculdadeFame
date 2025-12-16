import Link from "next/link"
export function BannerFloatButton() {
    return (
        <Link
            href="#contato"
            className="mt-12 bg-[var(--black-green)] p-4 w-72 h-16 text-2xl font-sans font-medium rounded-xl shadow-md shadow-[#2fddc0] text-white cursor-pointer
                hover:scale-105
                ">
            Matricule-se
        </Link>
    )
}