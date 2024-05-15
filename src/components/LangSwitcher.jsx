'use client';

import { LOCALE_EN, LOCALE_CN } from "@/i18n/settings";
import { switchLocaleAction } from "@/actions/switchLocale";

export default function LangSwitcher ({locale}) {
  const handleClick = () => {
    switchLocaleAction(locale == LOCALE_EN ? LOCALE_CN : LOCALE_EN);
  }

  return <button className="mx-4 text-white" onClick={handleClick}>{locale == LOCALE_EN ? "中文" : "EN"}</button> 
};