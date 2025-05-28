import { ArrowRight } from "lucide-react";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import AndreyDoctor from "../../images/andrey-doctor.png";
import AndreyIgorovichDoctor from "../../images/andrey-igorovich-doctor.png";
import DiloromDoctor from "../../images/dilorom-doctor.png";
import MixailDoctor from "../../images/mixail-doctor.png";
import styles from "./DoctorsSection.module.css";

interface Doctor {
    id: number;
    name: string;
    specialty: string;
    photo: StaticImageData;
    link: string;
}

const originalDoctors: Doctor[] = [
    {
        id: 1,
        name: "Хольнов Андрей Игоревич",
        specialty: "Акушер-гинеколог",
        photo: AndreyIgorovichDoctor,
        link: "/",
    },
    {
        id: 2,
        name: "Потапов Михаил Евгеньевич",
        specialty: "Акушер-гинеколог",
        photo: MixailDoctor,
        link: "/",
    },
    {
        id: 3,
        name: "Камилова Дилором Пулатовна",
        specialty: "Акушер-гинеколог",
        photo: DiloromDoctor,
        link: "/",
    },
    {
        id: 4,
        name: "Дешеулин Андрей Станиславович",
        specialty: "Акушер-гинеколог",
        photo: AndreyDoctor,
        link: "/",
    },
];

const doctors = [...originalDoctors, ...originalDoctors, ...originalDoctors];

export default function DoctorsSection() {
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        let animationFrame: number;
        let scrollSpeed = 1;

        const smoothScroll = () => {
            if (slider.scrollLeft >= slider.scrollWidth / 2) {
                slider.scrollLeft = 0;
            } else {
                slider.scrollLeft += scrollSpeed;
            }
            animationFrame = requestAnimationFrame(smoothScroll);
        };

        const startScroll = () => {
            scrollSpeed = 1;
            animationFrame = requestAnimationFrame(smoothScroll);
        };

        const stopScroll = () => {
            scrollSpeed = 0;
            cancelAnimationFrame(animationFrame);
        };

        startScroll();

        slider.addEventListener("mouseover", stopScroll);
        slider.addEventListener("mouseout", startScroll);

        return () => {
            cancelAnimationFrame(animationFrame);
            slider.removeEventListener("mouseover", stopScroll);
            slider.removeEventListener("mouseout", startScroll);
        };
    }, []);

    return (
        <section className='relative mt-10 mb-10'>
            <div className='flex items-center justify-between'>
                <h2 className='text-3xl font-bold'>Врачи</h2>
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
                <div className={styles.slider} ref={sliderRef}>
                    {doctors.map((doc, i) => (
                        <Link
                            href={`/doctors/${doc.link}`}
                            key={`${doc.id}-${i}`}
                            className={styles.card}>
                            <div className={styles.photo}>
                                <img
                                    src={doc.photo.src}
                                    alt={doc.name}
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <span className={styles.spec}>{doc.specialty}</span>
                            <h3 className={styles.name}>{doc.name}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
