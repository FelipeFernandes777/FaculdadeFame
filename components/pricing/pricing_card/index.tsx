"use client";

import { useState } from "react";

export interface PricingCardProps {
    courses: number;
    price: string;
    installment: string;
    isPopular?: boolean;
}

export function PricingCard({ courses, price, installment, isPopular = false }: PricingCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`relative transition-all duration-500 ease-out transform ${
                isHovered ? "scale-105" : "scale-100"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Popular Badge */}
            {isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                        Mais Popular
                    </div>
                </div>
            )}

            {/* Card Body */}
            <div
                className={`p-6 md:p-7 rounded-2xl transition-all duration-500 h-full ${
                    isPopular
                        ? "bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-2xl border-0"
                        : "bg-white border-2 border-gray-200 text-gray-900 shadow-md hover:shadow-xl hover:border-emerald-300"
                }`}
            >
                {/* Title */}
                <div className="mb-6">
                    <div className={`text-sm font-semibold transition-all ${
                        isPopular ? "text-emerald-100" : "text-gray-500"
                    }`}>
                        PACOTE
                    </div>
                    <div className={`text-2xl md:text-3xl font-bold mt-1 ${
                        isPopular ? "text-white" : "text-gray-800"
                    }`}>
                        {courses} {courses === 1 ? "Curso" : "Cursos"}
                    </div>
                </div>

                {/* Separator */}
                <div className={`h-px my-6 ${isPopular ? "bg-white/30" : "bg-gray-200"}`}></div>

                {/* Installment Price */}
                <div className="mb-5">
                    <div className={`text-xs font-bold tracking-widest transition-all mb-2 ${
                        isPopular ? "text-emerald-100" : "text-gray-500"
                    }`}>
                        VALOR PARCELADO
                    </div>
                    <div className={`text-3xl md:text-4xl font-bold transition-all ${
                        isPopular ? "text-white" : "text-emerald-600"
                    }`}>
                        {installment}
                    </div>
                </div>

                {/* Total Price */}
                <div className={`text-xs transition-all ${
                    isPopular ? "text-emerald-100" : "text-gray-500"
                }`}>
                    Total: <span className={`font-bold ${
                        isPopular ? "text-white" : "text-gray-700"
                    }`}>{price}</span>
                </div>
            </div>
        </div>
    );
}
