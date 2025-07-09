import {FooterContainer} from "@/components/footer/footer_container";
import {FooterInfo} from "@/components/footer/footer_info";


export function Footer(){
    return (
        <FooterContainer>
            <FooterInfo />

            <div className="w-full h-auto flex items-center justify-center">
                <span className="text-sm text-white font-bold">
                    RJ DIGITAL © Todos os direitos reservados
                </span>
            </div>
        </FooterContainer>
    )
}