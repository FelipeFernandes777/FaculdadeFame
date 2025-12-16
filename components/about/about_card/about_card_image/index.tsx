import Image from "next/image";

export interface AboutCardImageProps {
    src: string;
    alt: string;
}

export function AboutCardImage({src, alt}: AboutCardImageProps) {
    return (
        <div className="relative w-full h-64 sm:h-80 md:h-[480px] lg:h-[600px] rounded-lg overflow-hidden">
            <Image alt={alt} src={src} className="rounded-lg object-cover" fill priority/>
        </div>
    )
}