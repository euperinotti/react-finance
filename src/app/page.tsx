"use client";
import { Button } from "@/components/Button";
import { AccountBalanceCard } from "@/components/Cards/AccountBalanceCard";
import { Dialog } from "@/components/Dialog";
import { NewEntryForm } from "@/components/Dialog/Forms/NewEntry";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Table } from "@/components/Table";
import { useWallet } from "@/hooks/useWallet";

export default function Home() {
  const { addEntry, wallet, history } = useWallet();

  const handleNewEntry = () => {
    const response = addEntry(500, "income");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Dialog>
        <NewEntryForm />
      </Dialog>
      <Header />
      <main className="w-full flex flex-col items-center justify-center gap-6 -mt-6">
        <div className="w-full flex flex-col items-center justify-center gap-4 max-w-safe-viewport">
          <div className="w-full flex items-center justify-center gap-3">
            <AccountBalanceCard type="income" value={wallet.income} />
            <AccountBalanceCard type="outcome" value={wallet.outcome} />
            <AccountBalanceCard type="balance" value={wallet.balance} />
          </div>
        </div>
      </main>
      <Button
        label="New transaction"
        icon="plus"
        iconClassNames="w-6 h-6"
        type="default"
        className="self-end"
        onClick={() => handleNewEntry()}
      />
      <section className="w-full flex flex-col items-center justify-center gap-6 py-12">
        <div className="w-full flex flex-col items-center justify-center gap-4 max-w-safe-viewport">
          <Table
            columns={["value", "date", "operation"]}
            data={history}
            title="History"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
