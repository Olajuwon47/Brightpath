"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

{/* Mission */}
const missionData = [
  {
    id: 1,
    title: "Our MISSION",
    description:
      "To empower people to gain future-proof skills and connect them to life-changing job opportunities.",
    imageSrc: "/Assets/Rectangle 5454.png",
    imageAlt: "Target with arrows",
    reverse: false,
  },
  {
    id: 2,
    title: "Our MISSION",
    description:
      "To become the world's leading AI-driven learning and career platform.",
    imageSrc: "/Assets/Rectangle 5455.png",
    imageAlt: "Person wearing VR headset",
    reverse: true,
  },
];

const TEXT_CONTENT = {
  uniqueTitle: "What Makes Us Unique?",
  uniqueParagraphs: [
    "Courses built for the now and the future of work: from AI, web dev, digital marketing, data, design, remote work, business growth, and more.",
    "AI-powered learning: The system studies your behavior and what you need and recommends personalized courses.",
  ],
  listItems: [
    "Vestibulum ante ipsum primis in faucibus orci luctus",
    "Cursus sit amet dictum sit amet justo",
    "Elementum pulvinar etiam non quam lacus",
    "Duis ut diam quam nulla porttitor",
    "Quis ipsum suspendisse ultrices gravida",
    "Risus commodo viverra maecenas accumsan",
  ],
};

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-green-700 mr-2 flex-shrink-0"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const OurMissionPage: React.FC = () => {
  return (
    <section className="bg-lime-50 py-16 px-4 max-w-7xl mx-auto m-40 rounded-3xl">
      {missionData.map(
        ({ id, title, description, imageSrc, imageAlt, reverse }, index) => (
          <motion.div
            key={id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className={`flex flex-col md:flex-row items-center justify-between md:items-start gap-10 m-10 mt-40 ${
              reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text container */}
            <div className="md:w-1/2 gap-8 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-4">{title}</h2>
              <p className="text-gray-700 max-w-md mx-auto md:mx-0">
                {description}
              </p>
            </div>
            
            {/* Image container */}
            <div className="relative w-full max-w-xs md:w-105 md:h-97 rounded-lg gap-8 shadow-lg overflow-hidden">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
                priority={id === 1}
              />
            </div>
          </motion.div>
        )
      )}

      <h3 className="text-3xl font-bold text-center mt-12">
        {TEXT_CONTENT.uniqueTitle}
      </h3>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-8 px-4">
        <div className="md:w-1/2 text-gray-700 text-base space-y-4">
          {TEXT_CONTENT.uniqueParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        
        {/* Image side */}
        <div className="relative w-full max-w-xs md:w-60 md:h-80 rounded-lg shadow-md overflow-hidden mt-8 md:mt-0">
          <Image
            src="/Assets/Rectangle 5453.png"
            alt="Unique Features"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </div>
      </div>
      
      {/* Lists */}
      <div className="max-w-7xl ml-60 grid grid-cols-1 md:grid-cols-2 gap-6 mt-20 px-8 text-gray-700 pb-10 text-sm">
        {[0, 1].map((col) => (
          <ul key={col} className="space-y-4 list-none text-center">
            {TEXT_CONTENT.listItems.slice(col * 3, col * 3 + 3).map((text, idx) => (
              <li key={idx} className="flex items-center">
                <CheckIcon />
                {text}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
};

export default OurMissionPage;
