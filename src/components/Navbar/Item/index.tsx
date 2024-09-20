import { NavbarItemProps } from "./types";

const activeStyles = {
  active: "text-leaf-500",
  default: "text-slate-50",
};

export const NavbarItem = ({
  label,
  href,
  isActive,
  ...rest
}: NavbarItemProps) => {
  return (
    <li
      {...rest}
      className={`${
        isActive ? activeStyles.active : activeStyles.default
      } max-md:w-full ${rest.className}`}
    >
      <a
        href={href}
        className="text-sm hover:text-leaf-500 font-sans font-medium block py-2 px-6 text-white rounded  hover:bg-blue-500 md:border-0 max-md:w-full max-md:text-white"
      >
        {label}
      </a>
    </li>
  );
};
