'use client';

import Image from "next/image";
import LangSwitcher from "./LangSwitcher";
import Link from "next/link";
import { useTranslation } from 'react-i18next';

export default function Header() {
  const {t} = useTranslation();

  return (
    <header className="fixed left-0 top-0 w-full flex items-center bg-primary px-6 py-4 lg:px-32 lg:py-10">
      <Image
        src="/avatar@2x.png"
        alt="Logo"
        width={48}
        height={48}
        priority
      />

      <div className="flex flex-1 text-lg ml-12">
        <Link className="text-white" href="/">{t("about")}</Link>
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