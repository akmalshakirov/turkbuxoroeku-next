"use client";
import Button from "@/components/ui/Button";
import PhoneInput from "@/components/ui/TelNumberInput";
import api from "@/services/api";
import { CalendarCheck, PhoneCallIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import LocationLogo from "../../images/location.svg";
import { toast } from "react-toastify";

interface IFormDataProps {
    name: string;
    telnum: string;
    message: string;
}

const ContactsPage = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [formData, setFormData] = useState<IFormDataProps>({
        name: "",
        telnum: "",
        message: "",
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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

            toast.success(message);
            setFormData({ name: "", telnum: "", message: "" });
        } catch (error) {
            console.error("Xatolik:", error);
        } finally {
            setIsFormSubmitted(false);
        }
    };

    useEffect(() => {
        document.title = "Контакты - Турк Бухара Эку Центр";
    }, []);

    return (
        <div className='container mx-auto mt-5'>
            <div>
                <div className='flex items-center gap-2 text-gray-500 mb-4'>
                    <Link href='/'>Главная страница</Link>
                    <span>/</span>
                    <p>Контакты</p>
                </div>
                <h1 className='text-3xl font-bold mb-5'>Контакты</h1>
            </div>

            <div className='mb-5 flex gap-5'>
                <div className='border border-gray-200 p-6 rounded-lg shadow-md w-1/2'>
                    <div className='flex items-center mb-6'>
                        <Image
                            src={LocationLogo}
                            alt='Location icon'
                            width={30}
                            height={30}
                        />
                        <h2 className='text-xl font-bold'>
                            Turk Buxoro Eku Markazi,{" "}
                            <span className='text-[var(--primary-color)]'>
                                Бухоро
                            </span>
                        </h2>
                    </div>
                    <div className='flex items-center gap-5'>
                        <Link
                            href='tel:+998997180303'
                            className='text-gray-600 mb-2 flex gap-1.5'>
                            <PhoneCallIcon className='text-[var(--primary-color)]' />
                            +998 99 718 03-03
                        </Link>
                        <div className='text-gray-600 mb-2 flex gap-1.5'>
                            <CalendarCheck className='text-[var(--primary-color)]' />
                            Пн - Пт: 09:00 - 18:00
                        </div>
                    </div>
                    <div className='flex items-center mb-2.5'>
                        <Image
                            src={LocationLogo}
                            alt='Location icon'
                            width={30}
                            height={30}
                        />
                        Бухоро Шаҳри Абдухолиқ Ğиждивоний 60 уй
                    </div>
                    <div className='relative w-full h-0 pb-[56.25%]'>
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.89309298888!2d64.42841827535688!3d39.786954493729844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f500932102b6cf5%3A0x2cc1a3591286f3ac!2sTURK%20BUXORO%20EKU%20MARKAZI!5e0!3m2!1sru!2s!4v1749304305104!5m2!1sru!2s'
                            className='absolute top-0 left-0 w-full h-full'
                            allowFullScreen
                            loading='lazy'
                            referrerPolicy='no-referrer-when-downgrade'></iframe>
                    </div>
                </div>
                <div className='border border-gray-200 p-6 rounded-lg shadow-md w-1/2'>
                    <div className='flex items-center mb-6'>
                        <Image
                            src={LocationLogo}
                            alt='Location icon'
                            width={30}
                            height={30}
                        />
                        <h2 className='text-xl font-bold'>
                            Turk Buxoro Eku Markazi,{" "}
                            <span className='text-[var(--primary-color)]'>
                                Toshkent
                            </span>
                        </h2>
                    </div>
                    <div className='flex items-center gap-5'>
                        <Link
                            href='tel:+998997180303'
                            className='text-gray-600 mb-2 flex gap-1.5'>
                            <PhoneCallIcon className='text-[var(--primary-color)]' />
                            +998 99 718 03-03
                        </Link>
                        <div className='text-gray-600 mb-2 flex gap-1.5'>
                            <CalendarCheck className='text-[var(--primary-color)]' />
                            Пн - Пт: 09:00 - 18:00
                        </div>
                    </div>
                    <div className='flex items-center mb-2.5'>
                        <Image
                            src={LocationLogo}
                            alt='Location icon'
                            width={30}
                            height={30}
                        />
                        Toshkent Шаҳри Абдухолиқ Ğиждивоний 60 уй
                    </div>
                    <div className='relative w-full h-0 pb-[56.25%]'>
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.2862548381913!2d69.38828997544026!3d41.34613139855413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef7f15f9def5b%3A0xb1afd084c0ba7434!2sTASHKENT%20TURK%20BUXORO%20EKU%20MARKAZI!5e0!3m2!1sru!2s!4v1749304445596!5m2!1sru!2s'
                            className='absolute top-0 left-0 w-full h-full'
                            allowFullScreen
                            loading='lazy'
                            referrerPolicy='no-referrer-when-downgrade'></iframe>
                    </div>
                </div>
            </div>
            <div className='border border-gray-300 rounded-2xl p-5 mb-10'>
                <h2 className='text-xl font-bold mb-2'>Обратная связь</h2>
                <form onSubmit={handleSubmit}>
                    <div className='flex gap-10'>
                        <div className='w-1/2 flex flex-col'>
                            <label
                                htmlFor='name'
                                className='block mb-1 font-medium text-[#bf0059]'>
                                Имя фамилия:
                            </label>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                value={formData.name}
                                onChange={handleInputChange}
                                className='w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm outline-none focus:border-pink-400 transition-colors'
                                placeholder='Имя фамилия'
                                required
                            />
                        </div>
                        <div className='w-1/2'>
                            <PhoneInput
                                label='Номер телефона:'
                                required
                                name='telnum'
                                value={formData.telnum}
                                onChange={handlePhoneChange}
                                placeholder='+998'
                            />
                        </div>
                    </div>
                    <div className='mb-4 mt-4'>
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
                            aria-label='Отправить'
                            name='button'
                            type='submit'
                            variant='primary'
                            size='sm'
                            className={`py-3 ${
                                isFormSubmitted
                                    ? "opacity-50 cursor-not-allowed"
                                    : ""
                            }`}
                            disabled={isFormSubmitted}>
                            Отправить
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactsPage;
