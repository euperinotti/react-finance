import { AccountBalanceCardProps, AccountBalanceType } from "./types";

export const AccountBalanceCard = ({
  type,
  value,
  ...rest
}: AccountBalanceCardProps) => {
  const { icon: Icon, color, bgColor, title } = AccountBalanceType[type];
  return (
    <div
      className="w-full p-5 bg-gray-50 rounded-md border border-slate-100 flex flex-col gap-1"
      {...rest}
    >
      <div className="w-full flex items-center justify-between">
        <h2 className="text-lg text-slate-500">{title}</h2>
        <div className={`p-2 rounded-full ${bgColor} ${color} w-fit`}>
          <Icon className="w-5"/>
        </div>
      </div>
      <h1 className="text-4xl font-bold text-slate-900">
        {value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
      </h1>
    </div>
  );
};
