import { HTMLAttributes } from "react";
import { ButtonType } from ".";
import { Icons } from "../icons/types";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: keyof typeof Icons;
  iconClassNames?: string;
  type: keyof typeof ButtonType;
}
