"use client";
import { Button } from "@/components/Button";
import { AccountBalanceCard } from "@/components/Cards/AccountBalanceCard";
import { Dialog } from "@/components/Dialog";
import { NewEntryForm } from "@/components/Dialog/Forms/NewEntry";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Table } from "@/components/Table";
import { IWalletEntry } from "@/contexts/@types/WalletContextTypes";
import { useWallet } from "@/hooks/useWallet";
import { useRef, useState } from "react";

export default function Dashboard() {
  const { wallet, history, deleteEntry } = useWallet();
  const [currentEntry, setCurrentEntry] = useState<IWalletEntry | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleNewEntry = () => {
    dialogRef?.current?.showModal();
  };

  const handleUpdateEntry = (id: string) => {
    const entry = history.find((e) => e.id == id);
    setCurrentEntry(entry as IWalletEntry);
    handleNewEntry()
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Dialog ref={dialogRef}>
        <NewEntryForm onClose={() => dialogRef?.current?.close()} entry={currentEntry} />
      </Dialog>
      <Header />
      <main className="w-full flex flex-1 flex-col items-center justify-center gap-6 -mt-6">
        <div className="w-full flex flex-col items-center justify-center gap-4 max-w-safe-viewport">
          <div className="w-full flex items-center justify-center gap-3">
            <AccountBalanceCard type="income" value={wallet.income} />
            <AccountBalanceCard type="outcome" value={wallet.outcome} />
            <AccountBalanceCard type="balance" value={wallet.balance} />
          </div>
          <Button
            label="New transaction"
            icon="plus"
            iconClassNames="w-6 h-6"
            styleType="default"
            className="self-end"
            onClick={handleNewEntry}
          />
        </div>
      </main>
      <section className="w-full flex flex-1 flex-col items-center justify-center gap-6 py-12 mb-12 min-h-80">
        <div className="w-full flex flex-col items-center justify-center gap-4 max-w-safe-viewport">
          <Table
            columns={["description", "value", "date", "operation", "category"]}
            data={[...history].reverse()}
            title="History"
            onUpdateRow={handleUpdateEntry}
            onDeleteRow={deleteEntry}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
