import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { i18nConfig } from "@/i18n.config";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ORan Zone",
  description: "ORan's personal website",
};

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default function RootLayout({ children, params: { locale }}) {
  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
