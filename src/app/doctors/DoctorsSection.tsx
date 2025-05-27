import { ArrowLeft, ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef } from "react";
import AndreyDoctor from "../../images/andrey-doctor.png";
import styles from "./DoctorsSection.module.css";

interface Doctor {
    id: number;
    name: string;
    specialty: string;
    photo: StaticImageData;
}

const originalDoctors: Doctor[] = [
    {
        id: 1,
        name: "Хольнов Андрей Игоревич",
        specialty: "Акушер-гинеколог",
        photo: AndreyDoctor,
    },
    {
        id: 2,
        name: "Потапов Михаил Евгеньевич",
        specialty: "Акушер-гинеколог",
        photo: AndreyDoctor,
    },
    {
        id: 3,
        name: "Камилова Дилором Пулатовна",
        specialty: "Акушер-гинеколог",
        photo: AndreyDoctor,
    },
    {
        id: 4,
        name: "Дешеулин Андрей Станиславович",
        specialty: "Акушер-гинеколог",
        photo: AndreyDoctor,
    },
];

const doctors = [...originalDoctors, ...originalDoctors, ...originalDoctors];

export default function DoctorsSection() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (sliderRef.current && cardRef.current) {
            const cardWidth = cardRef.current.offsetWidth + 16;
            const initialScroll = cardWidth * originalDoctors.length;
            sliderRef.current.scrollLeft = initialScroll;
        }
    }, []);

    const scroll = useCallback((direction: "left" | "right") => {
        if (!sliderRef.current || !cardRef.current) return;

        const slider = sliderRef.current;
        const cardWidth = cardRef.current.offsetWidth + 16;

        slider.scrollBy({
            left: direction === "left" ? -cardWidth : cardWidth,
            behavior: "smooth",
        });
    }, []);

    const handleScroll = useCallback(() => {
        if (!sliderRef.current || !cardRef.current) return;

        const slider = sliderRef.current;
        const cardWidth = cardRef.current.offsetWidth + 16;
        const totalCards = doctors.length;
        const originalCount = originalDoctors.length;

        const maxScroll = cardWidth * totalCards;
        const currentScroll = slider.scrollLeft;

        if (currentScroll <= cardWidth) {
            slider.scrollLeft = cardWidth * originalCount + currentScroll;
        } else if (currentScroll >= cardWidth * (originalCount * 2)) {
            slider.scrollLeft = currentScroll - cardWidth * originalCount;
        }
    }, []);

    return (
        <section className='relative mt-6'>
            <div className='flex items-center justify-between'>
                <h2>Врачи</h2>
                <Link
                    href='/services'
                    className='group flex items-center no-underline! hover:text-[var(--primary-color)]'
                    aria-label='/about'>
                    Все услуги
                    <ArrowRight
                        className='transition-transform duration-100 ease-in-out inline group-hover:translate-x-1 ml-1'
                        size={18}
                    />
                </Link>
            </div>

            <div className={styles.sliderWrapper}>
                <button
                    className={`${styles.navButton} ${styles.left}`}
                    onClick={() => scroll("left")}>
                    <ArrowLeft />
                </button>

                <div
                    className={styles.slider}
                    ref={sliderRef}
                    onScroll={handleScroll}>
                    {doctors.map((doc, i) => (
                        <div
                            key={`${doc.id}-${i}`}
                            className={styles.card}
                            ref={i === 0 ? cardRef : null}>
                            <div className={styles.photo}>
                                <Image
                                    src={doc.photo}
                                    alt={doc.name}
                                    width={200}
                                    height={200}
                                    objectFit='cover'
                                />
                            </div>
                            <span className={styles.spec}>{doc.specialty}</span>
                            <h3 className={styles.name}>{doc.name}</h3>
                        </div>
                    ))}
                </div>

                <button
                    className={`${styles.navButton} ${styles.right}`}
                    onClick={() => scroll("right")}>
                    <ArrowRight />
                </button>
            </div>
        </section>
    );
}
