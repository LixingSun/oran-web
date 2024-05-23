'use client';

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from 'react-i18next';
import { NS_BLOGS } from "@/i18n.config";
import { CDN_HOST } from "@/config";

export default function BlogCard({
  thumbnail, localeKey, url
}) {
  const {t, i18n} = useTranslation(NS_BLOGS);
  const locale = i18n.language;

  const localizedContent = t(localeKey, {returnObjects: true});

  return (
    <Link className="flex flex-col mb-8 lg:flex-row" href={`/${locale}/blogs/${url}`}>
      <div className="mb-8 lg:w-1/3 lg:mr-8 lg:mb-0">
        <Image
          className="shadow-lg"
          src={`${CDN_HOST}/blogs/${thumbnail}`}
          alt={localizedContent.title}
          width={300}
          height={200}
        />
      </div>

      <div className="lg:w-2/3">
        <div className="text-lg font-bold text-main mb-4">{localizedContent.title}</div>
        <div className="text-base">{localizedContent.summary}</div>
      </div>
    </Link>
  );
}