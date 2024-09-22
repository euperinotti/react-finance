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
    const newValue = wallet[operation] + value;
    const newEntry = {
      id: uuidv4(),
      date: new Date(),
      operation,
      value,
      description,
      category,
    };

    setWallet({ ...wallet, [operation]: newValue });
    setHistory([...history, newEntry]);

    return { wallet, history };
  };

  const deleteEntry = (entryId: string) => {
    const entry = history.find((entry) => entry.id === entryId);
    const newHistory = history.filter((entry) => entry.id !== entryId);

    setWallet({
      ...wallet,
      [entry!.operation]: wallet[entry!.operation] - entry!.value,
    });
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
