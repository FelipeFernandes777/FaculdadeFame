import {ReactNode} from "react";

export function FooterInfoContainer( { children }: { children: ReactNode }) {
    return (
        <div className="h-56 w-4/12">
            {children}
        </div>
    )
}