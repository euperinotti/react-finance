"use client";

import {
  IWalletContext,
  IWalletEntry,
} from "@/contexts/@types/WalletContextTypes";
import { WalletProvider } from "@/contexts/WalletContext";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

export const useWallet = () => {
  const { wallet, setWallet, history, setHistory } = useContext(
    WalletProvider
  ) as IWalletContext;

  const addEntry = (entry: IWalletEntry) => {
    const { operation, value, description, category } = entry;
    const newEntry = {
      id: uuidv4(),
      date: new Date(),
      operation,
      value,
      description,
      category,
    };

    setHistory([...history, newEntry]);

    return { wallet, history };
  };

  const deleteEntry = (entryId: string) => {
    const newHistory = history.filter((entry) => entry.id !== entryId);

    setHistory(newHistory);
  };

  const updateEntry = (entry: IWalletEntry) => {
    const updatedHistory = history.map((item) => {
      if (item.id === entry.id) {
        item = { ...entry };
      }

      return item;
    });

    setHistory([...updatedHistory]);
  };

  return {
    addEntry,
    deleteEntry,
    updateEntry,
    wallet,
    history,
  };
};
