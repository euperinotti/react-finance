import { HamburgerMenuProps } from "./types";

export const HamburgerMenu = ({ ...rest }: HamburgerMenuProps) => {
  return (
    <button
      data-target="#navbar-default"
      data-toggle="collapse"
      type="button"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-leaf-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
      aria-controls="#navbar-default"
      aria-expanded="false"
      {...rest}
    >
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
        color="white"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
  );
};
