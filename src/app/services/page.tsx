"use client";
import { Icons } from "@/icons";
import Link from "next/link";
import { useEffect } from "react";

interface IServiceCardProps {
    id: number;
    icon: React.ReactNode;
    title: string;
}

const ServiceCardArr: IServiceCardProps[] = [
    {
        id: 1,
        icon: <Icons.homeEkoIcon />,
        title: "Искусственное оплодотворение (ЭКО)",
    },
    {
        id: 2,
        icon: <Icons.homeIksiIcon />,
        title: "Интрацитоплазматическая инъекция сперматозоидов (ИКСИ)",
    },
    {
        id: 3,
        icon: <Icons.homeResultIcon />,
        title: "Консультации по репродукции и лечению бесплодия",
    },
    {
        id: 4,
        icon: <Icons.homePregnantIcon />,
        title: "Репродуктивная хирургия",
    },
    { id: 5, icon: <Icons.homeGenetikaIcon />, title: "Генетика" },
    { id: 6, icon: <Icons.homeKriokonIcon />, title: "Криоконсервация" },
    { id: 7, icon: <Icons.homeMolekulIcon />, title: "Стимуляция овуляции" },
    { id: 8, icon: <Icons.homeResult2 />, title: "Обследование" },
];

const ServicesPage = () => {
    useEffect(() => {
        document.title = "Услуги - Турк Бухара Эку Центр";
    }, []);
    return (
        <div className='container mx-auto mt-5 mb-10'>
            <div className='flex items-center gap-2 text-gray-500 mb-4'>
                <Link href='/'>Главная страница</Link>
                <span>/</span>
                <p>Услуги</p>
            </div>
            <div>
                <div className='mt-5 mb-5'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-3xl mb-5 font-bold'>Услуги</h1>
                    </div>

                    <div className='grid grid-cols-4 gap-[1.464vw]'>
                        {ServiceCardArr.map((card) => (
                            <Link
                                aria-label='/about'
                                key={card.id}
                                href='/services'
                                className='flex flex-col justify-between gap-[40px] p-[16px] hover:bg-[#be0058] hover:text-white rounded-[24px] bg-[#fdf6f0] no-underline! transition-colors duration-300 ease-in-out'>
                                <span className='max-w-max p-1'>
                                    {card.icon}
                                </span>
                                <p>{card.title}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
