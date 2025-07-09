import {ReactNode} from "react";

export interface HeaderNavBottomListItemProps {
    title: string,
    img: ReactNode
}

export function HeaderNavBottomListItem({img, title}: HeaderNavBottomListItemProps) {
    return (
        <span className="font-medium cursor-pointer hover:text-blue-900 text-(var(--black-green)) flex gap-2 justify-center">
            {img}
            {title}
        </span>
    )
}