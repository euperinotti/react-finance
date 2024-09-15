import { HTMLAttributes } from "react";
import { Icons } from "../icons/types";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: keyof typeof Icons;
  iconClassNames?: string;
  type: keyof typeof ButtonType;
}

export const ButtonType = {
  default:
    "bg-blue-700 border border-blue-600 text-white py-3 px-6 rounded hover:bg-blue-800 active:bg-blue-600",
  danger: "bg-red-700 border border-red-600 text-white py-3 px-6 rounded",
};

export const Button = ({
  label,
  icon,
  iconClassNames,
  type = "default",
  ...rest
}: ButtonProps) => {
  const Icon = Icons[icon!];

  return (
    <button
      {...rest}
      className={`${ButtonType[type]} text-lg font-bold flex items-center gap-4 ${rest.className}`}
    >
      {label}
      {icon && <Icon className={`${iconClassNames}`} />}
    </button>
  );
};
