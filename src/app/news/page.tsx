"use client";
import { ArrowRight, CalendarDays, Eye, Search } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import NewsKlinika from "../../images/news-klinika.jpg";
import NewsLeksiya from "../../images/news-leksiya.jpg";
import styles from "./NewsSection.module.css";
import Button from "@/components/ui/Button";

interface INewsProps {
    id: number;
    title: string;
    date: string;
    views: number;
    description: string;
    image: StaticImageData;
    link: string;
}

const newsData: INewsProps[] = [
    {
        id: 1,
        title: "«Сегодня утром». Клиника репродуктивной медицины",
        date: "02.07.2024",
        views: 116,
        description:
            "12 февраля - День репродуктивного здоровья. Делимся с вами сюжетом о диагностике и лечении бесплодия…",
        image: NewsKlinika,
        link: "/news",
    },
    {
        id: 2,
        title: "Лекция",
        date: "02.07.2024",
        views: 120,
        description:
            "25 сентября на площадке состоялась лекция «Мужские биологические часы. Необструктивная азооспермия –…",
        image: NewsLeksiya,
        link: "/news",
    },
];

const NewsPage = () => {
    useEffect(() => {
        document.title = "Новости - Турк Бухара Эку Центр";
    }, []);
    return (
        <div className='container mx-auto mt-5'>
            <div>
                <div className='flex items-center gap-2 text-gray-500 mb-4'>
                    <Link href='/'>Главная страница</Link>
                    <span>/</span>
                    <p>Новости</p>
                </div>
            </div>
            <div>
                <div className={styles.newsSection}>
                    <div className='mb-5 flex items-center gap-5'>
                        <div className='relative w-[70%]'>
                            <Search className='absolute top-1/2 left-1 -translate-y-1/2 text-pink-400' />
                            <input
                                type='search'
                                placeholder='Search...'
                                className='border border-gray-400 p-2 rounded-xl pl-8 outline-none w-full bg-[#fdf6f0]'
                            />
                        </div>
                        <div className='relative'>
                            <CalendarDays className='absolute top-1/2 left-3 -translate-y-1/2 text-pink-400' />
                            <input
                                type='date'
                                placeholder='Выберите дату'
                                className='border border-gray-400 p-2 pl-8 mx-1.5 rounded-xl outline-none w-full'
                            />
                        </div>
                        <Button className='text-white px-10!'>Поиск</Button>
                    </div>
                    <div className={styles.header}>
                        <h2 className='text-3xl font-bold'>Новости</h2>
                    </div>

                    <div className={styles.newsGrid}>
                        {newsData.map((news) => (
                            <Link
                                href={news.link}
                                key={news.id}
                                className={`${styles.newsCard}`}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={news.image}
                                        alt={news.title}
                                        width={300}
                                        height={200}
                                        className={styles.image}
                                    />
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.meta}>
                                        <span className={styles.date}>
                                            <CalendarDays
                                                className='inline'
                                                size={20}
                                            />
                                            {news.date}
                                        </span>
                                        <span className={styles.views}>
                                            <Eye className='inline' size={20} />
                                            {news.views}
                                        </span>
                                    </div>
                                    <h3 className={styles.title}>
                                        {news.title}
                                    </h3>
                                    <p className={styles.description}>
                                        {news.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsPage;
