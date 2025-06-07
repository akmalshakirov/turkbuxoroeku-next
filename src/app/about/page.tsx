"use client";

import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import ScrollHorizontal from "@/components/ui/ScrollHorizontal";
import PhoneInput from "@/components/ui/TelNumberInput";
import { Icons } from "@/icons";
import axios from "axios";
import { LoaderCircle } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import AboutOne from "../../images/about-1.jpg";
import AboutTwo from "../../images/about-2.jpg";
import AboutThree from "../../images/about-3.jpg";
import AboutFour from "../../images/about-4.jpg";
import AboutFive from "../../images/about-5.jpg";
import FirstImage from "../../images/home-page-2.jpg";
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

const AboutPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
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
            const response = await axios.post("/api/submit-form", formData, {
                headers: {
                    "Content-Type": "application/json",
                },
                validateStatus: (status) => status >= 200 && status < 300,
            });

            setIsModalOpen(false);
            setTimeout(() => {
                toast.success(response.data.message);
            }, 77);
            setFormData({ name: "", telnum: "", message: "", service: "" });
        } catch (error) {
            console.error("Xatolik:", error);
        } finally {
            setIsFormSubmitted(false);
        }
    };

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
            <div className='mt-20 bg-[#fdf6f0] p-7 rounded-2xl'>
                <div>
                    <h1>Наша история</h1>
                    <ul>
                        За время работы сети были открыты:
                        <li>
                            Неотложная помощь «Turk Buxoro Eku Markazi» в Бухара
                            (работает с 2001 г.)
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
