import { ComponentPropsWithoutRef } from "react";
import { IconType } from "react-icons";
//定义按钮图标的样式
//图标 按钮风格
//default 带背景不带边框
type ButtonProps = {
    icon?: IconType;
    variant?: "default" | "outline" | "text" | "primary";
} & ComponentPropsWithoutRef<"button">;

export default function Button({
    children,
    className = "",
    icon: Icon,
    variant = "default",
    ...props
}: ButtonProps) {
    return (
        <button
            className={`transition-colors inline-flex items-center min-w-[38px] min-h-[38px] rounded px-3 py-1.5 font-sm
            ${
                variant === "default"
                    ? "text-black dark:text-fuchsia-300 bg-fuchsia-50 hover:bg-fuchsia-200 dark:bg-fuchsia-700 dark:hover:bg-fuchsia-900"
                    : variant === "outline"
                    ? "border border-gray-300 dark:border-fuchsia-600 text-black dark:text-fuchsia-300 bg-fuchsia-50 hover:bg-fuchsia-200 dark:bg-gray-800 dark:hover:bg-fuchsia-700"
                    : variant === "primary"
                    ? "bg-primary-500 text-white hover:bg-primary-600 hover:text-white shadow-sm disabled:bg-transparent disabled:text-gray-300 dark:disabled:text-gray-600"
                    : "text-black dark:text-grafuchsiay-300 bg-transparent hover:bg-fuchsia-200 dark:hover:bg-fuchsia-700"
            }
            ${className}`}
            {...props}
        >
            {Icon && (
                <Icon className={`text-lg ${children ? "mr-1" : ""}`}></Icon>
            )}
            {children}
        </button>
    );
}
