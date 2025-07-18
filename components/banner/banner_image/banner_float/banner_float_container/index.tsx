import {ReactNode} from "react";

export function BannerFloatContainer({ children }: { children: ReactNode }) {
    return (
        <div className="absolute inset-0 bg-black/65 px-10 flex flex-col items-start justify-center">{children}</div>
    )
}