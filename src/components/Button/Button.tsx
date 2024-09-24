import clsx from "clsx";
import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

interface ButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "tertiary" | "delete";
}

export const Button: FC<ButtonProps> = ({
  variant,
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "text-sm font-medium px-4 py-2 w-full rounded-lg transition-all ease-out duration-300 disabled:bg-gray-2 disabled:border-gray-7 disabled:text-gray-7",
        {
          "cursor-pointer": !props.disabled,
          "cursor-not-allowed": props.disabled,
        },
        {
          "bg-main-primary text-main-white hover:bg-main-secondary active:bg-blue-dark":
            variant === "primary",
          "bg-main-white text-main-primary border-main-primary border hover:bg-blue-light-7 active:border-none active:bg-blue-light-2 active:text-main-white":
            variant === "secondary",
          "bg-main-white text-main-primary border-dashed border border-main-primary hover:bg-blue-light-7 active:bg-blue-light-2 active:text-main-white active:border-none":
            variant === "tertiary",
          "bg-red-light-6 text-red-red hover:bg-red-light-4 hover:text-red-dark active:bg-red-light active:text-main-white":
            variant === "delete",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
