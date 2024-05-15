export const LOCALE_EN = "en";
export const LOCALE_CN = "zh-CN";
export const FALLBACK_LOCALE = LOCALE_EN;
export const supportedLocales = [LOCALE_EN, LOCALE_CN];

export const LANGUAGE_COOKIE = 'ORAN_ZONE_LAN';

export function getOptions(lang = FALLBACK_LOCALE, ns = 'home') {
  return {
    supportedLngs: supportedLocales,
    fallbackLng: FALLBACK_LOCALE,
    lng: lang,
    ns,
  };
}