import React from "react";
import classNames from "classnames";

export interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
}

const getVariantStyles = (variant: string) => {
  return classNames({
    "bg-neutral-5 hover:bg-neutral-4 text-neutral-1": variant === "primary",
    "bg-neutral-1 hover:bg-neutral-2 text-neutral-5": variant === "secondary",
  });
};

const getSizeStyles = (size: string) => {
  return classNames({
    "px-2 py-1 text-sm": size === "sm",
    "px-3 py-1.5 text-md": size === "md",
    "px-4 py-2 text-lg": size === "lg",
  });
};

const Button: React.FC<ButtonProps> = ({
  text,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  ...props
}) => {
  const commonStyles =
    "appearance-none border-1 cursor-pointer font-bold inline-flex items-center justify-center leading-normal rounded-lg";
  const variantStyles = getVariantStyles(variant);
  const sizeStyles = getSizeStyles(size);

  return (
    <button
      className={`${commonStyles} ${variantStyles} ${sizeStyles} ${className}`}
      type="button"
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
