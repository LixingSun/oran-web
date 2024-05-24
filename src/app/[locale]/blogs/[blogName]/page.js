import { i18nConfig, NS_BLOGS, NS_COMMON } from "@/i18n.config";
import initTranslations from "@/i18n";
import TranslationsProvider from '@/components/TranslationsProvider';
import Header from "@/components/Header" ;
import Footer from "@/components/Footer";
import blogList from "@/markdowns";
import { MDXRemote } from 'next-mdx-remote/rsc';

const i18nNamespaces = [NS_COMMON, NS_BLOGS];

export function generateStaticParams() {
  const params = [];

  i18nConfig.locales.forEach(locale => {
    blogList.forEach(blogName => params.push({ locale, blogName }))
  });

  return params;
}

export default async function BlogDetail({ params: { locale, blogName } }) {
  const {resources} = await initTranslations(locale, i18nNamespaces);
  const markdown = await import(`@/markdowns/${blogName}-${locale}.md`);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <main className="min-h-screen pt-32 flex flex-col">
        <Header/>

        <div className="prose max-w-full flex-1 p-6 lg:py-32 lg:px-[15%]">
          <MDXRemote source={markdown.default} />
        </div>

        <Footer />
      </main>
    </TranslationsProvider>
  );
}