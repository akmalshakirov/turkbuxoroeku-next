import Link from "next/link";
import React, { useRef } from "react";

interface IAnimLinkProps {
    link: string;
    target?: string;
    rel?: string;
    title?: string;
    className?: string;
    onMouseMove?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    children?: React.ReactNode;
}

const AnimatedLink = ({
    link,
    target,
    title,
    rel,
    className,
    children,
}: IAnimLinkProps) => {
    const linkRef = useRef<HTMLAnchorElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!linkRef.current) return;
        const rect = linkRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        linkRef.current.style.setProperty("--tw-hover-origin", `${x}px ${y}px`);
    };

    return (
        <Link
            href={link}
            target={target}
            rel={rel}
            title={title}
            ref={linkRef}
            onMouseMove={handleMouseMove}
            className={`relative inline-block px-4 py-2 font-semibold text-white transition-all duration-500 rounded-lg group no-underline! ${className}`}>
            <span
                className='absolute inset-0 w-full h-full bg-gradient-to-r from-amber-600 via-orange-400/70 to-yellow-500/70 transform scale-y-0 scale-x-0 group-hover:scale-y-100 group-hover:scale-x-100 rounded-full transition-transform duration-300 group-hover:shadow-2xl shadow-yellow-200'
                style={{
                    transformOrigin: "var(--tw-hover-origin)",
                }}></span>

            <span className='relative transition-colors duration-300 text-[#fcf259] group-hover:text-white'>
                {children}
            </span>
        </Link>
    );
};

export default AnimatedLink;
