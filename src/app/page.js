import HomeContent from "@/components/HomeContent";
import { i18nConfig } from "@/i18n.config";

export default function Home() {
  return (
    <HomeContent locale={i18nConfig.defaultLocale} />
  );
}
