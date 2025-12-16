
export interface AboutCardAbsoluteTitleProps {
    title: string
}


export function AboutCardAbsoluteTitle({title}: AboutCardAbsoluteTitleProps) {
    return (
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{title}</h3>
    )
}