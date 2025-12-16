import { ReactNode } from "react";

export function HeaderNavTopContainer({ children }: { children: ReactNode }) {
    return (
        <div className="ml-auto w-full md:w-8/12 h-12 md:h-14 bg-[var(--light-green)] md:rounded-bl-4xl rounded-none flex items-center justify-between md:justify-end pr-4 md:pr-6 gap-2 md:gap-4">
            {children}
        </div>
    );
}