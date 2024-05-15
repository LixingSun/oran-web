'use client';

import { LOCALE_EN, LOCALE_CN, LANGUAGE_COOKIE } from "@/i18n/settings";
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

export default function LangSwitcher ({locale}) {
  const router = useRouter();

  const handleClick = () => {
    setCookie(LANGUAGE_COOKIE, locale == LOCALE_EN ? LOCALE_CN : LOCALE_EN);
    router.refresh();
  }

  return <button className="mx-4 text-white" onClick={handleClick}>{locale == LOCALE_EN ? "中文" : "EN"}</button> 
};