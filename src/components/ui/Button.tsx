import { ButtonHTMLAttributes, ReactNode } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "white";
    size?: "sm" | "md" | "lg";
    name?: string;
    disabled?: boolean;
}

const Button = ({
    children,
    variant = "primary",
    size = "md",
    className = "",
    name = "",
    disabled = false,
    ...props
}: IButton) => {
    const baseStyle = "rounded-[10px] outline-none max-w-max";

    const variantStyles = {
        primary:
            "bg-[#E5006A] hover:bg-[#e5006bb6] font-bold transition-colors",
        white: "bg-white text-[#b62765] font-bold hover:bg-white/77 transition-colors",
    };

    const sizeStyles = {
        sm: "py-1 px-3 text-sm",
        md: "py-[7px] px-[7px] text-base",
        lg: "py-3 px-6 text-lg",
    };

    const classes = `${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    return (
        <button className={classes} {...props} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
