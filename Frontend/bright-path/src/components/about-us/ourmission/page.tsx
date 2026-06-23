"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

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

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const OurMissionPage: React.FC = () => {
  return (
    <>
      <section className="bg-white py-16 max-w-7xl mx-auto m-24 px-4">
        {missionData.map(
          ({ id, title, description, imageSrc, imageAlt, reverse }, index) => (
            <motion.div
              key={id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
              className={`flex flex-col md:flex-row items-center justify-between md:items-start gap-10 m-10 mt-20 ${
                reverse ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-1/2 gap-8 text-center md:text-left">
                <div className="inline-flex items-center rounded-full bg-lime-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-green-800 mb-4">
                  {title}
                </div>
                <h2 className="text-3xl font-bold mb-4 text-green-950">
                  Building the BrightPath mission
                </h2>
                <p className="text-gray-700 max-w-md mx-auto md:mx-0">
                  {description}
                </p>
              </div>

              <div
                className="relative w-full max-w-xs md:w-[420px] md:h-[388px] rounded-[1.5rem] shadow-2xl overflow-hidden ring-1 ring-lime-100"
                style={{ minHeight: 250 }}
              >
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-[1.5rem]"
                  priority={id === 1}
                />
              </div>
            </motion.div>
          )
        )}
      </section>

     {/* What Makes Us Unique Section - Updated Visuals */}
<section className="relative w-full py-16 px-6 text-white overflow-hidden">
  {/* Background */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/images/about-us/Group 33748.png"
      alt="Decorative background"
      fill
      className="object-cover"
    />
  </div>
  <div className="absolute inset-0 z-[1] bg-gradient-to-r from-green-950/85 via-green-900/70 to-lime-500/65" />

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto text-center">
    <motion.h3
      className="text-3xl font-bold mb-12 text-lime-50"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
    >
      What Makes Us Unique?
    </motion.h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
      {[
        {
          title: "Courses built for the now and the future of work.",
          description:
            "From AI, web dev, digital marketing, data, design, creative work & business growth, and more.",
        },
        {
          title: "AI-powered learning",
          description:
            "The system studies your behavior and what you need and recommends personalized content.",
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          className="border border-white/40 rounded-[1.25rem] p-6 backdrop-blur-sm bg-white/5"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={index * 0.2}
        >
          <h4 className="text-xl font-bold mb-3 text-white">{item.title}</h4>
          <p className="text-sm leading-relaxed">{item.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
{/* What Makes Us Unique - Bottom Features */}
<section className="bg-white py-20 px-6">
  <div className="max-w-7xl mx-auto flex flex-col gap-16">

    {/* Direct Job Matching */}
    <motion.div
      className="bg-lime-100 rounded-[1.5rem] p-6 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex-1 text-center md:text-left">
        <h4 className="text-lg md:text-xl font-bold text-green-950 mb-2">
          Direct job matching
        </h4>
        <p className="text-gray-800">
          Our AI connects students with real jobs based on performance and interest.
        </p>
      </div>

      <div className="relative w-full md:w-1/2 h-48 min-h-[200px] max-w-md">
        <Image
          src="/images/about-us/[GetPaidStock.com]-68469a5f59fa5 1.png" // Replace with your actual image
          alt="AI and human collaboration"
          fill
          className="object-cover rounded-lg"
        />
      </div>
    </motion.div>

    {/* Bottom Two Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Real Instructors */}
      <motion.div
        className="bg-white border border-lime-100 rounded-[1.5rem] shadow-md overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="relative w-full aspect-video">
          <Image
            src="/images/about-us/Rectangle 5720.png"
            alt="Instructor teaching"
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h4 className="text-lg font-bold text-green-950 mb-2">
            Real instructors, real experience:
          </h4>
          <p className="text-gray-700">
            Learn from experts who’ve done it, not just studied it.
          </p>
        </div>
      </motion.div>

      {/* Career Launchpad */}
      <motion.div
        className="bg-white border border-lime-100 rounded-[1.5rem] shadow-md overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="relative w-full aspect-video">
          <Image
            src="/images/about-us/Rectangle 5721.png"
            alt="Career launch illustration"
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h4 className="text-lg font-bold text-green-950 mb-2">
            Career launchpad:
          </h4>
          <p className="text-gray-700">
            We don’t just teach, we guide and help you get hired.
          </p>
        </div>
      </motion.div>
    </div>
  </div>
</section>


      {/* You can uncomment this block when ready */}
      {/* 
      <motion.section
        className="bg-lime-50 rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 my-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="bg-lime-100 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="flex-1 text-left">
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              Direct job matching
            </h4>
            <p className="text-gray-800">
              Our AI connects students with real jobs based on performance and interest.
            </p>
          </div>

          <div className="relative w-full md:w-1/2 h-48 min-h-[192px] max-w-md">
            <Image
              src="/images/about-us/[GetPaidStock.com]-68469a5f59fa5 1.png"
              alt="AI and human collaboration"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </motion.section> 
      */}
    </>
  );
};

export default OurMissionPage;
