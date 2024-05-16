import createMiddleware from "next-intl/middleware";
import { locales, FALLBACK_LOCALE } from "./i18n/i18n.config";

export default createMiddleware({
  defaultLocale: FALLBACK_LOCALE,
  locales,
  localeDetection: true,
  localePrefix: "as-needed",
});

export const config = {
  matcher: [
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};