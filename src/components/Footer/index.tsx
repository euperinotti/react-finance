import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
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
    </footer>
  );
};
