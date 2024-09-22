import { ButtonHTMLAttributes } from "react";
import { ButtonType } from ".";
import { Icons } from "../icons/types";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: keyof typeof Icons;
  iconClassNames?: string;
  styleType: keyof typeof ButtonType;
}
