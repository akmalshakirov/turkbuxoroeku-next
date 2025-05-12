import Image from "next/image";
import Link from "next/link";
import React from "react";
import Icon from "../../../public/icon.svg";

const Header = () => {
    return (
        <header className='bg-red-900 text-white  min-w-screen container'>
            <nav className='container mx-auto flex justify-between items-center p-4'>
                <Link href='/' className='text-xl font-bold'>
                    <Image src={Icon} alt='Icon' />
                </Link>
                <div className='flex gap-4'>
                    <Link
                        href='/services'
                        className='hover:text-blue-300 transition-colors'>
                        Xizmatlar
                    </Link>
                    <Link
                        href='/about'
                        className='hover:text-blue-300 transition-colors'>
                        Biz haqimizda
                    </Link>
                    <Link
                        href='/news'
                        className='hover:text-blue-300 transition-colors'>
                        Yangiliklar
                    </Link>
                    <Link
                        href='/contacts'
                        className='hover:text-blue-300 transition-colors'>
                        Kontaktlar
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
