'use client';

import { LOCALE_EN, LOCALE_CN, i18nConfig } from "@/i18n.config";
import { useRouter, usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export default function LangSwitcher () {
  const { i18n } = useTranslation();
  const locale = i18n.language;
  const currentPathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    const newLocale = locale == LOCALE_EN ? LOCALE_CN : LOCALE_EN;

    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;

    if (locale === i18nConfig.defaultLocale && currentPathname.indexOf(`/${i18nConfig.defaultLocale}`) < 0) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${locale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  }

  return <button className="mx-4 text-white" onClick={handleClick}>{locale == LOCALE_EN ? "中文" : "EN"}</button> 
};