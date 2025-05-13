"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Icon from "../../../public/icon.svg";
import Dropdown from "../../images/dropdown.png";
import Flag_EN from "../../images/flag-en.png";
import Flag_RU from "../../images/flag-ru.png";
import Flag_UZ from "../../images/flag-uz.png";
import OperatorIcon from "../../images/operator.png";
import Button from "../ui/Button";
import "./Header.css";

const Header = () => {
    const [headerActive, setHeaderActive] = React.useState(false);
    const [langActive, setLangActive] = React.useState(false);

    return (
        <>
            <header className='bg-pink-900 transition-colors text-white delay-0  min-w-screen relative z-[2]'>
                <link
                    rel='preload'
                    href='/_next/static/media/icon.56997624.svg'
                    as='image'
                />
                <nav className='container mx-auto flex justify-between items-center p-4 '>
                    <Link href='/'>
                        <Image src={Icon} alt='Icon' priority />
                    </Link>
                    <a
                        href='tel:+998997180303'
                        className='flex gap-1.5 items-center no-underline!'>
                        <Image
                            src={OperatorIcon}
                            alt='Operator icon'
                            width={40}
                            height={40}
                            className='p-[3px] border border-pink-600 bg-pink-500/30 rounded-[10px]'
                            priority
                        />
                        <div>
                            <p className='text-white'>+998 99 718 03-03</p>
                            <small>Turk Buxoro Eku Markazi</small>
                        </div>
                    </a>
                    <div className='flex items-center gap-3.5'>
                        <Button variant='primary' size='md'>
                            Записаться
                        </Button>
                        <button
                            className={`dropdown ${
                                langActive ? "dropdown-active" : ""
                            }`}
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
                                        className='inline'
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
                    <div className='flex items-center gap-4'>
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
                                headerActive ? "burger-close" : ""
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
                    className='flex flex-col gap-1.5'>
                    <h2>
                        <Link href='/about' className='w-max'>
                            <b>O нас</b>
                        </Link>
                    </h2>
                    <h2 className='flex flex-col'>
                        <Link href='/services' className='w-max'>
                            <b>Услуги</b>
                        </Link>
                        <Link href='/services' className='text-gray-600 w-max'>
                            Искусственное оплодотворение (ЭКО)
                        </Link>
                        <Link href='/services' className='text-gray-600 w-max'>
                            Интрацитоплазматическая инъекция сперматозоидов
                            (ИКСИ)
                        </Link>
                        <Link href='/services' className='text-gray-600 w-max'>
                            Консультации по репродукции и лечению бесплодия
                        </Link>
                    </h2>
                    <h2>
                        <Link href='/services'>
                            <b>Процедуры и процессы</b>
                        </Link>
                    </h2>
                </div>
            </div>
        </>
    );
};

export default Header;
