'use client';

import { NS_HOME } from "@/i18n.config";
import Image from "next/image";
import { useTranslation } from 'react-i18next';

const KeywordsCol = ({t, index, imgSrc, imgAlt, titleTrans, keywordsTrans}) => {
  return (
    <div className={`flex flex-col items-center w-1/3 ${ index > 0 ? 'lg:border-l-2 lg:border-gray-300':''}`}>
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={52}
        height={52}
      />
      <div className="text-sm lg:text-lg font-bold text-main my-3">{t(titleTrans)}</div>
      {
        keywordsTrans.map(
          keywordTrans => (<div key={keywordTrans} className="text-xs lg:text-base">{t(keywordTrans)}</div>)
        )
      }
    </div>
  )
}

const KEYWORDS_DATA = [
  {
    imgSrc: "/icons/ui-icon.svg",
    imgAlt: "UI Development",
    titleTrans: "keywordsSection.ui",
    keywordsTrans: [
      "keywordsSection.frameworks",
      "keywordsSection.testing",
      "keywordsSection.responsive",
      "keywordsSection.charts",
    ]
  },
  {
    imgSrc: "/icons/engineering-icon.svg",
    imgAlt: "Engineering",
    titleTrans: "keywordsSection.engineering",
    keywordsTrans: [
      "keywordsSection.agile",
      "keywordsSection.cicd",
      "keywordsSection.cloud",
      "keywordsSection.architecture",
    ]
  },
  {
    imgSrc: "/icons/tools-icon.svg",
    imgAlt: "Tools",
    titleTrans: "keywordsSection.tools",
    keywordsTrans: [
      "keywordsSection.ide",
      "keywordsSection.design",
      "keywordsSection.atlassian",
      "keywordsSection.trello",
    ]
  }
]

export default function KeywordsSection () {
  const {t} = useTranslation(NS_HOME);

  return (
    <div className="p-6 lg:px-32 lg:py-10">
      <div className="text-2xl font-bold mb-8">{t("keywordsSection.keywords")}</div>

      <div className="flex text-center">
        {
          KEYWORDS_DATA.map(({imgSrc, imgAlt, titleTrans, keywordsTrans}, index) => (
            <KeywordsCol
              t={t}
              key={index} 
              index={index}
              imgSrc={imgSrc}
              imgAlt={imgAlt}
              titleTrans={titleTrans}
              keywordsTrans={keywordsTrans}
            />
          ))
        }
      </div>
    </div>
  )
}