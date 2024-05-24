'use client';

import Image from "next/image";
import LangSwitcher from "./LangSwitcher";
import Link from "next/link";
import { useTranslation } from 'react-i18next';
import { NS_COMMON } from "@/i18n.config";
import { usePathname } from 'next/navigation'

export default function Header() {
  const {t, i18n} = useTranslation(NS_COMMON);
  const locale = i18n.language;
  const currentPath = usePathname()

  const isActiveTab = (path) => {
    if (path == "about") {
      return currentPath == "/" || currentPath == `/${locale}`
    } 

    return currentPath.indexOf(path) >= 0
  }

  return (
    <header className="fixed left-0 top-0 w-full flex items-center bg-side px-6 py-4 lg:px-32 lg:py-10">
      <Image
        src="/avatar@2x.png"
        alt="Logo"
        width={48}
        height={48}
        priority
      />

      <div className="flex flex-1 text-lg ml-4 lg:ml-12">
        <Link className={`${isActiveTab("about") ? "text-white" : "text-grey"} hover:text-white transition mx-2`} href={`/${locale}`}>{t("about")}</Link>
        <Link className={`${isActiveTab("blogs") ? "text-white" : "text-grey"} hover:text-white transition mx-2`} href={`/${locale}/blogs`}>{t("blogs")}</Link>
      </div>

      <div className="toolbar flex items-center">
        <a 
          className="mx-2 lg:mx-4" 
          href="mailto:slxtrjh325@gmail.com">
          <Image
            src="/icons/email.svg"
            alt="email"
            width={28}
            height={28}
            priority
          />
        </a>
        <a 
          className="mx-2 lg:mx-4"
          href="https://github.com/LixingSun/" 
          target="_blank">
          <Image
            src="/icons/github.svg"
            alt="github"
            width={28}
            height={28}
            priority
          />
        </a>

        <LangSwitcher />
      </div>   
    </header>
  );
}