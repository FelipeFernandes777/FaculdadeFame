import {BannerImageContainer} from "@/components/banner/banner_image/banner_image_container";
import Image from "next/image";
import {BannerFloat} from "@/components/banner/banner_image/banner_float";

export function BannerImage() {
    return (
        <BannerImageContainer>
            <Image alt={"Imagem de alguns estudantes indo para escola"} src="/banner/students.jpg" fill className="object-cover" />
            <BannerFloat />
        </BannerImageContainer>
    )
}