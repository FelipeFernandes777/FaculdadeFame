import { ReactNode } from "react";

export type HeaderNavBottomListItemProps = {
    title: string;
    img: ReactNode;
    href: string;
};

export function HeaderNavBottomListItem({
    img,
    title,
    href,
}: HeaderNavBottomListItemProps) {
    return (
        <a
            className="text-white grid grid-cols-[20px_1fr] gap-2 items-center justify-center py-2"
            href={`#${href}`}
        >
            {img}
            {title}
        </a>
    );
}