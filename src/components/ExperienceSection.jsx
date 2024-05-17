'use client';

import Image from "next/image";
import { useTranslation } from 'react-i18next';

export default function ExperienceSection() {
  const {t} = useTranslation();

  const translation = t("experienceSection", {returnObjects: true});

  return (
    <div className="flex flex-col justify-between lg:flex-row px-32 py-10 bg-secondary">
      <div className="w-full lg:w-5/12">
        <div className="text-2xl font-bold mb-8">{translation.experience}</div>
        <Image
          className="mb-3"
          src={"/thoughtworks@2x.png"}
          alt={translation.companies[0].name}
          width={197}
          height={32}
          priority
        />
        <div className="flex justify-between mb-3 text-sm">
          <div>{translation.companies[0].titles}</div>
          <div>{translation.companies[0].period}</div>
        </div>
        <div>{translation.companies[0].summary}</div>
      </div>

      <div className="w-full lg:w-1/2">
        <div className="text-2xl font-bold mb-8">{translation.projects}</div>
      </div>
    </div>
  )
}