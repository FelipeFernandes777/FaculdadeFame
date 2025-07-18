import {ReactNode} from "react";

export function BannerFloatText({children, className = ""}: { children: ReactNode, className?: string }) {
    return (
        <span className={`text-white font-medium tracking-normal leading-1.5 ${className}`}>{children}</span>
    )
}