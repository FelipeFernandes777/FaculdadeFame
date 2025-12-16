
export interface AboutCardAbsoluteDescriptionProps {
    description: string
}

export function AboutCardAbsoluteDescription({description}: AboutCardAbsoluteDescriptionProps) {
    return (
        <p className="text-gray-600 mb-6 text-sm md:text-base">
            {description}
        </p>
    )
}