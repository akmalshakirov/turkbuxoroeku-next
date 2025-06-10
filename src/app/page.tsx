"use client";
import SlidingImages from "@/components/ui/SlidingImages";
import TotalInfoCards from "@/components/ui/TotalInfoCards";
import AboutSection from "./about/AboutSection";
import "./app.css";
import DoctorsSection from "./doctors/DoctorsSection";
import NewsSection from "./news/NewsSection";
import ReviewsSection from "./reviews/ReviewsSection";
import ServicesSection from "./services/ServicesSection";
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation("common");
    return (
        <div className='home-bg-wrapper max-w-[var(--width-container)] mx-auto'>
            <div className='h-screen flex items-center max-md:justify-start justify-between'>
                <SlidingImages />
                <div className='flex items-center scroll-px-10 mt-[70px]'>
                    <TotalInfoCards />
                </div>
            </div>
            <ServicesSection />
            <AboutSection />
            <DoctorsSection />
            <ReviewsSection />
            <NewsSection />
        </div>
    );
};

export default Home;
