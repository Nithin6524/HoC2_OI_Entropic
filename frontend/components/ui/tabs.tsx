import { ReactNode } from "react";

interface TabsProps {
    children: ReactNode;
    defaultValue: string;
    className?: string;
}

interface TabsContentProps {
    children: ReactNode;
    value: string;
    className?: string;
}

interface TabsListProps {
    children: ReactNode;
    className?: string;
}

interface TabsTriggerProps {
    children: ReactNode;
    value: string;
    className?: string;
}

export const Tabs = ({ children, className = "" }: TabsProps) => {
    return <div className={className}>{children}</div>;
};

export const TabsContent = ({
    children,
    className = "",
}: TabsContentProps) => {
    return <div className={className}>{children}</div>;
};

export const TabsList = ({ children, className = "" }: TabsListProps) => {
    return <div className={className}>{children}</div>;
};

export const TabsTrigger = ({
    children,
    
    className = "",
}: TabsTriggerProps) => {
    return <button className={className}>{children}</button>;
};
