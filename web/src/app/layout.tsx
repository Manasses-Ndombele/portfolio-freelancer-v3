import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeContext";
import { ProjectProvider } from "@/context/ProjectContext";
import { LoadingDataProvider } from "@/context/LoadingDataContext";
import ThemeWrapper from "@/components/ThemeWrapper";
import MainHeader from "@/components/MainHeader";
import MainFooter from "@/components/MainFooter";
import ScrollTopBtn from "@/components/ScrollTopBtn";
import LangWrapper from "@/components/LangWrapper";
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
      <LoadingDataProvider>
        <ThemeProvider>
          <ThemeWrapper>
            <body>
              <LangWrapper>
                <MainHeader />
                <ProjectProvider>{children}</ProjectProvider>
                <MainFooter />
              </LangWrapper>
              <ScrollTopBtn />
            </body>
          </ThemeWrapper>
        </ThemeProvider>
      </LoadingDataProvider>
    </html>
  );
}
