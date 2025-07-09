import {ReactNode} from "react";

export interface HeaderNavTopListItemProps {
    title: string,
    img: ReactNode
}

export function HeaderNavTopListItem({img,title}: HeaderNavTopListItemProps){
    return (
        <li className="font-bold hover:text-black/60 hover:cursor-pointer  text-black flex items-center justify-center gap-2">
            {img}
            {title}
        </li>
    )
}