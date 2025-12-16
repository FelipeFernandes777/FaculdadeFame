import { ReactNode } from "react";

export function HeaderLogoBox({ children }: { children: ReactNode }) {
    return (
        <div className="h-full w-full flex items-center justify-start md:justify-center relative px-2">
            {children}
        </div>
    );
}