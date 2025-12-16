import { ReactNode } from "react";

export function HeaderNavBottomListContainer({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="w-full flex items-center justify-center overflow-x-auto md:overflow-visible no-scrollbar">
            {children}
        </div>
    );
}