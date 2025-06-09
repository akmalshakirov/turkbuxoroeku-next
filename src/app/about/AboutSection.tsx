import Button from "@/components/ui/Button";
import { Icons } from "@/icons";
import { LoaderCircle, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AboutVideoSocialM from "../../images/homeAboutSocialM.png";
import AboutVideoImg from "../../images/homeAboutVideo.png";
import Modal from "@/components/ui/Modal";
import PhoneInput from "@/components/ui/TelNumberInput";
import { useState } from "react";
import api from "@/services/api";
import { toast } from "react-toastify";

interface IFormDataProps {
    name: string;
    telnum: string;
    message: string;
    service: string;
}

const AboutSection = () => {
    const [formData, setFormData] = useState<IFormDataProps>({
        name: "",
        telnum: "",
        message: "",
        service: "",
    });
    const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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
            toast.success(message);
            setFormData({ name: "", telnum: "", message: "", service: "" });
        } catch (error: any) {
            setIsModalOpen(false);
            setFormData({ name: "", telnum: "", message: "", service: "" });
        } finally {
            setIsFormSubmitted(false);
        }
    };

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
                                aria-label='Подробнее o нас'
                                variant='primary'
                                className='text-white mt-5'
                                name='Подробнее o нас'>
                                Подробнее o нас
                            </Button>
                        </Link>
                    </div>
                    <div className='flex items-center gap-5 mt-5 w-full'>
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
                <div className='flex items-center gap-2.5 mt-6 ml-[100px]'>
                    <div>
                        <div className='relative'>
                            <Image
                                style={{ objectFit: "cover" }}
                                src={AboutVideoImg}
                                alt='about video image'
                                className='w-full h-full object-cover rounded-lg'
                            />
                            <Link
                                aria-label='/about'
                                target='_blank'
                                href='https://www.youtube.com/embed/7PwW2TJVb_0?si=grls8SsftWlDn9gy'
                                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#fa0075] rounded-lg p-2'>
                                <Play
                                    size={25}
                                    className='text-white'
                                    fill='#ffffff'
                                />
                            </Link>
                        </div>
                        <div className='relative flex mt-2.5 flex-col gap-[35px] pt-[20px] pl-[20px] pb-[20px] pr-10 rounded-lg shadow-lg border border-gray-300'>
                            <h1 className='text-2xl'>
                                СВЯЗАТЬСЯ <br /> C НАМИ
                            </h1>
                            <Button
                                name='Записаться'
                                aria-label='Записаться'
                                className='text-white'
                                onClick={() => setIsModalOpen(true)}>
                                Записаться
                            </Button>
                            <div className='absolute top-[40px] right-0 w-[90px] h-[90px] -z-1 opacity-20'>
                                <Icons.homeAboutCardIcon />
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
                                                    Искусственное оплодотворение
                                                    (ЭКО)
                                                </option>
                                                <option value='Интрацитоплазматическая инъекция сперматозоидов (ИКСИ)'>
                                                    Интрацитоплазматическая
                                                    инъекция сперматозоидов
                                                    (ИКСИ)
                                                </option>
                                                <option value='Консультации по репродукции и лечению бесплодия'>
                                                    Консультации по репродукции
                                                    и лечению бесплодия
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
                                                aria-label='Отправить'
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
                    </div>
                    <div className='my-auto h-full mt-0'>
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
