import { AuthProvider } from "@/contexts/AuthContext";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "React finance",
  description: "Login",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body
          className={`${inter.className} antialiased w-full min-h-vh flex flex-col items-start justify-start`}
        >
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
