import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function Index() {
  return (
    <div className="w-full h-full flex flex-col items-start justify-start gap-8">
      <Navbar />
      <main className="w-full flex flex-1 flex-col items-center justify-center gap-6 p-6">
        <section className="w-full flex flex-col items-center justify-center gap-12 max-w-safe-viewport py-12">
          <h1 className="text-7xl font-extrabold text-center text-slate-900">
            The future of <br /> financial control
          </h1>
          <p>lorem ipsum</p>
        </section>
        <section className="w-full flex flex-col items-center justify-center gap-12 max-w-safe-viewport py-12">
          <h1 className="text-7xl font-extrabold text-center text-slate-900">
            The future of <br /> financial control
          </h1>
          <p>lorem ipsum</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
