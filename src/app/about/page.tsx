"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import FirstImage from "../../images/home-page-2.jpg";
import { Icons } from "@/icons";

const AboutPage = () => {
    return (
        <div className='container mx-auto my-7'>
            {/* breadcrumbs ABOUT PAGE */}
            <div className='flex items-center gap-2 text-gray-500 mb-4'>
                <Link href='/'>Главная страница</Link>
                <span>/</span>
                <p>О нас</p>
            </div>
            <div className='flex items-center gap-25'>
                <div>
                    <h1>
                        «Turk Buxoro Eku Markazi» - центры репродукции в
                        Ташкент.
                    </h1>
                    <p className='max-w-[733px]'>
                        «Turk Buxoro Eku Markazi» — медицинские центры, в
                        которых женщинам и мужчинам помогают преодолеть
                        бесплодие и стать родителями. Для этого мы используем
                        ЭКО и другие доказавшие эффективность репродуктивные
                        методы (ВРТ). Лечение бесплодия проходит по стандартам,
                        выработанным ведущими международными организациями —
                        ESHRE, ASRM и др. <br /> <br /> В «Turk Buxoro Eku
                        Markazi» работает мощнейшая команда репродуктологов. У
                        каждого врача за плечами больше 1000 успешных программ
                        ЭКО. Что это значит? Тысячи счастливых родителей и
                        замечательных малышей, подрастающих в Ташкент, других
                        городах Узбекистан, за рубежом. И это только у одного
                        доктора!
                    </p>
                    <div className='flex items-center gap-4 mt-4'>
                        <span className='p-2 text-[#bf0059] font-bold bg-[#f9e7ef] rounded-lg'>
                            от 18 000 000 сум
                        </span>
                        <Button title='Оставить заявку' className='text-white'>
                            Оставить заявку
                        </Button>
                    </div>
                </div>

                <div className='relative'>
                    <Image
                        className='rounded-full'
                        src={FirstImage}
                        alt='Image'
                        width={400}
                        height={400}
                        draggable={false}
                    />
                    <Icons.siteIcon
                        className='absolute top-1/2 left-0 translate-y-1/2'
                        width={150}
                        height={150}
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
