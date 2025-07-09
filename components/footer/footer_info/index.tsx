import {FooterInfoContainer} from "@/components/footer/footer_info/footer_info_container";
import {FooterInfoImage} from "@/components/footer/footer_info/footer_info_image";


export function FooterInfo() {
    return (
        <FooterInfoContainer>
            <FooterInfoImage />
            <div className="w-7/12 flex flex-col gap-1 items-start justify-center">
            <h1 className="text-sm font-bold w-10/12 text-white">
                FAME - Faculdade Mineira de Educação EAD
            </h1>
            <span className="text-sm tracking-tight w-10/12 text-white font-medium">
                Transformando vidas por meio da educação a distância. Aqui, você aprende no seu ritmo, com qualidade e o apoio que precisa para conquistar seus sonhos.
            </span>
            </div>
        </FooterInfoContainer>
    )
}