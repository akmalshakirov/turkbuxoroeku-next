import { Facebook, Instagram, Send, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimatedLink from "../ui/AnimatedLink";

const Footer = () => {
    return (
        <footer className='bg-[#cb4081] text-white py-8'>
            <div className='flex gap-[4.392vw] justify-center'>
                <div className='mb-6 md:mb-0'>
                    <Image
                        src='/icon.svg'
                        alt='Logo'
                        className='mb-4'
                        width={190}
                        height={190}
                    />
                    <h4 className='text-lg font-bold mb-2'>
                        ТУРК БУХАРА ЭКУ ЦЕНТР
                    </h4>
                    <p>Группа компаний "Turk Buxoro Eku Markazi"</p>
                    <p>© 2015 - 2025</p>
                    <p className='mt-4'>Мы в социальных сетях:</p>
                    <div className='flex space-x-4 mt-2'>
                        <Link
                            href='/'
                            className='hover:bg-[var(--primary-color)] border rounded-full bg-pink-500 text-xl p-2'>
                            <Instagram size={20} />
                        </Link>
                        <Link
                            href='/'
                            className='hover:bg-[var(--primary-color)] transition border rounded-full bg-pink-500 text-xl p-2'>
                            <Send size={20} />
                        </Link>
                        <Link
                            href='/'
                            className='hover:bg-[var(--primary-color)] transition border rounded-full bg-pink-500 text-xl p-2'>
                            <Facebook size={20} />
                        </Link>
                        <Link
                            href='/'
                            className='hover:bg-[var(--primary-color)] transition border rounded-full bg-pink-500 text-xl p-2'>
                            <Youtube size={20} />
                        </Link>
                    </div>
                </div>
                <div className='mb-6 md:mb-0'>
                    <h4 className='text-lg font-bold mb-2'>Бухоро</h4>
                    <p>Пн - Пт: 09:00 - 18:00</p>
                    <p>+998 99 718 03-03</p>
                    <p>Бухоро Шахри Абдухолиқ Ғиждивоний 60 уй</p>
                </div>
                <div className='mb-6 md:mb-0'>
                    <h4 className='text-lg font-bold mb-2'>Тошкент</h4>
                    <p>Пн - Пт: 09:00 - 18:00</p>
                    <p>+998 99 118 03-03</p>
                    <p>Ахмад Юнаки 43А ТТЗ</p>
                </div>
                <div>
                    <h4 className='text-lg font-bold mb-2'>
                        <Link href='/about'>О нас</Link>
                    </h4>
                    <ul className='space-y-2'>
                        <li>
                            <Link href='/'>Процедуры и процессы</Link>
                        </li>
                        <li>
                            <Link href='/'>Ресурсы и поддержка</Link>
                        </li>
                        <li>
                            <Link href='/contacts'>Контакты</Link>
                        </li>
                        <li>
                            <Link href='/services'>Услуги</Link>
                        </li>
                        <li>
                            <Link href='/'>Успешные истории</Link>
                        </li>
                        <li>
                            <Link href='/news'>Новости и блог</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='text-center mt-8 flex items-center justify-center'>
                <p className='mr-1'>Все права защищены ©. </p>
                <p>Разработано:</p>
                <AnimatedLink
                    link='https://limon.group'
                    target='_blank'
                    rel='noopener noreferrer'
                    title='Limon Group'>
                    Limon.group
                </AnimatedLink>
            </div>
        </footer>
    );
};

export default Footer;
