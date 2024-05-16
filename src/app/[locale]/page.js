import Header from "@/components/Header" ;
import Footer from "@/components/Footer";
import TopSection from "@/components/TopSection";
import KeywordsSection from "@/components/KeywordsSection";

export default function Home() {
  return (
    <main className="min-h-screen pt-32">
      <Header />

      <TopSection />

      <KeywordsSection />

      <Footer />
    </main>
  );
}
