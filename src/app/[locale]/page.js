import HomeContent from "@/components/HomeContent";
import { i18nConfig } from "@/i18n.config";

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default function LocalizedHome({ params: { locale } }) {
  return (
    <HomeContent locale={locale} />
  );
}
