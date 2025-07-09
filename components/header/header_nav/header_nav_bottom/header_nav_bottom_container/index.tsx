import {ReactNode} from "react";

export function HeaderNavBottomContainer({children} : {children: ReactNode}){
    return (
        <div className="bg-transparent w-full h-8/12 flex">
            { children }
        </div>
    )
}