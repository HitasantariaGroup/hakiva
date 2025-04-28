import type React from "react";
import "@/app/globals.css";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ClientOnly } from "@/components/clientOnly";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Hakiva - Pendaftaran Merek & HAKI",
  description:
    "Lindungi brand Anda dengan pendaftaran merek resmi. Layanan cepat, murah, dan profesional.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={poppins.className}>
        <ClientOnly>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ClientOnly>
      </body>
    </html>
  );
}
