import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "React finance",
  description: "About the creator",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased w-full min-h-vh flex flex-col items-start justify-start`}>
        {children}
      </body>
    </html>
  );
}
