import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { VisitorTracker } from "@/VisitorTracker";
import VisitorCounterDisplay from "@/components/VisitorCounterDisplay";

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
    <html
      lang="pt-BR"
      className={`${GeistSans.variable} h-full snap-y snap-mandatory overflow-y-scroll scroll-smooth`}
    >
      <body
        className={`${GeistSans.className} min-h-full bg-black text-white antialiased`}
      >
        <VisitorTracker />
        <VisitorCounterDisplay />
        {children}
      </body>
    </html>
  );
}
