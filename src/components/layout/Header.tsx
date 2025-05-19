"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import IconBlack from "../../../public/icon-black.svg";
import Icon from "../../../public/icon.svg";
import Dropdown from "../../images/dropdownicon.png";
import Flag_EN from "../../images/flag-en.png";
import Flag_RU from "../../images/flag-ru.png";
import Flag_UZ from "../../images/flag-uz.png";
import OperatorIcon from "../../images/operator.png";
import LocationIcon from "../../images/location.svg";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import "./Header.css";
import PhoneInput from "../ui/TelNumberInput";

const Header = () => {
    const [headerActive, setHeaderActive] = React.useState(false);
    const [langActive, setLangActive] = React.useState(false);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [formData, setFormData] = React.useState({
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Yuborilgan ma'lumotlar:", formData);

        setIsModalOpen(false);

        setFormData({ name: "", telnum: "", message: "" });
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    return (
        <>
            <header
                className={`header transition-colors text-white ${
                    headerActive ? "bg-white" : "bg-transparent"
                }`}>
                <link
                    rel='preload'
                    href='/_next/static/media/icon.56997624.svg'
                    as='image'
                />
                <nav className='container mx-auto flex justify-between items-center p-4 border-b border-b-black/15'>
                    <Link href='/'>
                        <Image
                            src={headerActive ? IconBlack : Icon}
                            alt='Icon'
                            priority
                        />
                    </Link>
                    <a
                        href='tel:+998997180303'
                        className='flex gap-1.5 items-center no-underline! group'>
                        <Image
                            src={OperatorIcon}
                            alt='Operator icon'
                            width={40}
                            height={40}
                            className={`p-[3px] rounded-[10px] ${
                                headerActive
                                    ? "invert-100 bg-white/10"
                                    : "bg-pink-500/30"
                            }`}
                            priority
                        />
                        <div>
                            <p
                                className={`${
                                    headerActive ? "text-black" : "text-white"
                                }`}>
                                +998 99 718 03-03
                            </p>
                            <small
                                className={`${
                                    headerActive ? "text-black" : "text-white"
                                }`}>
                                Turk Buxoro Eku Markazi
                            </small>
                        </div>
                    </a>
                    <div className='flex items-center gap-3.5'>
                        <Button variant='primary' size='md' onClick={openModal}>
                            Записаться
                        </Button>
                        <Modal
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                            title='Записаться'>
                            <form onSubmit={handleSubmit}>
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
                                        <PhoneInput label='Номер телефона:' />
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
                                        required
                                        defaultValue='no'>
                                        <option disabled value='no'>
                                            Услуги
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
                                        type='submit'
                                        variant='primary'
                                        size='sm'
                                        className='py-3'>
                                        Отправлять
                                    </Button>
                                </div>
                            </form>
                        </Modal>
                        <button
                            className={`dropdown text-black ${
                                langActive ? "dropdown-active" : ""
                            }`}
                            type='button'
                            onClick={() => setLangActive(!langActive)}>
                            <ul>
                                <li>
                                    <Image
                                        src={Flag_RU}
                                        alt='flag ru'
                                        priority
                                    />{" "}
                                    RU
                                    <Image
                                        src={Dropdown}
                                        alt='dropdown'
                                        width={15}
                                        height={15}
                                        className='invert-100'
                                        priority
                                    />
                                </li>
                                <ul onClick={(e) => e.stopPropagation()}>
                                    <li>
                                        <Image
                                            src={Flag_UZ}
                                            alt='flag uz'
                                            priority
                                        />
                                        UZ
                                    </li>
                                    <li>
                                        <Image
                                            src={Flag_EN}
                                            alt='flag en'
                                            priority
                                        />
                                        EN
                                    </li>
                                </ul>
                            </ul>
                        </button>
                    </div>
                    <div className='flex items-center gap-4 max-md:hidden text-black'>
                        <Link
                            href='/about'
                            className='hover:text-blue-300 transition-colors'>
                            O нас
                        </Link>
                        <Link
                            href='/services'
                            className='hover:text-blue-300 transition-colors'>
                            Услуги
                        </Link>
                        <Link
                            href='/news'
                            className='hover:text-blue-300 transition-colors'>
                            Новости и блог
                        </Link>
                        <Link
                            href='/contacts'
                            className='hover:text-blue-300 transition-colors'>
                            Контакты
                        </Link>
                        <button
                            className={`burger-menu ${
                                headerActive
                                    ? "burger-close bg-[#0000007c]"
                                    : "bg-[#df0971]"
                            }`}
                            onClick={() => setHeaderActive(!headerActive)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </nav>
            </header>
            <div
                className={`header-popup ${headerActive ? "active" : ""}`}
                onClick={() => setHeaderActive(false)}>
                <div
                    onClick={(e) => e.stopPropagation()}
                    className='flex gap-[140px] header-popup-active border-t border-t-[#e4016a]'>
                    <div className='pt-[20px]'>
                        <h2>
                            <Link href='/about' className='w-max'>
                                <b>O нас</b>
                            </Link>
                        </h2>
                        <h2 className='flex flex-col'>
                            <Link
                                href='/services'
                                className='w-max max-w-[280px]'>
                                <b>Услуги</b>
                            </Link>
                            <Link
                                href='/services'
                                className='text-gray-600 w-max max-w-[280px]'>
                                Искусственное оплодотворение (ЭКО)
                            </Link>
                            <Link
                                href='/services'
                                className='text-gray-600 w-max max-w-[280px]'>
                                Интрацитоплазматическая инъекция сперматозоидов
                                (ИКСИ)
                            </Link>
                            <Link
                                href='/services'
                                className='text-gray-600 w-max max-w-[280px]'>
                                Консультации по репродукции и лечению бесплодия
                            </Link>
                        </h2>
                        <h2>
                            <Link href='/services'>
                                <b>Процедуры и процессы</b>
                            </Link>
                        </h2>
                    </div>
                    <div className='flex flex-col pt-[20px]'>
                        <h2>
                            <Link href='/services'>
                                <b>Успешные истории</b>
                            </Link>
                        </h2>
                        <h2>
                            <Link href='/services'>Отзывы пациентов</Link>
                        </h2>
                        <h2>
                            <Link href='/services'>
                                Видео-интервью с пациентами
                            </Link>
                        </h2>
                        <h2>
                            <Link href='/services'>
                                <b>Ресурсы и поддержка</b>
                            </Link>
                        </h2>
                        <h2>
                            <Link href='/services'>
                                <b>Новости</b>
                            </Link>
                        </h2>
                        <h2>
                            <Link href='/services'>
                                <b>Контакты</b>
                            </Link>
                        </h2>
                    </div>
                    <div className='flex flex-col border-l border-l-[#e4016a] pt-[20px] pl-[20px] gap-[30px]'>
                        <div>
                            <div className='flex items-center gap-1.5'>
                                <Image
                                    src={LocationIcon}
                                    alt='location icon'
                                    width={30}
                                    height={30}
                                />
                                <b>Buxoro</b>
                            </div>
                            <p>Пн - Пт: 09:00 - 18:00 +998 99 718 03-03</p>
                            <p>Бухоро Шаҳри Абдухолиқ Ğиждивоний 60 уй</p>
                        </div>
                        <div>
                            <div className='flex items-center gap-1.5'>
                                <Image
                                    src={LocationIcon}
                                    alt='location icon'
                                    width={30}
                                    height={30}
                                />
                                <b>Toshkent</b>
                            </div>
                            <p>Пн - Пт: 09:00 - 18:00 +998 99 118 03-03</p>
                            <p>Аҳмад Югнаки 43A TT3</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
