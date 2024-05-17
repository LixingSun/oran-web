import HomeContent from "@/components/HomeContent";

export default async function Home({ params: { locale } }) {
  return (
    <HomeContent locale={locale} />
  );
}
