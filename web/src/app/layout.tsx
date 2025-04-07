import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeContext";
import ThemeWrapper from "@/components/ThemeWrapper";
import MainHeader from "@/components/MainHeader";
import MainFooter from "@/components/MainFooter";
import ScrollTopBtn from "@/components/ScrollTopBtn";
import "@/styles/globals.scss";

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
      <ThemeProvider>
        <ThemeWrapper>
          <body>
            <MainHeader />
            {children}
            <MainFooter />
            <ScrollTopBtn />
          </body>
        </ThemeWrapper>
      </ThemeProvider>
    </html>
  );
}
