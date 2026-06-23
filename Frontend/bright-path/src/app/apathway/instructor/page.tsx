'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

import {
  FaChalkboardTeacher,
  FaGlobeAfrica,
  FaTools,
  FaAward,
  FaLightbulb,
  FaHandshake,
} from 'react-icons/fa';

const features = [
  {
    title: 'Earn While You Teach',
    description:
      'Get paid through our structured project-based or revenue-sharing model—earnings grow as your content reaches more learners.',
    icon: <FaChalkboardTeacher size={84} />,
  },
  {
    title: 'Global Audience, Lasting Impact',
    description:
      'Reach a diverse student base across Africa and the world looking to develop in-demand skills.',
    icon: <FaGlobeAfrica size={84} />,
  },
  {
    title: 'Curriculum Collaboration',
    description:
      'Collaborate with our internal curriculum team to create structured, relevant, AI-enhanced learning experiences that align with market trends.',
    icon: <FaHandshake size={84} />,
  },
  {
    title: 'Use Smart Tools',
    description:
      'Access our AI-powered content tools to help tailor course materials, personalize learner experiences, and boost engagement.',
    icon: <FaTools size={84} />,
  },
  {
    title: 'Annual Best Instructor Award',
    description:
      'Stand out and get recognized! Winners receive a cash prize, digital badge, and spotlight across our platform and media channels.',
    icon: <FaAward size={84} />,
  },
  {
    title: 'Your Knowledge, Our Platform',
    description:
      'While BrightPath owns the content, your expertise fuels it. You become a key voice in shaping the next generation of professionals.',
    icon: <FaLightbulb size={84} />,
  },
];

export default function InstructorJoinSection() {
  return (
    <section className="bg-white w-full overflow-hidden">
      {/* Hero Top Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative space-y-3 py-32 px-6 text-center z-10 bg-[url('/pathway/inheader.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay bg-lime-50/80"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 text-gray-900"
        >
          Why Join as an Instructor
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-7 text-green-700 font-semibold text-3xl"
        >
          Teach and Earn While You Do It.
        </motion.p>

        <motion.p
          className="text-black max-w-xl mx-auto mt-4 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Your knowledge is powerful. BrightPath helps you transform it into income while shaping the next generation of talent.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: 'spring', stiffness: 80 }}
        >
          <Button className="bg-gradient-to-r from-green-900 via-lime-600 to-lime-400 text-white px-6 py-2 rounded-md hover:brightness-105 hover:scale-105 transition-all duration-300">
            Get Started
          </Button>
        </motion.div>
      </motion.div>

      {/* Section 1 - Text Left, Image Right */}
      <div className="py-20 px-6 bg-gradient-to-r from-lime-50 via-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Shape the Future. Share Your Knowledge. Earn.
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              At BrightPath, we partner with subject-matter experts to develop impactful, high-quality courses aligned with the future of work. While BrightPath retains ownership of all course content, instructors enjoy strong support, fair compensation, and meaningful visibility.
            </p>
          </div>
          <div className="relative w-full flex justify-center">
            <div className="absolute w-[300px] h-[300px] bg-lime-100 rounded-md -top-4 -left-4 z-0" />
            <Image
              src="/pathway/in.png"
              alt="Instructor with laptop"
              width={400}
              height={400}
              className="relative z-10 rounded-md shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Section 2 - Why Teach With Us? */}
      <div className="py-20 px-4">
        <h3 className="text-center text-3xl font-bold mb-12 text-gray-800">
          Why Teach With Us?
        </h3>
        <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-start gap-6 bg-green-800 rounded-lg p-8 shadow-md hover:shadow-xl transition-transform hover:scale-[1.02]"
            >
              <div className="w-24 h-24 text-lime-100 flex items-center justify-center shrink-0">
                {feature.icon}
              </div>
              <div>
                <h4 className="text-lime-100 text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-lime-100 text-md">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section 3 - Final CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white py-24 px-6 text-center"
      >
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center bg-lime-50 rounded-xl p-10">
          <h4 className="text-2xl font-bold text-black mb-8 leading-snug">
            Join our growing community of instructors who are building careers, shaping futures, and creating impact.
          </h4>
          <p className="text-gray-700 mb-6">
            Impact lives. Build your brand. Teach the future.
          </p>
          <Button className="bg-gradient-to-r from-green-900 via-lime-600 to-lime-400 text-white hover:scale-105 transition-transform">
            Get Started <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
