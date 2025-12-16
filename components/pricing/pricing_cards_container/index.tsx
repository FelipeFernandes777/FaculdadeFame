import { ReactNode, Children } from "react";

interface PricingCardsContainerProps {
    children: ReactNode;
}

export function PricingCardsContainer({ children }: PricingCardsContainerProps) {
    const childrenArray = Children.toArray(children);
    const topCards = childrenArray.slice(0, 3);
    const bottomCards = childrenArray.slice(3, 5);

    return (
        <div className="w-full max-w-6xl mx-auto px-2 md:px-4">
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-6">
                {topCards}
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 md:mx-auto md:max-w-2xl">
                {bottomCards}
            </div>
        </div>
    );
}
