import ScrollHorizontal from "@/components/ui/ScrollHorizontal";
import { ArrowRight, CalendarDays, Eye } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import NewsKlinika from "../../images/news-klinika.jpg";
import NewsLeksiya from "../../images/news-leksiya.jpg";
import styles from "./NewsSection.module.css";

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

const NewsSection = () => {
    return (
        <section className={styles.newsSection}>
            <div className={styles.header}>
                <h2 className='text-3xl font-bold'>Новости</h2>
                <Link
                    href='/news'
                    className='group flex items-center no-underline! hover:text-[var(--primary-color)]'
                    aria-label='Все новости'>
                    Все новости
                    <ArrowRight
                        className='transition-transform duration-100 ease-in-out inline group-hover:translate-x-1 ml-1'
                        size={18}
                    />
                </Link>
            </div>

            <div className={styles.newsGrid}>
                <ScrollHorizontal>
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
                                <h3 className={styles.title}>{news.title}</h3>
                                <p className={styles.description}>
                                    {news.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </ScrollHorizontal>
            </div>
        </section>
    );
};

export default NewsSection;
