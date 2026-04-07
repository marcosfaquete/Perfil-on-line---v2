import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { VisitorTracker } from "@/VisitorTracker";
import VisitorCounterDisplay from "@/components/VisitorCounterDisplay";
import SmoothScrolling from "@/components/SmoothScrolling";

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: "Marcos Faquete - Desenvolvedor Front-End",
  description: "Crio e codifico coisas simples e bonitas, e amo o que faço.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={GeistSans.variable}>
      <body
        className={`${GeistSans.className} min-h-full bg-black text-white antialiased`}
      >
        <SmoothScrolling />
        <VisitorTracker />
        <VisitorCounterDisplay />
        {children}
      </body>
    </html>
  );
}
