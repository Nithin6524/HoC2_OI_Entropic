import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

export const Button = ({
    children,
    onClick,
    className = "",
    type = "button",
    disabled = false,
}: ButtonProps) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
