import { StaticImageData } from "next/image";
import AndreyDoctor from "../../../images/andrey-doctor.png";
import AndreyIgorovichDoctor from "../../../images/andrey-igorovich-doctor.png";
import DiloromDoctor from "../../../images/dilorom-doctor.png";
import MixailDoctor from "../../../images/mixail-doctor.png";

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

export const DoctorDetail = async ({
    params,
}: {
    params: { doctorId: string };
}) => {
    const doctorId = parseInt(params.doctorId, 10);

    // doctors massividan kerakli doktorni topish
    const doctor = doctors.find((doc) => doc.id === doctorId);

    if (!doctor) {
        return <div>Doctor not found</div>;
    }

    return (
        <div>
            <h1>{doctor.name}</h1>
            <p>Specialty: {doctor.specialty}</p>
            <img
                src={doctor.photo.src}
                alt={doctor.name}
                width={200}
                height={200}
            />
        </div>
    );
};

export default DoctorDetail;
