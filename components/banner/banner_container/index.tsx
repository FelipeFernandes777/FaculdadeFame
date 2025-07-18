import {ReactNode} from "react";

export function BannerContainer ({ children } : { children : ReactNode}) {
    return (
        <div className="w-screen min-h-[550px] max-h-[700px] relative">
            {children}
        </div>
    )
}