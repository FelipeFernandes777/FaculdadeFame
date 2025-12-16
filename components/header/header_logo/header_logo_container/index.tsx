import { ReactNode } from "react";

export function HeaderLogoContainer({ children }: { children: ReactNode }) {
    return (
        <div className="w-full md:w-2/12 flex items-center justify-start md:justify-center px-4 md:px-6">
            {children}
        </div>
    );
}