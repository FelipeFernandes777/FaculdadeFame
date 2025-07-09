import {ReactNode} from "react";

export function HeaderNavBottomListBox({children}: {children: ReactNode}) {
    return (
        <div className="w-6/12 h-full flex gap-10 items-center justify-end">
            {children}
        </div>
    )
}