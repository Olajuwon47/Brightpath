'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    title: "Education Access",
    text: "Gain access to curated learning content tailored for all levels of education.",
    icon: "/svg/svgstu.png",
  },
  {
    title: "Teaching Support",
    text: "Resources and tools for teachers to effectively deliver knowledge and mentorship.",
    icon: "/svg/sinst.png",
  },
  {
    title: "Employment Pathways",
    text: "Connect with job opportunities aligned with your education and interests.",
    icon: "/svg/sempl.png",
  },
];

export default function Features() {
  return (
    <motion.section
      className="mt-7 py-7 px-4 max-w-7xl mx-auto text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold mb-10">Features</h2>
      <div className="py-8 px-5 grid md:grid-cols-3 gap-8 bg-lime-50 rounded-lg">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="bg-white shadow-md px-4 py-12 rounded-lg text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * idx, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-lime-300 w-16 h-16 rounded flex items-center justify-center mb-9">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={24}
                height={24}
                className="w-10 h-20 object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
