'use client'

import {CarrouselContainer} from "@/components/carousel/carousel_container";
import {CarrouselTitle} from "@/components/carousel/carousel_title";;
import {CarouselCardSectionContainer} from "@/components/carousel/carousel_card_section_container";
import {CarouselCard} from "@/components/carousel/carousel_card";
export function Carousel() {
    const slideImages = [
        {src: "/global2.png", alt: "Logo 1", title: "Global"},
        {src: "/Educavale.png", alt: "Logo 2", title: "EducaVale"},
        {src: "/EDUCAMINAS.png", alt: "Logo 3", title: "Educa Minas"},
        {src: "/minas+pos.png", alt: "Logo 4", title: "Minas + Pós"},
    ];

    return (
        <CarrouselContainer>
            <CarrouselTitle/>
            <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
                Nossos polos parceiros oferecem <b>qualidade</b>, <b>inovação</b> e <b>flexibilidade</b> no ensino,
                garantindo que você tenha acesso a uma educação de excelência onde estiver.
            </p>
            <CarouselCardSectionContainer>
                <div className="flex w-full items-center justify-center">
                    {slideImages.map((props, index) => (
                        <CarouselCard {...props} key={index}/>
                    ))}
                </div>
            </CarouselCardSectionContainer>
        </CarrouselContainer>
    );
}
