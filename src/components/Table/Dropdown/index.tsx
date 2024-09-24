import { HTMLAttributes, LiHTMLAttributes } from "react";

export interface TableDropdownProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  options: TableDropdownItemProps[];
  isOpen: boolean;
}

export interface TableDropdownItemProps
  extends LiHTMLAttributes<HTMLLIElement> {
  label: string;
  link?: string;
}

export const TableDropdown = ({
  title,
  options,
  isOpen,
  ...rest
}: TableDropdownProps) => {
  return (
    <div
      className={`${
        !isOpen ? "hidden" : "absolute"
      } z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 right-0`}
      {...rest}
    >
      <div className="px-4 py-3 text-sm text-gray-900 font-semibold">
        <div>{title}</div>
      </div>
      <ul className="py-2 text-sm text-gray-700">
        {options.map((option, index) => (
          <li key={index} onClick={option.onClick} {...option}>
            <a
              href={option.link}
              className="block px-4 py-2 hover:bg-gray-100"
            >
              {option.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
