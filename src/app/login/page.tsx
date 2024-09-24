"use client"

import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { useAuth } from "@/hooks/useAuth";
import { FormEvent, useState } from "react";

export default function Login() {
  const { signIn } = useAuth();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: FormEvent<any>) => {
    e.preventDefault();
    signIn({ email: form.email, password: form.password });
  };

  return (
    <div className="w-full h-full flex flex-col items-start justify-start gap-8">
      <Navbar />
      <main className="w-full flex flex-1 flex-col items-center justify-center gap-6 p-6">
        <div className="w-full flex flex-col items-start justify-center gap-12 max-w-safe-viewport">
          <h1 className="text-6xl font-bold text-center text-slate-900">
            Login
          </h1>
          <div className="w-full flex items-start justify-center gap-4 max-w-[400px]">
            <form className="w-full flex flex-col items-start justify-center gap-4 m-0">
              <input
                className="w-full p-3 border-2 border-slate-300 rounded-md"
                type="email"
                placeholder="E-mail"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                value={form.email}
              />
              <input
                className="w-full p-3 border-2 border-slate-300 rounded-md"
                type="password"
                placeholder="Password"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                value={form.password}
              />
              <Button
                type="submit"
                label="Sign in"
                styleType="default"
                onClick={handleSubmit}
                className="w-full p-3 bg-blue-600 rounded-md text-white font-bold"
              />
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
