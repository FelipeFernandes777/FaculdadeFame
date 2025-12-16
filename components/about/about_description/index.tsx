
export function AboutDescription({ description }: { description: string }) {
    return (
        <p className="text-center text-gray-600 max-w-2xl mb-6 md:mb-10 text-sm md:text-base px-3 md:px-0">{description}</p>
    )
}