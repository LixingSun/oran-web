import Header from "@/components/Header" ;
import Footer from "@/components/Footer";
import { createTranslation } from '@/i18n/server';
import TopSection from "@/components/TopSection";
import KeywordsSection from "@/components/KeywordsSection";

export default async function Home() {
  const { t } = await createTranslation("home");
  
  return (
    <main className="min-h-screen pt-32">
      <Header t={t} />

      <TopSection t={t} />

      <KeywordsSection t={t} />

      <Footer />
    </main>
  );
}
