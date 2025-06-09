"use client";
import "./Modal.css";

import { ReactNode, useEffect, useRef, useState } from "react";

interface IModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: IModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // const handleEsc = (e: KeyboardEvent) => {
        //     if (e.key === "Escape") handleClose();
        // };

        if (isOpen) {
            setIsAnimating(true);
            setIsVisible(true);
            // document.addEventListener("keydown", handleEsc);
            document.body.style.overflow = "hidden";
        } else if (isVisible) {
            setIsAnimating(false);

            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 300);
            return () => clearTimeout(timer);
        }

        return () => {
            //     document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    // const handleClose = () => {
    //     setIsAnimating(false);

    //     setTimeout(() => {
    //         onClose();
    //     }, 300);
    // };

    if (!isVisible && !isOpen) return null;

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center overflow-auto p-10 bg-black/50 transition-opacity duration-300 ${
                isAnimating ? "bg-black/70" : "opacity-0"
            }`}
            onClick={onClose}>
            <div
                ref={modalRef}
                className={`bg-white rounded-lg w-full max-w-[600px] p-6 shadow-xl transform transition-all duration-300 text-black ${
                    isAnimating
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-10"
                }`}
                onClick={(e) => e.stopPropagation()}>
                <div className='flex justify-between items-center mb-4'>
                    <h3 className='text-xl font-semibold'>{title}</h3>
                    <button
                        name='close button'
                        onClick={onClose}
                        className='text-gray-500 rounded hover:bg-gray-300 transition-colors group'
                        aria-label='Zakrit'>
                        <svg
                            className='w-6 h-6 group-hover:rotate-90 ease-in-out transition-transform'
                            fill='currentColor'
                            viewBox='0 0 20 20'>
                            <path
                                fillRule='evenodd'
                                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                                clipRule='evenodd'
                            />
                        </svg>
                    </button>
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default Modal;
