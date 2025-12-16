import {ReactNode} from "react";

export function AboutCardAbsoluteContainer({children}: { children: ReactNode }) {
    return (
        <div
            className="static md:absolute md:top-1/2 md:right-[-150px] md:transform md:-translate-y-1/2 md:translate-x-1/4 bg-green-50 p-6 md:p-10 rounded-lg shadow-lg w-full sm:w-[400px] max-w-full md:h-8/12 flex flex-col mt-4 md:mt-0">
            {children}
        </div>
    )
}