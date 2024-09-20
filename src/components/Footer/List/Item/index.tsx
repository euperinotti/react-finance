import { FooterListItemProps } from "./types";


export const FooterListItem = ({ label, link }: FooterListItemProps) => {
  return (
    <li className="text-gray-400 hover:underline text-lg font-sans py-1">
      <a href={link}>{label}</a>
    </li>
  );
};
