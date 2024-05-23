'use client';

import Image from "next/image";
import { useTranslation } from 'react-i18next';
import Tag from '@/components/Tag';
import { NS_HOME } from "@/i18n.config";

export default function ExperienceSection() {
  const {t} = useTranslation(NS_HOME);

  const translation = t("experienceSection", {returnObjects: true});

  return (
    <div className="bg-secondary flex justify-between flex-col lg:flex-row p-6 lg:px-32 lg:py-10">
      <div className="w-full lg:w-5/12">
        <div className="text-2xl font-bold mb-8">{translation.experience}</div>

        <div className="mb-4 lg:mb-8">
          <Image
            className="mb-3"
            src={"/thoughtworks@2x.png"}
            alt={translation.companies[0].name}
            width={197}
            height={32}
            priority
          />
          <div className="flex justify-between mb-3 text-xs lg:text-sm">
            <div>{translation.companies[0].titles}</div>
            <div>{translation.companies[0].period} / {translation.companies[0].region}</div>
          </div>
          <div>{translation.companies[0].summary}</div>
          <div className="flex flex-wrap mt-4">
            { translation.companies[0].tags.map(tag => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
        </div>

        <div>
          <div className="font-bold text-xl">{translation.companies[1].name}</div>
          <div className="flex justify-between mb-3 text-xs lg:text-sm">
            <div>{translation.companies[1].titles}</div>
            <div>{translation.companies[1].period} / {translation.companies[1].region}</div>
          </div>
          <div>{translation.companies[1].summary}</div>
          <div className="flex flex-wrap mt-4">
            { translation.companies[1].tags.map(tag => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full mt-8 lg:w-1/2 lg:mt-0">
        <div className="text-2xl font-bold mb-2">{translation.projects}</div>
        <div className="text-sm">{translation.confidentialNote}</div>

        {
          translation.companies[0].projects.map((project, projectIndex) => (
            <div className={`py-2 lg:py-6 ${ projectIndex > 0 ? 'border-t-2 border-gray-400':''}`} key={projectIndex}>
              <div className="text-xl font-bold mb-2">{project.name}</div>
              <div className="flex justify-between mb-2 text-xs lg:text-sm">
                <div>{project.title}</div>
                <div>{project.period} / {project.region}</div>
              </div>
              <ul className="list-disc list-inside text-sm">
                {project.summary.map((summaryItem, summaryIndex) => (
                  <li key={summaryIndex}>{summaryItem}</li>
                ))}
              </ul>
              <div className="flex flex-wrap mt-2 lg:mt-4">
                { project.tags.map(tag => (
                  <Tag key={tag} text={tag} />
                ))}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}