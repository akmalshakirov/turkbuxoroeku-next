import { ArrowRight, PlayIcon } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import ReviewsFirst from "../../images/reviews-rak.png";
import styles from "./ReviewsSection.module.css";

interface IVideoReviewsProp {
    id: number;
    title: string;
    description: string;
    thumbnail: StaticImageData;
}

interface ITextReviewsProp {
    id: number;
    author: string;
    date: string;
    description: string;
}

const videoReviews: IVideoReviewsProp[] = [
    {
        id: 1,
        title: "Биопсия простаты с новокаиновой блокадой",
        description:
            "Биопсия простаты. Интервью с пациентом через 7 дней. Видео отзыв 1",
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
        description: "Биопсия простаты. Интервью с пациентом. Видео отзыв",
        thumbnail: ReviewsFirst,
    },
    {
        id: 4,
        title: "Рак простаты. Лапароскопическое удаление",
        description: "Биопсия простаты. Интервью с пациентом. Видео отзыв",
        thumbnail: ReviewsFirst,
    },
];

const textReviews: ITextReviewsProp[] = [
    {
        id: 1,
        author: "Алиса",
        date: "15.07.2024",
        description:
            "Мне проводили операцию по выравнивание перегородки и прижигание слизистой оз за медикаментозного ренита. Мой лечащий доктор Анна Григорьевна была со мной, как говорится, на волне, хотя  я тот ещё прив…",
    },
    {
        id: 2,
        author: "Марина",
        date: "15.07.2024",
        description:
            "Спасибо огромное замечательному доктору Догову АМ за высокий профессионализм, золотые руки. Всё, что мне удалили прекрасно зажило и зарубцевалось. Как будто ничего и не было. Низкий поклон и тысяча бла...",
    },
    {
        id: 3,
        author: "Дмитрий",
        date: "15.07.2024",
        description:
            "В марте 2024г. с острой болью и камнями в почке и мочеточнике попал на прием к урологу-андрологу Роману Сергеевичу Трухманову. Был составлен план лечения, было хирургическое вмешательство-операция, ле…                                    ",
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

    const reviews = activeTab === "video" ? videoReviews : textReviews;

    return (
        <section className={styles.reviewsSection}>
            <div>
                <div className={styles.header}>
                    <h2 className='text-3xl font-bold'>
                        Отзывы наших пациентов
                    </h2>
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

                <div className={`${styles.reviewsWrapper}`}>
                    <div className='bg-black/5 p-2.5 max-w-max max-h-max mb-5 rounded-full'>
                        <div className={styles.tabs}>
                            <button
                                className={`${styles.tabButton} ${
                                    activeTab === "video" ? styles.active : ""
                                }`}
                                onClick={() => handleTabChange("video")}
                                name='Видео-интервью с пациентами'
                                aria-label='Видео-интервью с пациентами'>
                                Видео-интервью с пациентами
                            </button>
                            <button
                                className={`${styles.tabButton} ${
                                    activeTab === "text" ? styles.active : ""
                                }`}
                                onClick={() => handleTabChange("text")}
                                name='Отзывы пациентов'
                                aria-label='Отзывы пациентов'>
                                Отзывы пациентов
                            </button>
                        </div>
                    </div>

                    <div
                        className={`${styles.slider} ${
                            animate ? styles.animateOut : styles.animateIn
                        }`}>
                        {activeTab === "video"
                            ? reviews.map((review) => (
                                  <div key={review.id} className={styles.card}>
                                      <div className={styles.thumbnail}>
                                          <Image
                                              src={
                                                  "thumbnail" in review
                                                      ? review.thumbnail.src
                                                      : ""
                                              }
                                              alt={
                                                  "title" in review
                                                      ? review.title
                                                      : ""
                                              }
                                              width={300}
                                              height={200}
                                          />
                                          <button
                                              className={styles.playButton}
                                              name='Play icon button...'
                                              aria-label='Play icon button...'>
                                              <PlayIcon
                                                  size={45}
                                                  className='p-2'
                                              />
                                          </button>
                                      </div>
                                      <h3 className={styles.title}>
                                          {"title" in review
                                              ? review.title
                                              : ""}
                                      </h3>
                                      <p className={styles.description}>
                                          {review.description}
                                      </p>
                                  </div>
                              ))
                            : reviews.map((review) => (
                                  <div
                                      key={review.id}
                                      className={styles.textCard}>
                                      <h3 className={styles.author}>
                                          {"author" in review
                                              ? review.author
                                              : ""}
                                      </h3>
                                      <span className={styles.date}>
                                          {"date" in review ? review.date : ""}
                                      </span>
                                      <p className={styles.description}>
                                          {review.description}
                                      </p>
                                  </div>
                              ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
