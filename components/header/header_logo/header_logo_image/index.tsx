import Image from "next/image";

export function HeaderLogoImage() {
    return (
        <div className="w-11/12 h-11/12 relative flex justify-center items-center">
            <Image
                src="/header_logo.png"
                alt="Logo da faculdade"
                className="object-cover"
                fill
                priority
            />
        </div>
    )
}