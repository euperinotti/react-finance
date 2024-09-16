import { DecreaseIcon } from "@/components/icons/DecreaseIcon";
import { IncreaseIcon } from "@/components/icons/IncreaseIcon";
import { WalletIcon } from "@/components/icons/WalletIcon";
import { HTMLAttributes } from "react";

export interface AccountBalanceCardProps
  extends HTMLAttributes<HTMLDivElement> {
  type: keyof typeof AccountBalanceType;
  value: number;
}

export const AccountBalanceType = {
  income: {
    icon: ({ ...rest }) => <IncreaseIcon {...rest} />,
    color: "text-green-500",
    bgColor: "bg-green-200",
    title: "Income",
  },
  outcome: {
    icon: ({ ...rest }) => <DecreaseIcon {...rest} />,
    color: "text-red-500",
    bgColor: "bg-red-200",
    title: "Outcome",
  },
  balance: {
    icon: ({ ...rest }) => <WalletIcon {...rest} />,
    color: "text-purple-500",
    bgColor: "bg-purple-200",
    title: "Balance",
  },
};
