import ScrollHorizontal from "@/components/ui/ScrollHorizontal";
import { ArrowRight } from "lucide-react";
import { StaticImageData } from "next/image";
import Link from "next/link";
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

const doctors: Doctor[] = [
    {
        id: 1,
        name: "Хольнов Андрей Игоревич",
        specialty: "Акушер-гинеколог",
        photo: AndreyIgorovichDoctor,
        link: "1",
    },
    {
        id: 2,
        name: "Потапов Михаил Евгеньевич",
        specialty: "Акушер-гинеколог",
        photo: MixailDoctor,
        link: "2",
    },
    {
        id: 3,
        name: "Камилова Дилором Пулатовна",
        specialty: "Акушер-гинеколог",
        photo: DiloromDoctor,
        link: "3",
    },
    {
        id: 4,
        name: "Дешеулин Андрей Станиславович",
        specialty: "Акушер-гинеколог",
        photo: AndreyDoctor,
        link: "4",
    },
];

export default function DoctorsSection() {
    return (
        <section
            className={`relative mt-10 mb-10 ${styles["doctors-section"]}`}>
            <div className='flex items-center justify-between'>
                <h2 className='text-3xl font-bold'>Врачи</h2>
                <Link
                    href='/doctors'
                    className='group flex items-center no-underline! hover:text-[var(--primary-color)]'
                    aria-label='Все врачи'>
                    Все врачи
                    <ArrowRight
                        className='transition-transform duration-100 ease-in-out inline group-hover:translate-x-1 ml-1'
                        size={18}
                    />
                </Link>
            </div>

            <div className={styles.sliderWrapper}>
                <div className={styles.slider}>
                    <ScrollHorizontal>
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
                                <span className={styles.spec}>
                                    {doc.specialty}
                                </span>
                                <h3 className={styles.name}>{doc.name}</h3>
                            </Link>
                        ))}
                    </ScrollHorizontal>
                </div>
            </div>
        </section>
    );
}
