interface IAnimatedPorps {
    isActive: boolean;
}

const AnimatedIcon = ({ isActive }: IAnimatedPorps) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='w-6 h-6 transition-transform duration-200'
            style={{ transform: isActive ? "rotate(180deg)" : "rotate(0deg)" }}>
            {isActive ? (
                <>
                    <line x1='18' y1='6' x2='6' y2='18'></line>
                    <line x1='6' y1='6' x2='18' y2='18'></line>
                </>
            ) : (
                <path d='M6 9l6 6 6-6' />
            )}
        </svg>
    );
};

export default AnimatedIcon;
