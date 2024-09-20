"use client";

import {
  IWalletContext,
  IWalletEntry,
  WalletOperation,
} from "@/contexts/@types/WalletContextTypes";
import { WalletProvider } from "@/contexts/WalletContext";
import { randomUUID } from "crypto";
import { useContext } from "react";

export const useWallet = () => {
  const { wallet, setWallet, history, setHistory } = useContext(
    WalletProvider
  ) as IWalletContext;

  const addEntry = (
    value: number,
    operation: WalletOperation,
    description: string,
    category: string
  ) => {
    const newValue = wallet[operation] + value;

    setWallet({ ...wallet, [operation]: newValue });
    setHistory([
      ...history,
      {
        id: randomUUID(),
        date: new Date(),
        operation,
        value,
        description,
        category,
      },
    ]);

    return { wallet, history };
  };

  const deleteEntry = (entryId: string) => {
    const newHistory = history.filter((entry) => entry.id !== entryId);
    const newBalance = wallet.income - wallet.outcome;

    setWallet({ ...wallet, balance: newBalance });
    setHistory(newHistory);
  };

  const updateEntry = (entry: IWalletEntry) => {
    const updatedHistory = history.map((entryItem) =>
      entryItem.id === entry.id ? entry : entryItem
    );

    setHistory(updatedHistory);
  };

  return {
    addEntry,
    deleteEntry,
    updateEntry,
    wallet,
    history,
  };
};
