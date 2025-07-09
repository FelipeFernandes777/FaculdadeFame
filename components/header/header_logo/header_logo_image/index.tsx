import Image from "next/image";

export function HeaderLogoImage() {
    return (
        <div className="w-11/12 h-11/12 relative flex justify-center items-center">
            <Image
                src="/fame1.png"
                alt="Logo da faculdade"
                className="object-center"
                fill
                priority
            />
        </div>
    )
}