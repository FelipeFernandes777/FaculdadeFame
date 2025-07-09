import {HeaderContainer} from "@/components/header/header_container";
import {HeaderLogo} from "@/components/header/header_logo";
import {HeaderNav} from "@/components/header/header_nav";

export function Header(){
    return (
        <HeaderContainer>
            <HeaderLogo />
            <HeaderNav />
        </HeaderContainer>
    )
}