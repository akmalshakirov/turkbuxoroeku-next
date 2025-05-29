import styles from "./ScrollHorizontal.module.css";

interface IScrollHorizontalProps {
    children: React.ReactNode;
    reverse?: boolean;
    duration?: number;
    from?: string | number;
    to?: string | number;
    className?: string;
}

export default function ScrollHorizontal({
    children,
    reverse,
    duration = 60,
    from = 0,
    to = "-100%",
    className = "",
}: IScrollHorizontalProps) {
    return (
        <div
            className={`flex p-2.5 justify-center w-full overflow-hidden relative group ${className}`}>
            {Array(4)
                .fill("")
                .map((index) => {
                    return (
                        <div
                            style={{ animationDuration: `${duration}s` }}
                            className={`${
                                reverse
                                    ? `${styles["animation-swipe-reverse"]}`
                                    : `${styles["animation-swipe"]}`
                            } flex group-hover:[animation-play-state:paused]!`}
                            key={index + Math.random() * 1000}>
                            {children}
                        </div>
                    );
                })}
        </div>
    );
}
