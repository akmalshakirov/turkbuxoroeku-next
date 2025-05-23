interface IInfoCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    className?: string;
}

const InfoCard: React.FC<IInfoCardProps> = ({
    icon,
    title,
    description,
    className,
}) => {
    return (
        <div
            className={`flex items-center bg-[#fae6ef] rounded-lg p-6 mb-4 transition-all hover:shadow-md ${className}`}>
            <div className='text-pink-600 mr-6 w-[64px] h-[64px]'>{icon}</div>
            <div>
                <h3 className='text-pink-600 text-2xl font-bold'>{title}</h3>
                <p className='text-gray-700'>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;
