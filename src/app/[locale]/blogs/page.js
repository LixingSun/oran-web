import { i18nConfig, NS_BLOGS, NS_COMMON } from "@/i18n.config";
import initTranslations from "@/i18n";
import TranslationsProvider from '@/components/TranslationsProvider';
import Header from "@/components/Header" ;
import Footer from "@/components/Footer";
import blogData from "./data";
import BlogCard from "@/components/BlogCard";

const i18nNamespaces = [NS_COMMON, NS_BLOGS];

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default async function Blogs({ params: { locale } }) {
  const {resources} = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <main className="min-h-screen pt-32 flex flex-col">
        <Header/>

        <div className="flex-1 p-6 lg:py-32 lg:px-[15%]">
          {blogData.map(({key, thumbnail, url}) => (
            <BlogCard key={key} localeKey={key} thumbnail={thumbnail} url={url} />
          ))}
        </div>

        <Footer />
      </main>
    </TranslationsProvider>
  );
}
