import {ReactNode} from "react";

export function HeaderContainer({children}: {children: ReactNode}) {
    return (
        <header className="w-full h-auto min-h-24 flex bg-[var(--light-green)]">
            {children}
        </header>
    )
}