import initTranslations from "@/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import Header from "@/components/Header" ;
import Footer from "@/components/Footer";
import TopSection from "@/components/TopSection";
import KeywordsSection from "@/components/KeywordsSection";
import ExperienceSection from "@/components/ExperienceSection";

const i18nNamespaces = ["home"];

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

        <Footer />
      </main>
    </TranslationsProvider>
  );
}
