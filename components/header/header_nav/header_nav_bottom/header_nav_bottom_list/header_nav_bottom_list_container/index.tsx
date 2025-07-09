import {ReactNode} from "react";

export function HeaderNavBottomListContainer({children} : {children: ReactNode}){
    return (
        <div className="h-full w-full flex justify-center items-center">
            {children}
        </div>
    )
}