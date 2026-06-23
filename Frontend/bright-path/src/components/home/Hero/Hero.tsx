'use client'
import { motion } from 'framer-motion'
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-lime-50 overflow-hidden flex flex-col lg:flex-row items-center px-6">

      {/* Blue animated rectangle */}
    {/* Blue animated rectangle */}
<motion.div
  initial={{ width: 0 }}
  animate={{ width: '60%' }}  // 92% width on mobile
  transition={{ duration: 0.4, ease: 'easeInOut' }}
  className="
    absolute
    right-0
    z-10
    bg-gradient-to-r from-green-900 via-lime-600 to-lime-400
    rounded-tl-[2rem]
    rounded-bl-[2rem]
    h-[15%]
    top-160
    lg:top-1/2
    lg:-translate-y-1/2
    lg:h-[36%]
    lg:w-[60%]      /* Tailwind overrides width to 60% on lg screens */
  "
  style={{ borderTopLeftRadius: '10rem', borderBottomLeftRadius: '10rem' }}
/>


      {/* Text Content */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.7 }}
        className="
          relative 
          z-20 
          w-full 
          max-w-xl 
          text-center 
          mt-33
          lg:text-left 
          lg:mt-0 
          lg:ml-40 
          lg:mr-10
        "
      >
         <h1 className="text-4xl lg:text-5xl font-bold text-black lg:text-left sm:text-center mb-5 lg:mb-20">
  Learn, Grow And Get<br />Hired In One Place
</h1>


      <p className="text-lg lg:text-2xl font-bold text-black max-w-3xl mx-auto lg:mb-20 sm:mt-5">
				A learning platform that works for<br /> you and gets you the work
			</p>
        <button className="bg-gradient-to-r from-green-900 via-lime-600 to-lime-400 text-lg text-white px-6 py-2 mt-7 rounded-md hover:brightness-105 transition">
          Get Started
        </button>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.17, duration: 0.9 }}
        className="
          relative 
          w-[120%] 
          h-[40%] 
          bottom-4
          mt-auto 
          z-30 
          lg:absolute 
          lg:right-[6%] 
          lg:bottom-10 
          lg:w-[65%] 
          lg:h-auto
        "
      >
        <Image
          src="/Assets/homes.png"
          width={2224}
          height={2139}
          alt="Student learning with books"
          className="object-cover w-full h-full"
        />
      </motion.div>
    </section>
  )
}
