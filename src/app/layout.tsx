import type { Metadata, Viewport } from "next";
import { merriweather } from "@/lib/fonts";
import { HublaTracking } from "@/components/HublaTracking";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grandes Síndromes: O Raciocínio no Quadro | CORC",
  description:
    "Entenda as grandes síndromes da medicina sem decoreba: aulas e discussões feitas diretamente no quadro pelo Dr. Carlos Antonio Moura.",
};

export const viewport: Viewport = {
  themeColor: "#151314",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${merriweather.variable} h-full antialiased`}>
      <body className="min-h-full bg-cgs-bg font-serif text-cgs-text">
        {children}
        <HublaTracking />
      </body>
    </html>
  );
}
