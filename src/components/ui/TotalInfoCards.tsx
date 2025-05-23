import { Icons } from "@/icons";
import InfoCard from "./InfoCard";

const TotalInfoCards: React.FC = () => {
    return (
        <div className='max-w-md space-y-4'>
            <InfoCard
                className='-translate-x-[50px] w-[112%] first-card'
                icon={<Icons.homeHeroOne />}
                title='20 лет'
                description='стаж работы экспертов клиники'
            />

            <InfoCard
                icon={<Icons.homeHeroTwo />}
                title='52 %'
                description='Наступления беременности'
            />

            <InfoCard
                icon={<Icons.homeHeroThree />}
                title='>5000'
                description='здоровых детей'
            />

            <InfoCard
                className='-translate-x-[50px] w-[112%]'
                icon={<Icons.homeHeroFour />}
                title='Менеджер'
                description='Персональный менеджер пациента'
            />
        </div>
    );
};

export default TotalInfoCards;
