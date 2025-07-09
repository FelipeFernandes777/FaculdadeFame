import Image from "next/image";

export function FooterInfoImage() {
    return (
        <div className="relative w-6/12 h-7/12 rounded-3xl overflow-hidden">
            <Image
                src="/header_logo.png"
                alt="Logo da faculdade"
                priority
                fill
                className="object-cover"
            />
        </div>
    )
}