import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

const KeywordsCol = ({t, index, imgSrc, imgAlt, titleTrans, keywordsTrans}) => {
  return (
    <div className={`flex flex-col items-center w-1/3 ${ index > 0 ? 'border-l-2 border-gray-300':''}`}>
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={52}
        height={52}
        priority
      />
      <div className="text-lg font-bold text-secondary my-3">{t(titleTrans)}</div>
      {
        keywordsTrans.map(
          keywordTrans => (<div key={keywordTrans}>{t(keywordTrans)}</div>)
        )
      }
    </div>
  )
}

const KEYWORDS_DATA = [
  {
    imgSrc: "/icons/ui-icon.svg",
    imgAlt: "UI Development",
    titleTrans: "ui",
    keywordsTrans: [
      "frameworks",
      "testing",
      "responsive",
      "charts",
    ]
  },
  {
    imgSrc: "/icons/engineering-icon.svg",
    imgAlt: "Engineering",
    titleTrans: "engineering",
    keywordsTrans: [
      "agile",
      "cicd",
      "cloud",
      "architecture",
    ]
  },
  {
    imgSrc: "/icons/tools-icon.svg",
    imgAlt: "Tools",
    titleTrans: "tools",
    keywordsTrans: [
      "ide",
      "design",
      "atlassian",
      "trello",
    ]
  }
]

export default function KeywordsSection () {
  const t = useTranslations("keywordsSection");

  return (
    <div className="px-32 py-10">
      <div className="text-2xl font-bold">{t("keywords")}</div>

      <div className="flex mt-8 text-center">
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