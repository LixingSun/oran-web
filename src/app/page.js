import Header from "@/components/Header" ;
import Footer from "@/components/Footer";
import { createTranslation } from '@/i18n/server';

export default async function Home() {
  const { t } = await createTranslation("home");
  
  return (
    <main className="min-h-screen pt-32">
      <Header t={t} />

      <Footer />
    </main>
  );
}
