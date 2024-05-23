import initTranslations from "@/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import Header from "@/components/Header" ;
import Footer from "@/components/Footer";
import TopSection from "@/components/TopSection";
import KeywordsSection from "@/components/KeywordsSection";
import ExperienceSection from "@/components/ExperienceSection";
import LifeSection from "@/components/LifeSection";
import { NS_COMMON, NS_HOME } from "@/i18n.config";

const i18nNamespaces = [NS_COMMON, NS_HOME];

export default async function HomeContent({ locale }) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <main className="min-h-screen pt-32">
        <Header/>

        <TopSection />

        <KeywordsSection />

        <ExperienceSection />

        <LifeSection />

        <Footer />
      </main>
    </TranslationsProvider>
  );
}
