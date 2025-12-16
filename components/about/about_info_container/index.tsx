import {ReactNode} from "react";

export function AboutInfoContainer({children}: {children: ReactNode}) {
    return (
        <div className="w-full max-w-6xl h-auto md:h-[600px] flex rounded-2xl px-2 md:px-0">
            {children}
        </div>
    )
}