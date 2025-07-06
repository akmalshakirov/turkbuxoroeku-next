import { StaticImageData } from "next/image";
import Link from "next/link";
import AndreyDoctor from "../../images/andrey-doctor.png";
import AndreyIgorovichDoctor from "../../images/andrey-igorovich-doctor.png";
import DiloromDoctor from "../../images/dilorom-doctor.png";
import MixailDoctor from "../../images/mixail-doctor.png";
import styles from "./Doctors.module.css";

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
        link: "/1",
    },
    {
        id: 2,
        name: "Потапов Михаил Евгеньевич",
        specialty: "Акушер-гинеколог",
        photo: MixailDoctor,
        link: "/2",
    },
    {
        id: 3,
        name: "Камилова Дилором Пулатовна",
        specialty: "Акушер-гинеколог",
        photo: DiloromDoctor,
        link: "/3",
    },
    {
        id: 4,
        name: "Дешеулин Андрей Станиславович",
        specialty: "Акушер-гинеколог",
        photo: AndreyDoctor,
        link: "/4",
    },
];

const DoctorsPage = () => {
    return (
        <div className='container mx-auto mt-5'>
            <div className='flex items-center gap-2 text-gray-500'>
                <Link href='/'>Главная страница</Link>
                <span>/</span>
                <p>Докторы</p>
            </div>
            <div className='flex items-center p-4'>
                {doctors.map((doc) => (
                    <Link
                        href={`/doctors${doc.link}`}
                        key={doc.id}
                        className={styles.doctorsCard}>
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
    );
};

export default DoctorsPage;
