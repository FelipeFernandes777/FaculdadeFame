import {ReactNode} from "react";

export interface HeaderNavBottomListItemProps {
    title: string,
    img: ReactNode
}

export function HeaderNavBottomListItem({img, title}: HeaderNavBottomListItemProps) {
    return (
        // text-(var(--black-green))
        <span className="font-medium  text-white cursor-pointer hover:text-white/90  flex gap-2 justify-center">
            {img}
            {title}
        </span>
    )
}