import { ArrowRight, PlayIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ReviewsFirst from "../../images/reviews-rak.png";
import styles from "./ReviewsSection.module.css";

const reviews = [
    {
        id: 1,
        title: "Биопсия простаты с новокаиновой блокадой",
        description: "Биопсия простаты. Интервью с пациентом. Видео отзыв",
        thumbnail: ReviewsFirst,
    },
    {
        id: 2,
        title: "Рак простаты. Открытая простатэктомия",
        description:
            "Биопсия простаты. Интервью с пациентом через 7 дней. Видео отзыв",
        thumbnail: ReviewsFirst,
    },
    {
        id: 3,
        title: "Рак простаты. 4 года после операции",
        description:
            "Биопсия простаты. Интервью с пациентом через 7 дней. Видео отзыв",
        thumbnail: ReviewsFirst,
    },
    {
        id: 4,
        title: "Рак простаты. Лапароскопическое удаление",
        description: "Биопсия простаты. Интервью с пациентом. Видео отзыв",
        thumbnail: ReviewsFirst,
    },
];

const ReviewsSection = () => {
    const [activeTab, setActiveTab] = useState("video");
    const [animate, setAnimate] = useState(false);

    const handleTabChange = (tab: string) => {
        setAnimate(true);
        setTimeout(() => {
            setActiveTab(tab);
            setAnimate(false);
        }, 200);
    };

    return (
        <section className={styles.reviewsSection}>
            <div className={styles.header}>
                <h2 className='text-3xl font-bold'>Отзывы наших пациентов</h2>
                <Link
                    href='/reviews'
                    className='group flex items-center no-underline! hover:text-[var(--primary-color)]'
                    aria-label='Отзывы наших пациентов'>
                    Все отзывы
                    <ArrowRight
                        className='transition-transform duration-100 ease-in-out inline group-hover:translate-x-1 ml-1'
                        size={18}
                    />
                </Link>
            </div>

            <div className={styles.tabs}>
                <button
                    className={`${styles.tabButton} ${
                        activeTab === "video" ? styles.active : ""
                    }`}
                    onClick={() => handleTabChange("video")}>
                    Видео-интервью с пациентами
                </button>
                <button
                    className={`${styles.tabButton} ${
                        activeTab === "text" ? styles.active : ""
                    }`}
                    onClick={() => handleTabChange("text")}>
                    Отзывы пациентов
                </button>
            </div>

            <div
                className={`${styles.slider} ${
                    animate ? styles.animateOut : styles.animateIn
                }`}>
                {activeTab === "video" ? (
                    reviews.map((review) => (
                        <div key={review.id} className={styles.card}>
                            <div className={styles.thumbnail}>
                                <Image
                                    src={review.thumbnail.src}
                                    alt={review.title}
                                    width={300}
                                    height={200}
                                />
                                <button className={styles.playButton}>
                                    <PlayIcon size={45} className='p-2' />
                                </button>
                            </div>
                            <h3 className={styles.title}>{review.title}</h3>
                            <p className={styles.description}>
                                {review.description}
                            </p>
                        </div>
                    ))
                ) : (
                    <div className={styles.textReviews}>
                        <p>
                            Отзывы пациентов будут добавлены в ближайшее время.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ReviewsSection;
