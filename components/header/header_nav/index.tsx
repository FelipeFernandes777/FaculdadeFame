import { HeaderNavContainer } from "@/components/header/header_nav/header_nav_container";
import {HeaderNavBottom} from "@/components/header/header_nav/header_nav_bottom";
import {HeaderNavTop} from "@/components/header/header_nav/header_nav_top";

export function HeaderNav() {
    return (
        <HeaderNavContainer>
            <HeaderNavTop />
            <HeaderNavBottom />
        </HeaderNavContainer>
    )
}