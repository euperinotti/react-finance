import { Button } from "@/components/Button";
import { AccountBalanceCard } from "@/components/Cards/AccountBalanceCard";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* <Header /> */}
      <main className="w-full flex flex-col items-center justify-center gap-6">
        <div className="w-full flex flex-col items-center justify-center gap-4 max-w-safe-viewport">
          <Button
            label="New transaction"
            icon="plus"
            iconClassNames="w-6 h-6"
            type="default"
            className="self-end"
          />
          <div className="w-full flex items-center justify-center gap-6">
            <AccountBalanceCard type="income" value={1000} />
            <AccountBalanceCard type="outcome" value={1000} />
            <AccountBalanceCard type="balance" value={1000} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
