import { ProfileCardItemProps } from "./types";

export const ProfileCardItem = ({
  title,
  description,
  children,
}: ProfileCardItemProps) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-xl font-bold m-0">{title}</h3>
      <p className="text-slate-500 text-lg m-0">{description}</p>
      {children}
    </div>
  );
};
