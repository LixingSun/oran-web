import { Inter } from "next/font/google";
import { getLocale } from '@/i18n/server';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ORan Zone",
  description: "ORan's personal website",
};

export default function RootLayout({ children }) {
  const locale = getLocale();

  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
