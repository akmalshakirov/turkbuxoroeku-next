"use client";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import SlidingImages from "@/components/ui/SlidingImages";
import PhoneInput from "@/components/ui/TelNumberInput";
import TotalInfoCards from "@/components/ui/TotalInfoCards";
import { useState } from "react";
import "./app.css";
import ServicesSection from "./services/ServicesSection";
import AboutSection from "./about/AboutSection";

const Home = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
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

    return (
        <div className='home-bg-wrapper w-screen container mx-auto'>
            <div className='h-screen flex items-center max-md:justify-start justify-between'>
                <SlidingImages />
                <div className='flex items-center scroll-px-10 mt-[70px]'>
                    <TotalInfoCards />
                </div>
            </div>
            <Modal
                isOpen={isModalVisible}
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
                            name='wtf'
                            type='submit'
                            variant='primary'
                            size='sm'
                            className='py-3'>
                            Отправлять
                        </Button>
                    </div>
                </form>
            </Modal>
            <ServicesSection />
            <AboutSection />
        </div>
    );
};

export default Home;
