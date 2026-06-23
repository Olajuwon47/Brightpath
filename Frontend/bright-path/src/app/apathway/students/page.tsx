'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

import {
  FaRobot,
  FaProjectDiagram,
  FaUserTie,
  FaCertificate,
  FaUsers,
  FaFileAlt,
} from 'react-icons/fa';

const features = [
  {
    title: 'Courses in AI, tech, business, digital marketing, entrepreneurship, etc',
    icon: <FaRobot size={28} className="text-green-700" />,
  },
  {
    title: 'AI-curated learning paths based on your goals, pace, and performance',
    icon: <FaProjectDiagram size={28} className="text-green-700" />,
  },
  {
    title: 'Access to AI-powered job matching tools',
    icon: <FaUserTie size={28} className="text-green-700" />,
  },
  {
    title: 'Certifications that matter to employers',
    icon: <FaCertificate size={28} className="text-green-700" />,
  },
  {
    title: 'Community support, mentoring, and live learning sessions',
    icon: <FaUsers size={28} className="text-green-700" />,
  },
  {
    title: 'AI resume builder',
    icon: <FaFileAlt size={28} className="text-green-700" />,
  },
];

export default function StudentJoinSection() {
  return (
    <section className="bg-white w-full overflow-hidden space-y-9">
      {/* Hero Top Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative space-y-3 py-32 px-6 text-center z-10 bg-[url('/pathway/sheader.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay bg-lime-50/80"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-4xl font-bold mb-12 text-gray-900"
        >
          Why Join as a Student
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-7 text-green-700 font-semibold text-3xl"
        >
          Future-Ready Learning Starts Here
        </motion.p>

        <motion.p
          className="text-black max-w-xl mx-auto mt-4 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          BrightPath helps you gain the most relevant and future-focused skills,
          and supports you every step of the way toward your career goals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: 'spring', stiffness: 80 }}
        >
          <Button className="bg-gradient-to-r from-green-900 via-lime-600 to-lime-400 text-white px-8 py-4 rounded-md hover:brightness-105 hover:scale-105 transition-all duration-300">
            Get Started
          </Button>
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <div className="py-20 px-6 bg-white">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold mb-10 text-gray-800"
        >
          What You’ll Get
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: 'easeOut',
              }}
              viewport={{ once: true }}
              className="bg-green-800 rounded-xl shadow-md p-10 text-center border border-lime-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-lime-200 rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>
              <p className="text-white font-medium">{feature.title}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white py-24 px-6"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-8 bg-lime-50 rounded-lg p-10">
          <div>
            <h4 className="text-xl font-semibold text-black mb-4">
              Whether you’re starting out, changing careers, or upskilling —
              BrightPath puts you ahead.
            </h4>
            <Button className="bg-gradient-to-r from-green-900 via-lime-600 to-lime-400 text-white mt-4 hover:scale-105 transition-transform">
              Get Started <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          <Image
            src="/pathway/employ.png"
            alt="Smiling student"
            width={400}
            height={400}
            className="rounded-md"
          />
        </div>
      </motion.div>
    </section>
  );
}
