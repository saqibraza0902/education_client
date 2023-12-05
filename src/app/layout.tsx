import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/providers/ReduxProvider";
import ReactToastProvider from "@/providers/ToastProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sikkha Education",
  description: "Everything you learn here",
  icons: "/assets/logo_2.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <ReduxProvider>
          <ReactToastProvider>{children}</ReactToastProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
