import { ReactNode } from "react";

export function HeaderNavBottomContainer({ children }: { children: ReactNode }) {
    return <div className="bg-transparent w-full flex items-center h-12 md:h-14 px-4 md:px-6">
        {children}
    </div>;
}