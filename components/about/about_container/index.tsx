import {ReactNode} from "react";

export function AboutContainer({children}: {children: ReactNode}) {
    return (
        <div className="w-full flex flex-col items-center justify-center px-4 md:px-6 lg:px-8 py-10 md:py-12 bg-gray-50" id="sobre">
            {children}
        </div>
    )
}