"use client";

import { createContext, useEffect, useState } from "react";
import {
  IWalletContext,
  IWalletEntry,
  WalletContextProps,
} from "./@types/WalletContextTypes";

export const WalletProvider = createContext<IWalletContext | null>(null);

export const WalletContext = ({ children }: WalletContextProps) => {
  const [wallet, setWallet] = useState({
    income: 0,
    outcome: 0,
    balance: 0,
  });

  const [history, setHistory] = useState<IWalletEntry[] | []>([]);

  useEffect(() => {
    const temp = {
      income: 0,
      outcome: 0,
      balance: 0,
    }

    for (const item of history) {
      temp[item.operation] = temp[item.operation] + item.value;
    }

    setWallet({ ...temp, balance: temp.income - temp.outcome });
  }, [history]);

  return (
    <WalletProvider.Provider value={{ wallet, setWallet, history, setHistory }}>
      {children}
    </WalletProvider.Provider>
  );
};
