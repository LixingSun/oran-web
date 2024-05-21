'use client';

import { useState } from "react";
import { useTranslation } from 'react-i18next';

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const imageLinks = [  
  {
    original: "https://cdn.oran.zone/home/life_travel.png",
    thumbnail: "https://cdn.oran.zone/home/life_travel_thumbnail.png",
  },
  {
    original: "https://cdn.oran.zone/home/life_drawing.png",
    thumbnail: "https://cdn.oran.zone/home/life_drawing_thumbnail.png",
  },
  {
    original: "https://cdn.oran.zone/home/life_gaming.png",
    thumbnail: "https://cdn.oran.zone/home/life_gaming_thumbnail.png",
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
    <div className="bg-white px-32 py-10">
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
        
        <div className="w-full lg:w-1/2">
          <div className="text-lg font-bold text-main mb-3">{currentContent.title}</div>
          <div>{currentContent.content}</div>
        </div>
      </div>
    </div>
  )
}