import { BannerFloatContainer } from "@/components/banner/banner_image/banner_float/banner_float_container";
import { BannerFloatText } from "@/components/banner/banner_image/banner_float/banner_float_text";
import { BannerFloatButton } from "@/components/banner/banner_image/banner_float/banner_float_button";

export function BannerFloat() {
  return (
    <BannerFloatContainer>
      <div className="flex flex-col items-center md:items-start gap-6 md:gap-8 px-6 sm:px-8 md:px-12 lg:px-20 py-12 md:py-20 text-white rounded-2xl">

        <BannerFloatText className="text-3xl sm:text-4xl md:text-5xl font-bold text-center md:text-left leading-tight">
          Faculdade Mineira de Educação EAD
        </BannerFloatText>

        <div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12">
          <BannerFloatText className="text-base sm:text-lg md:text-xl leading-relaxed text-center md:text-left">
            Faculdade Mineira de Educação EAD é uma instituição comprometida com o futuro profissional dos brasileiros,
            oferecendo cursos de pós-graduação 100% a distância, com qualidade, flexibilidade e valores acessíveis.
            Atuamos com foco em transformar vidas por meio da educação continuada, aliando excelência acadêmica a um
            modelo de ensino moderno e adaptado à sua rotina.
          </BannerFloatText>
        </div>

        <div className="mt-6 md:mt-8 flex justify-center md:justify-start">
          <BannerFloatButton />
        </div>
      </div>
    </BannerFloatContainer>
  );
}
