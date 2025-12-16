import { ReactNode } from "react";

export function PricingContainer({ children }: { children: ReactNode }) {
    return (
        <div className="w-full flex flex-col items-center justify-center px-4 md:px-6 lg:px-8 py-16 md:py-20 bg-gradient-to-b from-white via-gray-50 to-white" id="precos">
            {children}
        </div>
    );
}
