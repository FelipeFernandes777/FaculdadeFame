import {HeaderLogoContainer} from "@/components/header/header_logo/header_logo_container";
import {HeaderLogoBox} from "@/components/header/header_logo/header_logo_box";
import {HeaderLogoImage} from "@/components/header/header_logo/header_logo_image";

export function HeaderLogo() {
    return (
        <HeaderLogoContainer>
            <HeaderLogoBox>
                <HeaderLogoImage />
            </HeaderLogoBox>
        </HeaderLogoContainer>
    )
}