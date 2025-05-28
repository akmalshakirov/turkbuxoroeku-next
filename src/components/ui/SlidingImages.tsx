import Image from "next/image";
import { useEffect, useState } from "react";
import FirstImg from "../../images/home-page-1.jpg";
import SecondImg from "../../images/home-page-2.jpg";
import Button from "./Button";

const ImageSlider = () => {
    const imageGroups = [
        [FirstImg, FirstImg],
        [SecondImg, SecondImg],
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => {
                setCurrentImageIndex(
                    (prevIndex) => (prevIndex + 1) % imageGroups.length
                );
                setIsVisible(true);
            }, 222);
        }, 9999);

        return () => clearInterval(interval);
    }, [imageGroups.length]);

    return (
        <div className='relative top-0 -left-[50px] flex justify-between'>
            <div
                className='w-[50vw] h-screen overflow-hidden'
                style={{
                    transition: "opacity 0.5s ease-in-out",
                    opacity: isVisible ? 1 : 0,
                }}>
                <Image
                    src={imageGroups[currentImageIndex][0]}
                    alt='Main image'
                    layout='fill'
                    objectFit='cover'
                    priority
                />

                <div className='absolute inset-0 flex flex-col justify-center p-10 bg-gradient-to-r from-purple-900/70 to-transparent text-white'>
                    <h1 className='text-4xl font-bold mb-4'>
                        Дом планирования семьи
                    </h1>
                    <p className='text-xl max-w-md'>
                        Преодоление бесплодия – ключевое направление
                        медицинского центра в Ташкенте. Современные
                        репродуктивные технологии, передовое оснащение и
                        отличные специалисты
                    </p>
                    <Button
                        aria-label='Записаться на прием'
                        name='button'
                        className='mt-6 bg-white text-purple-800 px-6 py-2 rounded-md w-fit hover:bg-purple-100 transition-colors'>
                        Записаться
                    </Button>
                </div>
            </div>

            <div className='absolute left-full top-[55%] transform -translate-x-1/2 -translate-y-1/2 z-10'>
                <div
                    className='relative w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-lg'
                    style={{
                        transition: "opacity 0.5s ease-in-out",
                        opacity: isVisible ? 1 : 0,
                    }}>
                    <Image
                        src={imageGroups[currentImageIndex][1]}
                        alt='Circle image'
                        layout='fill'
                        objectFit='cover'
                    />
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;
