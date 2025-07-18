import {BannerFloatContainer} from "@/components/banner/banner_image/banner_float/banner_float_container";
import {BannerFloatText} from "@/components/banner/banner_image/banner_float/banner_float_text";
import {BannerFloatButton} from "@/components/banner/banner_image/banner_float/banner_float_button";

export function BannerFloat() {
    return (
        <BannerFloatContainer>
            <div className="flex flex-col gap-6">
                <BannerFloatText className="text-5xl"> Faculdade Mineira de Educação EAD</BannerFloatText>
                <div className="w-4/12">
                    <BannerFloatText>
                        Faculdade Mineira de Educação EAD é uma instituição comprometida com o futuro profissional dos brasileiros, oferecendo cursos de pós-graduação 100% a distância, com qualidade, flexibilidade e valores acessíveis. Atuamos com foco em transformar vidas por meio da educação continuada, aliando excelência acadêmica a um modelo de ensino moderno e adaptado à sua rotina.
                    </BannerFloatText>
                </div>
            </div>
            <BannerFloatButton />
        </BannerFloatContainer>
    )
}