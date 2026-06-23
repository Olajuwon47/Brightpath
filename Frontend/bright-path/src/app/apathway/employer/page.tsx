'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const steps = [
  'Source skilled candidates trained in today’s most relevant technologies',
  'Access to a dashboard with AI recommendations for top candidates',
  'Request custom training tracks for your team',
  'Upskill your workforce quickly with AI-curated upskill courses',
  'Reduce hiring risk with performance data and certifications',
];

export default function EmployerJoinSection() {
  return (
    <section className="bg-white w-full space-y-6">
      {/* Top Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative space-y-6 py-32 px-6 text-center z-10 bg-[url('/pathway/emheader.png')] bg-cover bg-center bg-no-repeat bg-blend-overlay bg-lime-50/80"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-10 text-gray-900"
        >
          Why Join as an Employer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-green-700 font-semibold text-2xl mt-10"
        >
          Smarter Talent. Faster Results. Lower Cost.
        </motion.p>

        <motion.p
          className="text-black max-w-xl mx-auto mt-4 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          BrightPath helps exclusive employers like you quickly connect to top candidates
          while saving time and hiring costs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: 'spring', stiffness: 80 }}
        >
          <Button className="bg-gradient-to-r from-green-900 via-lime-600 to-lime-400 text-white px-6 py-2 rounded-md hover:scale-105 transition-transform duration-300">
            Get Started
          </Button>
        </motion.div>
      </motion.div>

      {/* How We Help Section */}
      <div className="bg-gray-50 py-20 px-6">
        <h3 className="text-center text-3xl font-bold mb-12 text-gray-900">
          Here is how we help
        </h3>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/pathway/side.jpg"
              alt="Employer Illustration"
              width={500}
              height={600}
              className="rounded-md shadow-xl w-full h-auto object-cover"
            />
          </motion.div>

          {/* Steps Timeline */}
          <div className="space-y-22 w-full">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative flex items-start gap-6"
              >
                {/* Vertical line + number circle */}
                <div className="flex flex-col items-center relative">
                  {idx !== steps.length - 1 && (
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 h-full w-0.5 bg-lime-200 z-0" />
                  )}
                  <div className="relative w-20 h-20 flex items-center justify-center z-10">
                    <div className="absolute inset-0 bg-lime-100 rounded-full" />
                    <div className="relative w-8 h-8 flex items-center justify-center bg-green-800 text-white rounded-full text-sm font-bold z-10">
                      {idx + 1}
                    </div>
                  </div>
                </div>

                {/* Bubble Content */}
                <div className="relative bg-green-800 text-white rounded-xl px-5 py-4 shadow-md w-full">
                  <div className="absolute -left-2 top-5 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-green-800" />
                  <p className="relative z-10 text-md sm:text-base">{step}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white py-24 px-6"
      >
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10 bg-lime-50 rounded-xl p-10">
          <div>
            <h4 className="text-2xl font-bold text-black mb-4">
              Whether you’re a startup or a growing company,<br />
              we help you build a winning team—fast.
            </h4>
            <Button className="bg-gradient-to-r from-green-900 via-lime-600 to-lime-400 text-white mt-4 hover:scale-105 transition-transform">
              Get Started <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          <Image
            src="/pathway/mG.png"
            alt="Magnet attracting people"
            width={400}
            height={400}
            className="rounded-md"
          />
        </div>
      </motion.div>
    </section>
  );
}
