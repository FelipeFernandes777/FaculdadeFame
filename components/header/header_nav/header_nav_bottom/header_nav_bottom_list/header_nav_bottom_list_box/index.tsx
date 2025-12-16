import { ReactNode } from "react";

export function HeaderNavBottomListBox({
    children,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <div className="w-full md:w-6/12 flex gap-4 md:gap-10 items-center justify-center md:justify-end px-2">
            {children}
        </div>
    );
}