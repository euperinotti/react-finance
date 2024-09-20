import { ReactNode } from "react";

export interface IWallet {
  income: number;
  outcome: number;
  balance: number;
}

export interface IWalletEntry {
  id: string;
  value: number;
  date: Date;
  operation: WalletOperation;
  description?: string;
  category?: string;
}

export type WalletOperation = "income" | "outcome";

export interface IWalletContext {
  wallet: IWallet;
  history: IWalletEntry[] | [];
  setHistory: (value: IWalletEntry[] | []) => void;
  setWallet: (value: IWallet) => void;
}

export interface WalletContextProps {
  children: ReactNode;
}
