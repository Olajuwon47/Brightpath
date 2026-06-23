"use client";

import { useState, useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { ConfiguredNewsletter } from "@/components";

const faqData = [
  {
    question: "What is BrightPath?",
    answer:
      "BrightPath is a learning and school discovery platform that helps students explore programs, access course information, and connect with educational opportunities.",
  },
  {
    question: "How do I enroll in a course?",
    answer:
      "Browse the school or course you want, open the course details, and follow the enrollment steps or contact the listed instructor or school for guidance.",
  },
  {
    question: "Can I join if I am a beginner?",
    answer:
      "Yes. Many of our courses are designed for beginners, and each course page shows the level so you can choose one that matches your experience.",
  },
  {
    question: "Are the courses self-paced or scheduled?",
    answer:
      "That depends on the course. Some programs are self-paced, while others follow a schedule set by the instructor or school.",
  },
  {
    question: "Do I get a certificate after completing a course?",
    answer:
      "Many courses include a certificate of completion. Check the course description to confirm whether certification is included.",
  },
  {
    question: "How do I contact an instructor or school?",
    answer:
      "Each school or course page includes the instructor or provider name. You can use the platform contact options or reach out through the school’s listed details.",
  },
  {
    question: "What kinds of programs are available?",
    answer:
      "We feature programs across technology, business, management, leadership, health, education, law, agriculture, humanities, and creative arts.",
  },
   {
    question: "Can schools update their course listings?",
    answer:
      "Yes. Schools can update their listings so learners always see current course details, pricing, and availability.",
  },
   {
    question: "Is there support if I have a problem?",
    answer:
      "Yes. If you run into an issue, you can contact the platform team for help with navigation, access, or course-related questions.",
  },
   {
    question: "How often are new programs added?",
    answer:
      "New programs are added as schools and instructors publish them, so it’s worth checking back regularly for fresh opportunities.",
  },
];


export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef, { once: true, amount: 0.3 });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, scale: 0.95, y: 50 }}
      animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-16 px-6"
    >
      <h2 className="text-3xl font-bold text-center mb-12">FAQs</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        {/* Left Side Image and Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="bg-gradient-to-b from-green-950 via-green-800 to-lime-500 text-white rounded-lg flex flex-col items-center justify-center shadow-lg"
        >
          <h3 className="text-5xl p-6 font-bold mb-4">Have Questions?</h3>
          <Image
            src="/Assets/faq.png"
            alt="FAQ"
            width={774}
            height={639}
            className="rounded-lg object-cover w-full"
          />
        </motion.div>

        {/* Right Side FAQs */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="flex flex-col gap-4"
        >
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-lime-100 shadow-md rounded-md overflow-hidden transition-all duration-500"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 font-medium flex justify-between items-center hover:bg-lime-200 transition"
              >
                {faq.question}
                <span className="ml-2">{openIndex === index ? "▲" : "▼"}</span>
              </button>

              <div
                className={`px-6 text-gray-600 transition-all duration-500 overflow-hidden ${
                  openIndex === index
                    ? "max-h-40 py-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {faq.answer}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Newsletter Section */}
      <ConfiguredNewsletter
        title="STAY UPDATED WITH OUR NEWSLETTER"
        description="Subscribe to get the latest updates, programs, and events delivered to your inbox."
        containerClassName="bg-white py-20 px-5 sm:px-10 xl:px-18 mt-24 rounded-lg shadow-md text-center transition-all duration-700 w-full max-w-8xl"
        descriptionClassName="pb-10 text-xl sm:text-2xl text-gray-700"
        formClassName="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 max-w-3xl mx-auto"
        inputClassName="sm:flex-1 w-full px-5 py-3 border border-lime-200 rounded-md shadow-sm bg-lime-100 placeholder-gray-900 focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition"
      />
    </motion.section>
  );
}
