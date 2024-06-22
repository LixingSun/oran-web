import { i18nConfig, NS_DEMO, NS_COMMON } from "@/i18n.config";
import initTranslations from "@/i18n";
import TranslationsProvider from '@/components/TranslationsProvider';
import Header from "@/components/Header" ;
import Footer from "@/components/Footer";
import DemoCard from "@/components/DemoCard";
import demoData from "./data";

const i18nNamespaces = [NS_COMMON, NS_DEMO];

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default async function Demo({ params: { locale } }) {
  const {resources} = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <main className="min-h-screen pt-32 flex flex-col">
        <Header/>
        
        <div className="flex-1 p-6 lg:py-32 lg:px-[15%]">
          {demoData.map(({key, thumbnail, url}) => (
            <DemoCard key={key} localeKey={key} thumbnail={thumbnail} url={url} />
          ))}
        </div>

        <Footer />
      </main>
    </TranslationsProvider>
  );
}
