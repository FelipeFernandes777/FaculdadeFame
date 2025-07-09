import {ReactNode} from "react";

export function HeaderNavTopContainer({children} : {children: ReactNode}) {
    return (
        <div className="w-8/12 bg-[var(--black-green)] rounded-bl-4xl flex items-center justify-end px-5 gap-4 self-end">
            {children}
        </div>
    )
}