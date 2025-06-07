"use client";

import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import ScrollHorizontal from "@/components/ui/ScrollHorizontal";
import PhoneInput from "@/components/ui/TelNumberInput";
import { Icons } from "@/icons";
import api from "@/services/api";
import { ArrowRight, LoaderCircle } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AboutOne from "../../images/about-1.jpg";
import AboutTwo from "../../images/about-2.jpg";
import AboutThree from "../../images/about-3.jpg";
import AboutFour from "../../images/about-4.jpg";
import AboutFive from "../../images/about-5.jpg";
import FirstImage from "../../images/home-page-2.jpg";
import AndreyDoctor from "../../images/andrey-doctor.png";
import AndreyIgorovichDoctor from "../../images/andrey-igorovich-doctor.png";
import DiloromDoctor from "../../images/dilorom-doctor.png";
import MixailDoctor from "../../images/mixail-doctor.png";
import styles from "../doctors/DoctorsSection.module.css";
import "./About.css";

interface ICardProps {
    id: number;
    image: StaticImageData;
}

const Cards: ICardProps[] = [
    {
        id: 1,
        image: AboutOne,
    },
    {
        id: 2,
        image: AboutTwo,
    },
    {
        id: 3,
        image: AboutThree,
    },
    {
        id: 4,
        image: AboutFour,
    },
    {
        id: 5,
        image: AboutFive,
    },
];

interface IFormDataProps {
    name: string;
    telnum: string;
    message: string;
    service: string;
}

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

const AboutPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [formData, setFormData] = useState<IFormDataProps>({
        name: "",
        telnum: "",
        message: "",
        service: "",
    });

    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handlePhoneChange = (value: string) => {
        setFormData((prev) => ({
            ...prev,
            telnum: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsFormSubmitted(true);

        try {
            const { message } = await api.post<
                { message: string },
                IFormDataProps
            >("/submit-form", formData);

            setIsModalOpen(false);
            setTimeout(() => {
                toast.success(message);
            }, 77);
            setFormData({ name: "", telnum: "", message: "", service: "" });
        } catch (error: any) {
            setIsModalOpen(false);
            setFormData({ name: "", telnum: "", message: "", service: "" });
        } finally {
            setIsFormSubmitted(false);
        }
    };

    useEffect(() => {
        document.title = "О нас - Турк Бухара Эку Центр";
    }, []);

    return (
        <div className='container mx-auto my-7'>
            {/* breadcrumbs ABOUT PAGE */}
            <div className='flex items-center gap-2 text-gray-500 mb-4'>
                <Link href='/'>Главная страница</Link>
                <span>/</span>
                <p>О нас</p>
            </div>
            <div className='flex items-center gap-25'>
                <div>
                    <h1>
                        «Turk Buxoro Eku Markazi» - центры репродукции в
                        Ташкент.
                    </h1>
                    <p className='max-w-[733px]'>
                        «Turk Buxoro Eku Markazi» — медицинские центры, в
                        которых женщинам и мужчинам помогают преодолеть
                        бесплодие и стать родителями. Для этого мы используем
                        ЭКО и другие доказавшие эффективность репродуктивные
                        методы (ВРТ). Лечение бесплодия проходит по стандартам,
                        выработанным ведущими международными организациями —
                        ESHRE, ASRM и др. <br /> <br /> В «Turk Buxoro Eku
                        Markazi» работает мощнейшая команда репродуктологов. У
                        каждого врача за плечами больше 1000 успешных программ
                        ЭКО. Что это значит? Тысячи счастливых родителей и
                        замечательных малышей, подрастающих в Ташкент, других
                        городах Узбекистан, за рубежом. И это только у одного
                        доктора!
                    </p>
                    <div className='flex items-center gap-4 mt-4'>
                        <span className='p-2 text-[#bf0059] font-bold bg-[#f9e7ef] rounded-lg'>
                            от 18 000 000 сум
                        </span>
                        <Button
                            title='Оставить заявку'
                            className='text-white'
                            onClick={() => setIsModalOpen(true)}>
                            Оставить заявку
                        </Button>
                    </div>
                </div>
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    title='Записаться'>
                    <form onSubmit={handleSubmit}>
                        {isFormSubmitted ? (
                            <div className='flex items-center gap-2 h-[24.305vw] 2xl:h-[17.292vw] justify-center text-4xl text-[var(--primary-color)]'>
                                Отправляется
                                <LoaderCircle
                                    className='animate-spin'
                                    size={35}
                                />
                            </div>
                        ) : (
                            <>
                                <div className='mb-4 flex items-center gap-[50px]'>
                                    <div className='w-[50%]'>
                                        <label
                                            htmlFor='name'
                                            className='block mb-1 font-medium text-[#bf0059]'>
                                            Имя:
                                        </label>
                                        <input
                                            placeholder='Имя:'
                                            type='text'
                                            id='name'
                                            name='name'
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className='w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm outline-none focus:border-pink-400 transition-colors'
                                            autoComplete='none'
                                            required
                                        />
                                    </div>
                                    <div className='w-[50%]'>
                                        <PhoneInput
                                            name='telnum'
                                            label='Номер телефона:'
                                            value={formData.telnum}
                                            onChange={handlePhoneChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className='mb-4'>
                                    <label
                                        htmlFor='select'
                                        className='text-[#bf0059]'>
                                        Услуги
                                    </label>
                                    <select
                                        className='w-full border border-gray-300 rounded px-2 py-3 text-black/60 outline-none focus:border-pink-400 shadow-sm'
                                        id='select'
                                        name='service'
                                        value={formData.service}
                                        onChange={handleInputChange}
                                        required>
                                        <option value='' disabled>
                                            Выберите услугу
                                        </option>
                                        <option value='Искусственное оплодотворение (ЭКО)'>
                                            Искусственное оплодотворение (ЭКО)
                                        </option>
                                        <option value='Интрацитоплазматическая инъекция сперматозоидов (ИКСИ)'>
                                            Интрацитоплазматическая инъекция
                                            сперматозоидов (ИКСИ)
                                        </option>
                                        <option value='Консультации по репродукции и лечению бесплодия'>
                                            Консультации по репродукции и
                                            лечению бесплодия
                                        </option>
                                        <option value='Репродуктивная хирургия'>
                                            Репродуктивная хирургия
                                        </option>
                                        <option value='Генетика'>
                                            Генетика
                                        </option>
                                        <option value='Криоконсервация'>
                                            Криоконсервация
                                        </option>
                                        <option value='Стимуляция овуляции'>
                                            Стимуляция овуляции
                                        </option>
                                        <option value='Обследование'>
                                            Обследование
                                        </option>
                                    </select>
                                </div>

                                <div className='mb-4'>
                                    <label
                                        htmlFor='message'
                                        className='block mb-1 font-medium text-[#bf0059]'>
                                        Сообщение:
                                    </label>
                                    <textarea
                                        placeholder='Сообщение'
                                        id='message'
                                        name='message'
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={2}
                                        className='w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm outline-none focus:border-pink-400'
                                        required
                                    />
                                </div>

                                <div className='text-white max-w-max'>
                                    <Button
                                        aria-label="it's button"
                                        name='button'
                                        type='submit'
                                        variant='primary'
                                        size='sm'
                                        className='py-3'
                                        disabled={isFormSubmitted}>
                                        Отправить
                                    </Button>
                                </div>
                            </>
                        )}
                    </form>
                </Modal>
                <div className='relative'>
                    <Image
                        className='rounded-full'
                        src={FirstImage}
                        alt='Image'
                        width={300}
                        height={300}
                        draggable={false}
                    />
                    <Icons.siteIcon
                        className='absolute top-1/2 left-0 translate-y-1/2'
                        width={120}
                        height={120}
                    />
                </div>
            </div>
            <ScrollHorizontal className='mt-12'>
                {Cards.map((card) => (
                    <div key={card.id} className='mx-2.5'>
                        <Image
                            src={card.image}
                            alt={`Card ${card.id}`}
                            width={300}
                            height={300}
                            className='shadow-md rounded-[20px]'
                            draggable={false}
                        />
                    </div>
                ))}
            </ScrollHorizontal>
            <div className='mt-20 bg-[#fdf6f0] p-7 rounded-2xl flex'>
                <div>
                    <h1 className='text-3xl font-bold mb-2.5'>Наша история</h1>
                    <ul className='list-disc'>
                        За время работы сети были открыты:
                        <li className='ml-5'>
                            Неотложная помощь «Turk Buxoro Eku Markazi» в Бухара
                            (работает с 2001 г.)
                        </li>
                        <li className='ml-5'>
                            Неотложная помощь «Turk Buxoro Eku Markazi» в
                            Ташкент (2003-2012 гг.)
                        </li>
                        <li className='ml-5'>
                            Поликлиника и дневной стационар для взрослых и детей
                            в Бухара (2006-2012 гг.)
                        </li>
                        <li className='ml-5'>
                            Филиал в Ташкент, включающий стационар, поликлинику
                            и неотложную помощь (2008-2014 гг.)
                        </li>
                        <li className='ml-5'>
                            Медицинский Центр «Turk Buxoro Eku Markazi» для
                            взрослых в Бухара (работает с 2003 г.)
                        </li>
                        <li className='ml-5'>
                            Стационар для взрослых в Бухара (работает с 2004 г.)
                        </li>
                        <li className='ml-5'>
                            Стационар и неотложная помощь для детей в Бухара
                            (2005-2009 гг.)
                        </li>
                        <li className='ml-5'>
                            Медицинский Центр «Turk Buxoro Eku Markazi» для всей
                            семьи на ул. Татарская (работает с 2007 г.)
                        </li>
                    </ul>
                </div>
                <div className='ml-auto p-5 bg-white rounded-2xl shadow-xl'>
                    <div>
                        <Icons.secondIcon />
                    </div>
                    <h1 className='text-3xl font-bold mt-5 mb-2.5'>
                        Наша миссия
                    </h1>
                    <p className='max-w-[333px]'>
                        Наша миссия проста и понятна — мы работаем, чтобы в
                        каждой семье, желающей стать родителями родился здоровый
                        ребенок. У нас вы найдете современные и комфортные
                        условия, безопасное передовое оборудование и
                        индивидуальный подход к каждому пациенту.
                    </p>
                </div>
            </div>
            <section className='relative mt-10 mb-10'>
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
        </div>
    );
};

export default AboutPage;
