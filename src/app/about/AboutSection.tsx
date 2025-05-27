import Button from "@/components/ui/Button";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AboutVideoSocialM from "../../images/homeAboutSocialM.png";
import AboutVideoImg from "../../images/homeAboutVideo.png";

const AboutSection = () => {
    return (
        <div className='mt-10'>
            <div className='text-center'>
                <h2 className='font-extralight text-[#6c2a46]'>О НАС</h2>
                <h1 className='font-bold text-3xl text-[#6c2a46]'>
                    Турецкий Бухарский Центр Эку
                </h1>
            </div>
            <div className='grid grid-cols-2'>
                <div>
                    <div className='mt-7'>
                        <p>
                            Национальный центр репродукции «ЭКО-Содействие»
                            открыл свои двери для пациентов в 2011 году в
                            Москве. Одним из главных преимуществ центра стала
                            популярная «Национальная программа ЭКО», где в
                            случае не результативно проведенного первого
                            протокола ЭКО пациент гарантированно может сделать
                            вторую, и при необходимости, третью попытку ЭКО без
                            доплаты за протокол.
                        </p>
                        <Link href='/about' aria-label='/about'>
                            <Button
                                aria-label="it's button"
                                variant='primary'
                                className='text-white mt-5'>
                                Подробнее o нас
                            </Button>
                        </Link>
                    </div>
                    <div className='flex items-center gap-5 mt-5'>
                        <div>
                            <p className='font-bold text-2xl text-[#921a58]'>
                                8
                            </p>
                            <span className='w-full h-2 rounded-full bg-gradient-to-r from-[#CEA88B] via-[#E4CDBB] to-[#FBF3EC] block my-1.5'></span>
                            <p>программ ЭКО</p>
                        </div>
                        <div>
                            <p className='font-bold text-2xl text-[#921a58]'>
                                {">"}62,7%
                            </p>
                            <span className='w-full h-2 rounded-full bg-gradient-to-r from-[#CEA88B] via-[#E4CDBB] to-[#FBF3EC] block my-1.5'></span>
                            <p>результативность ЭКО</p>
                        </div>
                        <div>
                            <p className='font-bold text-2xl text-[#921a58]'>
                                {">"}10
                            </p>
                            <span className='w-full h-2 rounded-full bg-gradient-to-r from-[#CEA88B] via-[#E4CDBB] to-[#FBF3EC] block my-1.5'></span>
                            <p>высококлассных специалистов</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-2.5 mt-6'>
                    <div>
                        <div className='relative'>
                            <Image
                                src={AboutVideoImg}
                                alt='about video image'
                                className='w-full h-full object-cover rounded-lg'
                            />
                            <Link
                                aria-label='/about'
                                target='_blank'
                                href='https://www.youtube.com/embed/7PwW2TJVb_0?si=grls8SsftWlDn9gy'
                                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#c63d7d] rounded-lg p-2'>
                                <Play
                                    size={25}
                                    className='text-white'
                                    fill='#ffffff'
                                />
                            </Link>
                        </div>
                        <div className='flex mt-2.5 flex-col gap-[50px] items-center py-5 px-9 rounded-lg shadow-2xl bg-[var(--primary-color)]/60'>
                            <h1>СВЯЗАТЬСЯ C НАМИ</h1>
                            <Button
                                name='Записаться'
                                aria-label="it's button"
                                className='text-white'>
                                Записаться
                            </Button>
                        </div>
                    </div>
                    <div className='my-auto h-[92%] mt-0'>
                        <Image
                            src={AboutVideoSocialM}
                            alt='wtf'
                            className='rounded-lg h-full object-cover'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
