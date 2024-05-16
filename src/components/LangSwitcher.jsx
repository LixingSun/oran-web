'use client';

import { 
  LOCALE_EN, 
  LOCALE_CN,
  usePathname,
  useRouter
} from "@/i18n.config";

export default function LangSwitcher ({locale}) {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    let newLocale = locale == LOCALE_EN ? LOCALE_CN : LOCALE_EN;
    router.replace(pathname, { locale: newLocale });
  }

  return <button className="mx-4 text-white" onClick={handleClick}>{locale == LOCALE_EN ? "中文" : "EN"}</button> 
};