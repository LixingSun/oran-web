import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const LOCALE_EN = "en";
export const LOCALE_CN = "zh";
export const FALLBACK_LOCALE = LOCALE_EN;
export const locales = [LOCALE_EN, LOCALE_CN];

export const { Link, usePathname, useRouter } = createSharedPathnamesNavigation({ locales });