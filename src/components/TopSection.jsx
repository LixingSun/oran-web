'use client';

import Image from "next/image";
import { useTranslation } from 'react-i18next';

export default function TopSection() {
  const {t} = useTranslation();
  return (
    <div className="flex justify-between px-32 py-10 bg-primary text-white flex-col lg:flex-row">
      <div className="flex flex-col w-1/2">
        <div className="text-3xl">{t("topSection.title")}</div>
        <div className="text-2xl mt-4">{t("topSection.subtitle")}</div>
        <div className="text-lg mt-4">{t("topSection.paragraph")}</div>
        <div className="flex-1" />
        <div className="flex items-center">
          <div className="mr-4">{t("topSection.resume")}</div>
          <Image
            src="/icons/download.svg"
            alt="Download Resume"
            width={32}
            height={32}
            priority
          />
        </div>
      </div>
      
      <div className="mt-8 lg:mt-0">
        <Image
          src="https://cdn.oran.zone/home/my_photo%402x.png"
          alt="Banner Photo"
          width={400}
          height={300}
          priority
        />
      </div>
    </div>
  )
}