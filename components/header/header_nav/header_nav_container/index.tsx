import { ReactNode } from "react";

export function HeaderNavContainer({ children }: { children: ReactNode }) {
    return <div className="flex flex-col w-full ">{children}</div>;
}