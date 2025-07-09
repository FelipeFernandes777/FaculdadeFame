import {ReactNode} from "react";

export interface HeaderNavTopListItemProps {
    title: string,
    img: ReactNode
}

export function HeaderNavTopListItem({img,title}: HeaderNavTopListItemProps){
    return (
        <li className="font-bold hover:text-blue-900 hover:cursor-pointer  text-white flex items-center justify-center gap-2">
            {img}
            {title}
        </li>
    )
}