// components/PartnersSection.tsx or .jsx
'use client';

import { motion } from "framer-motion";
import Image from "next/image";

interface PartnersSectionProps {
  partners: string[];
  sectionClassName?: string;
  imageSize?: {
    width: number;
    height: number;
    className: string;
  };
}

const PartnersSection = ({
  partners,
  sectionClassName = "relative py-6 px-4 w-full text-white z-10",
  imageSize = {
    width: 80,
    height: 32,
    className: "object-contain h-10 w-10 mr-7",
  },
}: PartnersSectionProps) => {
  return (
    <section className={sectionClassName}>
      <div className="flex items-center justify-center gap-6 overflow-x-auto scrollbar-hide">
        {partners.map((partner, index) => (
          <motion.div
            key={partner}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
            className="flex-shrink-0"
          >
            <Image
              src={`/partners/${partner}.png`}
              alt={`${partner} logo`}
              width={imageSize.width}
              height={imageSize.height}
              className={imageSize.className}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
