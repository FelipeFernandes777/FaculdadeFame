import Image from "next/image";

export function HeaderLogoImage() {
    return (
        <Image
            src="/header_logo.png"
            alt="Logo"
            width={600}
            height={200}
            priority
            sizes="(max-width: 768px) 240px, (max-width: 1280px) 360px, 480px"
            className="h-16 w-auto md:h-24 lg:h-28 xl:h-32"
        />
    );
}