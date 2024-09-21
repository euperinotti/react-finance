import Image from "next/image";
import { FooterList } from "./List";
import { FooterListItem } from "./List/Item";

export const Footer = () => {
  return (
    <footer className="w-full h-auto bg-slate-50 flex gap-2 flex-wrap items-center justify-center p-12">
      <div className="w-full h-full flex justify-between items-center max-w-safe-viewport">
        <FooterList title="Application">
          <FooterListItem label="Home" link="/home" />
          <FooterListItem label="About" link="/about" />
          <FooterListItem label="Dashboard" link="/dashboard" />
        </FooterList>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/euperinotti/react-finance"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/github-mark.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Source code →
        </a>
      </div>
    </footer>
  );
};
