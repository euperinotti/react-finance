"use client";

import {
  IWalletContext,
  WalletOperation,
} from "@/contexts/@types/WalletContextTypes";
import { WalletProvider } from "@/contexts/WalletContext";
import { useContext } from "react";

export const useWallet = () => {
  const { wallet, setWallet, history, setHistory } = useContext(
    WalletProvider
  ) as IWalletContext;

  const addEntry = (value: number, operation: WalletOperation) => {
    const newValue = wallet[operation] + value;

    setWallet({ ...wallet, [operation]: newValue });
    setHistory([...history, { date: "date", operation, value }]);

    return { wallet, history };
  };

  return {
    addEntry,
    wallet,
    history,
  };
};
