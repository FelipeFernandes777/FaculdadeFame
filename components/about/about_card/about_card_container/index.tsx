import {ReactNode} from "react";

export function AboutInfoContainer({children}: {children: ReactNode}) {
    return (
        <div className="relative w-full md:w-10/12 max-w-5xl overflow-visible">{children}</div>
    )
}