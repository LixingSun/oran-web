import {createInstance} from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import {initReactI18next} from 'react-i18next/initReactI18next';
import {FALLBACK_LOCALE,getOptions,Locales,LANGUAGE_COOKIE} from './settings';
import {cookies} from 'next/headers';

async function initI18next(lang, namespace) {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (lang, ns) => import(`../locales/${lang}/${namespace}.json`),
      ),
    )
    .init(getOptions(lang, namespace));

  return i18nInstance;
}

export async function createTranslation(ns) {
  const lang = getLocale();
  const i18nextInstance = await initI18next(lang, ns);

  return {
    t: i18nextInstance.getFixedT(lang, Array.isArray(ns) ? ns[0] : ns),
  };
}

// Utility function to get the locale from server components
export function getLocale() {
  return (cookies().get(LANGUAGE_COOKIE)?.value ?? FALLBACK_LOCALE);
}