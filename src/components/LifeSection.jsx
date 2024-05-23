'use client';

import { useState } from "react";
import { useTranslation } from 'react-i18next';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { CDN_HOST } from "@/config";

const imageLinks = [  
  {
    original: `${CDN_HOST}/home/life_travel.png`,
    thumbnail: `${CDN_HOST}/home/life_travel_thumbnail.png`,
  },
  {
    original: `${CDN_HOST}/home/life_drawing.png`,
    thumbnail: `${CDN_HOST}/home/life_drawing_thumbnail.png`,
  },
  {
    original: `${CDN_HOST}/home/life_gaming.png`,
    thumbnail: `${CDN_HOST}/home/life_gaming_thumbnail.png`,
  }
];

export default function LifeSection() {
  const {t} = useTranslation();
  
  const imageContent = t("lifeSection.content", {returnObjects: true});

  const imageItems = imageContent.map((content, index) => ({
    original: imageLinks[index].original,
    thumbnail: imageLinks[index].thumbnail,
    thumbnailLabel: content.title,
    originalAlt: content.title,
    thumbnailAlt: content.title
  }))

  const [currentContent, setCurrentContent] = useState(imageContent[0]);

  const handleSlide = (newIndex) => {
    setCurrentContent(imageContent[newIndex]);
  }

  return (
    <div className="bg-white p-6 lg:px-32 lg:py-10">
      <div className="text-2xl font-bold mb-8">{t("lifeSection.aboutLife")}</div>

      <div className="flex justify-between flex-col lg:flex-row">
        <div className="w-full lg:w-1/3">
          <ImageGallery 
            items={imageItems}  
            showPlayButton={false}
            showFullscreenButton={false}
            onSlide={handleSlide}
          />
        </div>
        
        <div className="w-full mt-4 lg:w-1/2 lg:mt-0">
          <div className="text-lg font-bold text-main mb-3 text-center lg:text-start">{currentContent.title}</div>
          <div className="text-sm lg:text-base">{currentContent.content}</div>
        </div>
      </div>
    </div>
  )
}