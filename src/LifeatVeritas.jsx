import React from "react";

// Section data
const sections = [
  {
    title: "Festivities",
    images: [
      "/life-at-veritas/0.webp",
    "/life-at-veritas/1.webp",
     "/life-at-veritas/2.webp",
    ],
  },
  {
    title: "Women’s Day",
    images: [
      "/life-at-veritas/3.webp",
      "/life-at-veritas/4.webp",
      "/life-at-veritas/5.webp",
    ],
  },
];

const ImageCard = ({ src }) => (
  <div className="relative w-full max-w-xs border-t-4 border-r-4 border-[#c9243f] rounded-sm">
    {/* Top-right orange block */}
    <div className="absolute top-0 right-0 h-4 w-4 bg-[#eb8a2b]" />
    <img src={src} alt="event" className="w-full h-auto object-cover" />
  </div>
);

const Section = ({ title, images }) => (
  <div className="mb-12">
    <h2 className="text-xl font-bold text-[#c9243f] mb-4">{title}</h2>
    <div className="flex flex-wrap gap-6">
      {images.map((img, idx) => (
        <ImageCard key={idx} src={img} />
      ))}
    </div>
  </div>
);

const LifeAtVeritas = () => (
  <div className="marginal bg-white">
     <h1 className="font-semibold text-[#3c3a39] md:text-4xl text-3xl pt-1 mb-6">
    Life at Veritas
      </h1>
    {sections.map((section, idx) => (
      <Section key={idx} title={section.title} images={section.images} />
    ))}
  </div>
);

export default LifeAtVeritas;
