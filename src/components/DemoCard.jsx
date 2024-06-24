'use client';

import Image from "next/image";
import { useTranslation } from 'react-i18next';
import { NS_DEMO } from "@/i18n.config";
import { CDN_HOST } from "@/config";
import Tag from "./Tag";

export default function DemoCard({
  thumbnail, localeKey, url
}) {
  const {t} = useTranslation(NS_DEMO);

  const localizedContent = t(localeKey, {returnObjects: true});

  return (
    <a className="flex flex-col mb-8 lg:flex-row" href={url} target="_blank" rel="noopener noreferrer">
      <div className="mb-8 lg:w-1/3 lg:mr-8 lg:mb-0">
        <Image
          className="shadow-lg"
          src={`${CDN_HOST}/demo/${thumbnail}`}
          alt={localizedContent.title}
          width={300}
          height={200}
        />
      </div>

      <div className="lg:w-2/3">
        <div className="text-lg font-bold text-main mb-4">{localizedContent.title}</div>
        <div className="text-base">{localizedContent.summary}</div>
        <div className="flex flex-wrap mt-4">
          { localizedContent.tags.map(tag => <Tag text={tag} key={tag} />) }
        </div>
      </div>
    </a>
  );
}