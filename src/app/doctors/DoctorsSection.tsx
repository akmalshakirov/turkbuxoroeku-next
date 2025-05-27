import { ArrowRight } from "lucide-react";
import Link from "next/link";

const DoctorsSection = () => {
    return (
        <div>
            <div>
                <div className='flex items-center justify-between'>
                    <h1 className='text-3xl font-bold'>Врачи</h1>
                    <Link
                        href='/doctors'
                        className='group flex items-center no-underline! hover:text-[var(--primary-color)]'
                        aria-label='/vrachi'>
                        Все врачи
                        <ArrowRight
                            className='transition-transform duration-100 ease-in-out inline group-hover:translate-x-1 ml-1'
                            size={18}
                        />
                    </Link>
                </div>
                {/* cards */}
                <div>
                    {/* card */}
                    <div>
                        <div>{"img"}</div>
                        <p>doctor name && doctor type</p>
                        <p>full name of doctor</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorsSection;
