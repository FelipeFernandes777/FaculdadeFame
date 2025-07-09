import {ReactNode} from "react";

export function FooterContainer({children}: {children: ReactNode}){
    return (
        <footer className="w-full h-auto min-h-60 bg-[var(--light-green)] p-3">
            {children}
        </footer>
    )
}