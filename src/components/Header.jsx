import Image from "next/image";
import LangSwitcher from "./LangSwitcher";
import { getLocale } from "@/i18n/server";

export default function Header({t}) {
  const locale = getLocale();
  return (
    <header className="fixed left-0 top-0 w-full flex items-center px-32 py-10 bg-primary">
      <Image
        src="/avatar@2x.png"
        alt="Logo"
        width={48}
        height={48}
        priority
      />

      <div className="flex flex-1 text-lg ml-12">
        <a className="text-white" href="/">{t("about")}</a>
      </div>

      <div className="toolbar flex items-center">
        <a className="mx-4" href="mailto:slxtrjh325@gmail.com">
          <Image
            src="/icons/email.svg"
            alt="email"
            width={28}
            height={28}
            priority
          />
        </a>
        <a 
          className="mx-4"
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

        <LangSwitcher locale={locale} />
      </div>   
    </header>
  );
}