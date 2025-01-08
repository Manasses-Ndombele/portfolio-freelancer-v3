import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/components/MainHeader";
import MainFooter from "@/components/MainFooter";

export const metadata: Metadata = {
  title: "Manassés Ndombele | Desenvolvedor Freelancer",
  description: "Portfólio freelancer de Manassés Ndombele",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`antialiased`}>
        <MainHeader />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
