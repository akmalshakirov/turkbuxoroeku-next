import { Instagram, Facebook, Youtube, Send } from "lucide-react";
import Logo from "../../../public/icon.svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const Footer = () => {
    useEffect(() => {
        const links = document.querySelectorAll<HTMLAnchorElement>(".group");
        links.forEach((link) => {
            const handleMouseMove = (e: MouseEvent) => {
                const rect = link.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                link.style.setProperty("--tw-hover-origin", `${x}px ${y}px`);
            };

            link.addEventListener("mousemove", handleMouseMove);

            return () => {
                link.removeEventListener("mousemove", handleMouseMove);
            };
        });
    }, []);

    return (
        <footer className='bg-pink-600 text-white py-8'>
            <div className='flex gap-[4.392vw] justify-center'>
                <div className='mb-6 md:mb-0'>
                    <Image
                        src={Logo}
                        alt='Logo'
                        className='mb-4'
                        width={150}
                        height={150}
                    />
                    <h4 className='text-lg font-bold mb-2'>
                        ТУРК БУХАРА ЭКУ ЦЕНТР
                    </h4>
                    <p>Группа компаний "Turk Buxoro Eku Markazi"</p>
                    <p>© 2015 - 2025</p>
                    <p className='mt-4'>Мы в социальных сетях:</p>
                    <div className='flex space-x-4 mt-2'>
                        <a href='/' className='text-white text-xl group'>
                            <Instagram className='group-hover:text-[#e9acb4] transition' />
                        </a>
                        <a href='/' className='text-white text-xl group'>
                            <Send className='group-hover:text-[#e9acb4] transition' />
                        </a>
                        <a href='/' className='text-white text-xl group'>
                            <Facebook className='group-hover:text-[#e9acb4] transition' />
                        </a>
                        <a href='/' className='text-white text-xl group'>
                            <Youtube className='group-hover:text-[#e9acb4] transition' />
                        </a>
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
                <div className=''>
                    <h4 className='text-lg font-bold mb-2'>О нас</h4>
                    <ul className='space-y-2'>
                        <li>Процедуры и процессы</li>
                        <li>Ресурсы и поддержка</li>
                        <li>Контакты</li>
                        <li>Услуги</li>
                        <li>Успешные истории</li>
                        <li>Новости и блог</li>
                    </ul>
                </div>
            </div>
            <div className='text-center mt-8 flex items-center justify-center'>
                Developed by:{" "}
                <Link
                    href='https://limon.group'
                    rel='noopener noreferrer'
                    title='Limon Group'
                    target='_blank'
                    className='relative inline-block px-4 py-2 font-semibold text-white transition-all duration-500 rounded-lg group overflow-hidden no-underline!'>
                    <span
                        className='absolute inset-0 w-full h-full bg-gradient-to-r from-pink-500 via-yellow-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500'
                        style={{
                            transformOrigin: "var(--tw-hover-origin)",
                        }}></span>
                    <span className='relative z-10 transition-colors duration-300'>
                        Limon.group
                    </span>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
