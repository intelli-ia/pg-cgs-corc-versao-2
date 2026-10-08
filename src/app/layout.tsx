import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { merriweather } from "@/lib/fonts";
import { HublaTracking } from "@/components/HublaTracking";
import "./globals.css";

const GTM_ID = "GTM-PVDMN63X";

const GTM_SCRIPT = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`;

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
        <Script
          id="gtm"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: GTM_SCRIPT }}
        />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <HublaTracking />
      </body>
    </html>
  );
}
