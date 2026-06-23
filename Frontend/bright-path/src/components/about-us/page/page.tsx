"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { useSearchParams } from "next/navigation";
import {
  TeamSection,
  ConfiguredNewsletter,
  OurMissionPage,
} from "@/components";

const TEXT_CONTENT = {
  introHeading: "About Us",
  introParagraph:
    "BrightPath is an AI-powered EdTech university platform helping people around the world learn practical, industry focused and high-demand skills that lead directly to employment and career growth.",
  whatWeDoHeading: "What we do",
  whatWeDoDescription:
    "Lorem ipsum dolor sit amet. Aut explicabo minima non internos voluptas sed quos eaque qui rerum nihil et deleniti nulla 33 galisum galisum. Quo internos consequatur non dolore quaerat rem internosLorem ipsum dolor sit amet. Aut explicabo minima non internos voluptas sed quos eaque qui rerum nihil et deleniti nulla 33 galisum galisum. Quo internos consequatur non dolore quaerat rem internosLorem ipsum dolor sit amet. Aut explicabo minima non internos voluptas sed quos eaque qui rerum nihil et deleniti nulla 33 galisum galisum. Quo internos consequatur non dolore quaerat rem",
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


// Main About Page Component
const AboutPage: React.FC = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const section = searchParams.get("section");
    if (section) {
      // Add a small delay to ensure the page has rendered
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          const navbarHeight = 72; // Height of the fixed navbar
          const elementPosition =
            element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarHeight - 20; // Extra 20px padding

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, [searchParams]);

  return (
    <>
      {/* About Intro Section - two column layout */}
      <section className="relative overflow-hidden bg-white" id="about-intro">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-lime-100 via-lime-50 to-white" />
        <div className="relative bg-lime-50/80 py-20 px-6">
         <div className="max-w-6xl mx-5 lg:mx-auto flex flex-col md:flex-row gap-12 items-center">

            {/* Text Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="md:w-1/2 space-y-6"
            >
              <div className="inline-flex items-center rounded-full bg-green-950 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-lime-100">
                BrightPath
              </div>
              <h1 className="text-4xl font-bold text-green-950 mb-4">
                {TEXT_CONTENT.introHeading}
              </h1>
              <p className="text-gray-800 text-lg leading-relaxed font-medium mb-4">
                {TEXT_CONTENT.introParagraph}
              </p>
              <p className="max-w-xl text-sm sm:text-base text-gray-600">
                We combine guided learning, career support, and real-world opportunities so learners can move with confidence from skills to work.
              </p>
            </motion.div>

              {/* Stats Section */}
              {/* <div className="flex gap-10 mt-8">
                {stats.map(({ id, value, label, suffix }) => (
                  <div key={id} className="text-center">
                    <p className="text-3xl font-bold text-green-700">
                      <Counter value={value} suffix={suffix} />
                    </p>
                    <p className="text-gray-700 mt-1">{label}</p>
                  </div>
                ))}
              </div> */}

            {/* Image Grid - Precise Collage Layout */}
            <div className="md:w-1/2 flex gap-2">
              {/* Large left image (70% width) */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="w-full rounded-[1.75rem] overflow-hidden shadow-2xl ring-1 ring-lime-100"
              >
                <Image
                  src="/images/about-us/image.png"
                  alt="Hand interacting with digital interface"
                  width={450}
                  height={350}
                  className="object-cover w-full mt-17"
                  priority
                />
              </motion.div>

              {/* Right column images (30% width) */}
              <div className="w-full flex flex-col gap-2">
                {/* Top right image */}
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="rounded-[1.5rem] overflow-hidden h-[49.5%] shadow-lg ring-1 ring-lime-100"
                >
                  <Image
                    src="/images/about-us/image (1).png"
                    alt="AI lightbulb"
                    width={250}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </motion.div>

                {/* Bottom right image */}
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="rounded-[1.5rem] overflow-hidden h-[49.5%] shadow-lg ring-1 ring-lime-100"
                >
                  <Image
                    src="/images/about-us/image (2).png"
                    alt="People working together"
                    width={250}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div id="our-mission">
          <OurMissionPage />
        </div>
      </section>

      {/* Partners Section with Gradient Background */}
      <div className="relative mx-2 py-2 pb-2 overflow-hidden">
      
        
        {/* Gradient background */}
        <div className="absolute inset-0 gap-8 z-1 pointer-events-none bg-gradient-to-r from-green-950 via-green-800 to-lime-500" />

        {/* Icons container */}
        <div className="relative z-10 flex justify-center items-center gap-8 flex-wrap py-2 px-2">
          {/* Keyhole/Lock icon */}
          <div className="w-16 h-16 flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-4 h-6 bg-transparent border-2 border-white rounded-b-full rounded-t-none"></div>
            </div>
          </div>

          {/* AWS */}
          <Image
            src="/partners/aws.png"
            alt="AWS"
            width={40}
            height={40}
            className="object-contain"
          />

          {/* Cloudflare */}
          <Image
            src="/partners/cloud.png"
            alt="Cloudflare"
            width={40}
            height={40}
            className="object-contain"
          />

          {/* Upwork */}
          <Image
            src="/partners/upwork.png"
            alt="Upwork"
            width={40}
            height={40}
            className="object-contain"
          />

          {/* Unity */}
          <Image
            src="/partners/unity.png"
            alt="Unity"
            width={40}
            height={40}
            className="object-contain"
          />

          {/* Google Cloud */}
          <Image
            src="/image/bxl_google-cloud.png"
            alt="Google Cloud"
            width={40}
            height={40}
            className="object-contain"
          />

          {/* GitHub */}
          <Image
            src="/partners/github.png"
            alt="GitHub"
            width={40}
            height={40}
            className="object-contain"
          />

          {/* Mailchimp */}
          <Image
            src="/partners/mailchimp.png"
            alt="Mailchimp"
            width={40}
            height={40}
            className="object-contain"
          />

          {/* Slack */}
          <Image
            src="/partners/slack.png"
            alt="Slack"
            width={40}
            height={40}
            className="object-contain"
          />
          {/* Figma */}
          <Image
            src="/partners/figma.png"
            alt="Figma"
            width={40}
            height={40}
            className="object-contain"
          />

          {/* SoundCloud */}
          <Image
            src="/partners/soundcloud.png"
            alt="SoundCloud"
            width={40}
            height={40}
            className="object-contain"
          />

        </div>
      </div>

      {/* team section */}
      <div id="team">
        <TeamSection />
      </div>

      {/* Newsletter */}
      <ConfiguredNewsletter
        title="STAY UPDATED WITH OUR NEWSLETTER"
        description="Subscribe to get the latest updates, programs, and events delivered to your inbox."
        containerClassName="bg-white py-20 px-5 sm:px-10 xl:px-20 mt-24 mb-35 rounded-[1.75rem] shadow-[0_18px_60px_rgba(22,101,52,0.12)] border border-lime-100 text-center transition-all duration-700 w-full max-w-6xl mx-auto"
        descriptionClassName="pb-10 text-xl sm:text-2xl text-gray-700"
        formClassName="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 max-w-3xl mx-auto"
        inputClassName="sm:flex-1 w-full px-5 py-3 border border-lime-200 rounded-full shadow-sm bg-lime-100 placeholder-gray-900 focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition"
      />
    </>
  );
};

export default AboutPage;
