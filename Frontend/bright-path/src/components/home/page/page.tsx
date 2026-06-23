"use client";

import React from "react";
import Image from "next/image";
import { sectionContents } from "@/components";
import "../Home_content/Home.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type TestimonialItemProps = {
  index: number;
};

const TestimonialItem: React.FC<TestimonialItemProps> = ({ index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <CarouselItem className="pl-2 md:pl-4 max-w-sm">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
      >
        <div className="flex items-center mb-4">
          <Image
            width={50}
            height={50}
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            alt="User Avatar"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              {index % 2 === 0 ? "Leslie Alexander" : "Michael Foster"}
            </h2>
            <p className="text-sm text-gray-500">
              {index % 2 === 0 ? "UX/UI Designer" : "Frontend Developer"}
            </p>
            <div className="flex mt-1">
              {[...Array(4)].map((_, j) => (
                <span key={j} className="text-yellow-400 text-lg">&#9733;</span>
              ))}
              <span className="text-gray-300 text-lg">&#9733;</span>
            </div>
          </div>
        </div>
        <p className="text-gray-700 italic text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
          nulla in tortor fringilla congue. Phasellus imperdiet pellentesque
          mollis.
        </p>
      </motion.div>
    </CarouselItem>
  );
};

export const FirstSection: React.FC = () => {
  return (
    <div
      id="home"
      className="w-full font-satoshi h-auto py-12 px-4 md:px-8 lg:px-20"
    >
      {/* Title */}
      <h2 className="font-semibold text-center mb-12 text-3xl md:text-4xl lg:text-5xl text-blue-950">
        {sectionContents.title}
      </h2>

      {/* Why Choose Us */}
      <section>
        <h1 className="font-bold text-center px-3 lg:px-0 flex items-center mb-6 justify-center max-sm:text-lg max-md:text-xl">
          why choose us
        </h1>

        <div className="bg-lime-100 flex items-center justify-center min-h-screen">
          <div className="relative w-[500px] h-[450px] rounded-full">
            <div className="transform -translate-y-10 text-center font-sm text-gray-800">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <Carousel className="mt-10">
          <CarouselContent className="-ml-2 gap-3 md:-ml-4">
            {[...Array(5)].map((_, i) => (
              <TestimonialItem key={i} index={i} />
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* FAQ or Newsletter placeholder */}
        <div></div>
      </section>
    </div>
  );
};
