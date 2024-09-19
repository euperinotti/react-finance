import { ProfileCard } from "@/components/Cards/ProfileCard";
import { Footer } from "@/components/Footer";

export default function About() {
  return (
    <div className="w-full h-full flex flex-col items-start justify-center p-6 gap-12 max-w-safe-viewport">
      <h1 className="text-6xl font-bold text-center text-slate-900">
        About
      </h1>
      <main className="w-full flex flex-col items-center justify-center gap-6">
        <div className="w-full flex items-start justify-center gap-4 max-w-safe-viewport">
          <img
            className="w-64 h-64 rounded-full object-cover border-2 border-slate-300"
            src="https://github.com/euperinotti.png"
            alt="Profile picture"
          />
          <ProfileCard />
        </div>
      </main>

      <Footer />
    </div>
  );
}
