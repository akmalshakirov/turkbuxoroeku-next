import Image from "next/image";
import { useEffect, useState } from "react";
import FirstImg from "../../images/home-page-1.jpg";
import SecondImg from "../../images/home-page-2.jpg";
import Button from "./Button";
import Modal from "./Modal";
import PhoneInput from "./TelNumberInput";

const ImageSlider = () => {
    const [IsModalVisible, setIsModalVisible] = useState(false);
    const imageGroups = [
        [FirstImg, FirstImg],
        [SecondImg, SecondImg],
    ];
    const [formData, setFormData] = useState({
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

        setIsModalVisible(false);

        setFormData({ name: "", telnum: "", message: "" });
    };

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false);

            setTimeout(() => {
                setCurrentImageIndex(
                    (prevIndex) => (prevIndex + 1) % imageGroups.length
                );
                setIsVisible(true);
            }, 222);
        }, 9999);

        return () => clearInterval(interval);
    }, [imageGroups.length]);

    return (
        <div className='relative max-lg:-left-[12%] -left-[3%] flex w-[50vw] h-screen justify-between'>
            <div
                className='relative w-full h-full overflow-hidden'
                style={{
                    transition: "opacity 0.5s ease-in-out",
                    opacity: isVisible ? 1 : 1,
                }}>
                <Image
                    src={imageGroups[currentImageIndex][0]}
                    alt='Main image'
                    layout='fill'
                    objectFit='cover'
                    priority
                />

                <div className='absolute inset-0 flex flex-col justify-center p-10 bg-gradient-to-r from-purple-900/70 to-transparent text-white'>
                    <h1 className='text-4xl font-bold mb-4'>
                        Дом планирования семьи
                    </h1>
                    <p className='text-xl max-w-md'>
                        Преодоление бесплодия – ключевое направление
                        медицинского центра в Ташкенте. Современные
                        репродуктивные технологии, передовое оснащение и
                        отличные специалисты
                    </p>
                    <Button
                        className='mt-6 bg-white text-purple-800 px-6 py-2 rounded-md w-fit hover:bg-purple-100 transition-colors'
                        onClick={() => setIsModalVisible(true)}>
                        Записаться
                    </Button>
                </div>
            </div>

            <div className='absolute left-full top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
                <div
                    className='relative w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-lg'
                    style={{
                        transition: "opacity 0.5s ease-in-out",
                        opacity: isVisible ? 1 : 0,
                    }}>
                    <Image
                        src={imageGroups[currentImageIndex][1]}
                        alt='Circle image'
                        layout='fill'
                        objectFit='cover'
                    />
                </div>
            </div>
            <Modal
                isOpen={IsModalVisible}
                onClose={() => setIsModalVisible(false)}
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
                        <label htmlFor='select' className='text-[#bf0059]'>
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
                                Интрацитоплазматическая инъекция сперматозоидов
                                (ИКСИ)
                            </option>
                            <option value='Консультации по репродукции и лечению бесплодия'>
                                Консультации по репродукции и лечению бесплодия
                            </option>
                            <option value='Репродуктивная хирургия'>
                                Репродуктивная хирургия
                            </option>
                            <option value='Генетика'>Генетика</option>
                            <option value='Криоконсервация'>
                                Криоконсервация
                            </option>
                            <option value='Стимуляция овуляции'>
                                Стимуляция овуляции
                            </option>
                            <option value='Обследование'>Обследование</option>
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
        </div>
    );
};

export default ImageSlider;
