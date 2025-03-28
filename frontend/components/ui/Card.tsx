import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
}

const Card = ({ children, className = "" }: CardProps) => {
    return (
        <div
            className={`bg-slate-900 border border-slate-800 rounded-lg shadow-md p-4 ${className}`}
        >
            {children}
        </div>
    );
};

const CardHeader = ({ children, className = "" }: CardProps) => {
    return <div className={`mb-2 ${className}`}>{children}</div>;
};

const CardTitle = ({ children, className = "" }: CardProps) => {
    return (
        <h2 className={`text-white text-lg font-semibold ${className}`}>
            {children}
        </h2>
    );
};

const CardDescription = ({ children, className = "" }: CardProps) => {
    return <p className={`text-slate-400 text-sm ${className}`}>{children}</p>;
};

const CardContent = ({ children, className = "" }: CardProps) => {
    return <div className={className}>{children}</div>;
};

export { Card, CardHeader, CardTitle, CardDescription, CardContent };
