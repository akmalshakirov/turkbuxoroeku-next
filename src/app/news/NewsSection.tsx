import Image from "next/image";
import Link from "next/link";
import styles from "./NewsSection.module.css";
import { ArrowRight } from "lucide-react";

const newsData = [
    {
        id: 1,
        title: "«Сегодня утром». Клиника репродуктивной медицины",
        date: "02.07.2024",
        views: 116,
        description:
            "12 февраля - День репродуктивного здоровья. Делимся с вами сюжетом о диагностике и лечении бесплодия…",
        image: "/images/news-1.jpg", // Rasm manzili
    },
    {
        id: 2,
        title: "Лекция",
        date: "02.07.2024",
        views: 120,
        description:
            "25 сентября на площадке состоялась лекция «Мужские биологические часы. Необструктивная азооспермия –…",
        image: "/images/news-2.jpg", // Rasm manzili
    },
    {
        id: 3,
        title: "«Сегодня утром». Клиника репродуктивной медицины",
        date: "02.07.2024",
        views: 116,
        description:
            "12 февраля - День репродуктивного здоровья. Делимся с вами сюжетом о диагностике и лечении бесплодия…",
        image: "/images/news-3.jpg", // Rasm manzili
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
                {newsData.map((news) => (
                    <div key={news.id} className={styles.newsCard}>
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
                                    📅 {news.date}
                                </span>
                                <span className={styles.views}>
                                    👁 {news.views}
                                </span>
                            </div>
                            <h3 className={styles.title}>{news.title}</h3>
                            <p className={styles.description}>
                                {news.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.navigation}>
                <button className={styles.navButton}>←</button>
                <button className={styles.navButton}>→</button>
            </div>
        </section>
    );
};

export default NewsSection;
