import { ReactNode } from "react";

export interface IWallet {
  income: number;
  outcome: number;
  balance: number;
}

export interface IWalletHistory {
  value: number;
  date: string;
  operation: WalletOperation;
}

export type WalletOperation = "income" | "outcome";

export interface IWalletContext {
  wallet: IWallet;
  history: IWalletHistory[] | [];
  setHistory: (value: IWalletHistory[] | []) => void;
  setWallet: (value: IWallet) => void;
}

export interface WalletContextProps {
  children: ReactNode;
}
