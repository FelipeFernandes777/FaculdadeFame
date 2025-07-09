import {ReactNode} from "react";

export function HeaderLogoContainer({children}: {children: ReactNode}) {
    return (
        <div className="w-2/12 flex items-center justify-center">
            {children}
        </div>
    )
}