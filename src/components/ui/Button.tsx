import { ButtonHTMLAttributes, ReactNode } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary";
    size?: "sm" | "md" | "lg";
}

const Button = ({
    children,
    variant = "primary",
    size = "md",
    className = "",
    ...props
}: IButton) => {
    const baseStyle = "font-medium rounded-[10px] outline-none";

    const variantStyles = {
        primary: "bg-[#E5006A] hover:bg-[#e5006bb6] transition-colors",
    };

    const sizeStyles = {
        sm: "py-1 px-3 text-sm",
        md: "py-[7px] px-[7px] text-base",
        lg: "py-3 px-6 text-lg",
    };

    const classes = `${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};

export default Button;
