"use client";

import { Icons } from "@/icons";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

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

const ServicesSection = () => {
    return (
        <div className='mt-20 mb-5'>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl mb-5 font-bold'>Услуги</h1>
                <Link href='/services' className='group flex items-center'>
                    Все услуги
                    <ArrowRight
                        className='transition-transform duration-100 ease-in-out inline group-hover:translate-x-1 ml-1'
                        size={18}
                    />
                </Link>
            </div>

            <div className='grid grid-cols-4 gap-[1.464vw]'>
                {ServiceCardArr.map((card) => (
                    <Link
                        key={card.id}
                        href='/services'
                        className='flex flex-col justify-between gap-[40px] p-[16px] hover:bg-[#be0058] hover:text-white rounded-[24px] bg-[#fdf6f0] transition-colors no-underline'>
                        <span className='max-w-max p-1'>{card.icon}</span>
                        <p>{card.title}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ServicesSection;
