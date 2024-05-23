'use client';

import Image from "next/image";
import { useTranslation } from 'react-i18next';
import { CDN_HOST } from "@/config";
import { NS_HOME } from "@/i18n.config";

export default function TopSection() {
  const {t} = useTranslation([NS_HOME]);

  return (
    <div className="flex justify-between p-6 bg-primary text-white flex-col lg:flex-row lg:px-32 lg:py-10">
      <div className="flex flex-col lg:w-1/2">
        <div className="text-3xl">{t("topSection.title")}</div>
        <div className="text-2xl mt-4">{t("topSection.subtitle")}</div>
        <div className="text-base lg:text-lg mt-4">{t("topSection.paragraph")}</div>
        <div className="flex-1" />
        <div className="flex items-center mt-8">
          <div className="text-sm lg:text-base mr-4">{t("topSection.resume")}</div>
          <a href={`${CDN_HOST}/home/Resume_LixingSun_EN.pdf`} target="_blank" download="cv">
            <Image
              src="/icons/download.svg"
              alt="Download CV"
              width={32}
              height={32}
              priority
            />
          </a>
        </div>
      </div>
      
      <div className="mt-8 lg:mt-0">
        <Image
          src={`${CDN_HOST}/home/my_photo%402x.png`}
          alt="Banner Photo"
          width={400}
          height={300}
          priority
        />
      </div>
    </div>
  )
}