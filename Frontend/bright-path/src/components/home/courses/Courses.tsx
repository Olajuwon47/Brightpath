'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { FaStar, FaRegBookmark, FaBookmark } from 'react-icons/fa';

const pageContent = {
  popular: {
    title: 'Popular Courses',
    button: 'Browse more ',
    link: '/school',
  },
  latest: {
    title: 'Latest Courses',
    button: 'Browse more',
    link: '/school',
  },
  instructor: {
    heading: 'Become an Instructor',
    button: 'Learn more',
    image: '/images/instructor/become-instructor.png',
  },
  hire: {
    heading: 'Hire Verified Talent',
    button: 'Learn more',
    image: '/assets/hm (2).png',
  },
};

const courses = [
  {
    id: 'tech-1',
    title: 'Introduction to Computer Science',
    image: '/image/course.png',
    level: 'Beginner',
    category: 'School of Technology',
    price: '₦10,000',
    enrollment: '100',
    duration: '4 Weeks',
    instructor: 'Prof. Tech 1',
    rating: 4.5,
  },
  {
    id: 'tech-2',
    title: 'Data Structures and Algorithms',
    image: '/image/course.png',
    level: 'Intermediate',
    category: 'School of Technology',
    price: '₦15,000',
    enrollment: '80',
    duration: '6 Weeks',
    instructor: 'Prof. Tech 2',
    rating: 4.0,
  },
  {
    id: 'tech-3',
    title: 'Web Development',
    image: '/image/course.png',
    level: 'Advanced',
    category: 'School of Technology',
    price: '₦20,000',
    enrollment: '120',
    duration: '8 Weeks',
    instructor: 'Prof. Tech 3',
    rating: 5.0,
  },
  {
    id: 'art-1',
    title: 'Intro to Painting',
    image: '/image/course.png',
    level: 'Beginner',
    category: 'School of Arts',
    price: '₦8,000',
    enrollment: '50',
    duration: '4 Weeks',
    instructor: 'Mrs. Artsy',
    rating: 4.2,
  },
  {
    id: 'sci-1',
    title: 'Biology Basics',
    image: '/image/course.png',
    level: 'Beginner',
    category: 'School of Science',
    price: '₦9,500',
    enrollment: '70',
    duration: '5 Weeks',
    instructor: 'Dr. Bio',
    rating: 3.8,
  },
  {
    id: 'bus-1',
    title: 'Fundamentals of Business',
    image: '/image/course.png',
    level: 'Intermediate',
    category: 'School of Business',
    price: '₦12,000',
    enrollment: '90',
    duration: '6 Weeks',
    instructor: 'Mr. Biz',
    rating: 4.3,
  },
];

const renderStars = (rating: number) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <>
      {Array(full).fill(0).map((_, i) => (
        <FaStar key={`full-${i}`} className="text-yellow-400 text-sm" />
      ))}
      {half && <FaStar key="half" className="text-yellow-400 text-sm opacity-50" />}
      {Array(empty).fill(0).map((_, i) => (
        <FaStar key={`empty-${i}`} className="text-gray-300 text-sm" />
      ))}
    </>
  );
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  }),
};

export default function UpdatedCourses() {
  const [bookmarked, setBookmarked] = useState<string[]>([]);
  const toggleBookmark = (id: string) => {
    setBookmarked(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const latest = courses.slice(0, 3);
  const popular = courses.slice(3, 6);

  type Course = {
    id: string;
    title: string;
    image: string;
    level: string;
    category: string;
    price: string;
    enrollment: string;
    duration: string;
    instructor: string;
    rating: number;
  };

  const CourseCard = (course: Course, index: number, hrefPrefix: string) => (
    <motion.div
      key={course.id}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
      whileHover={{ scale: 1.02 }}
      className="border p-7 m-4 overflow-hidden shadow-md bg-white relative"
    >
      <div className="text-sm text-gray-500 flex items-center gap-2">
        <span className="bg-black text-white px-2 py-0.5">{course.category}</span>
        <span>{course.level}</span>
      </div>
      <h3 className="font-semibold text-lg mt-2">{course.title}</h3>
      <Image src={course.image} alt={course.title} width={500} height={300} className="w-full h-40 object-cover mt-2" />
      <div className="p-4 space-y-2">
        <p className="font-bold px-2 text-white bg-linear-to-r from-green-900 via-lime-600 to-lime-400 w-fit rounded-sm">{course.price}</p>
        <div className="flex items-center justify-between gap-2 text-sm text-gray-600">
          <span>{course.duration}</span>
          <span>{course.enrollment} enrolled</span>
        </div>
        <div className="flex items-center gap-1">{renderStars(course.rating)}</div>
        <p className="text-sm text-gray-600">{course.instructor}</p>
        <button
          className="absolute bottom-11 right-3 text-green-800 bg-green-100 bg-opacity-60 p-2 rounded-full"
          onClick={() => toggleBookmark(course.id)}
        >
          {bookmarked.includes(course.id) ? <FaBookmark /> : <FaRegBookmark />}
        </button>
        <Link href={`${hrefPrefix}/${course.id}`} className="text-green-700 text-sm hover:underline">
          View Course
        </Link>
      </div>
    </motion.div>
  );

  return (
    <div className="space-y-10">
      {/* Latest Courses */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <div className="p-7 text-4xl font-bold">{pageContent.latest.title}</div>
          <Link href={pageContent.latest.link} className="bg-lime-50 hover:bg-linear-to-r from-lime-100 to-green-50 transition-all duration-300 ease-in-out text-sm font-medium text-green-700 p-2 rounded-sm flex items-center gap-1">
            {pageContent.latest.button}
            <span className="text-xl ml-1">→</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {latest.map((course, i) => CourseCard(course, i, '/school'))}
        </div>
      </section>

      {/* Popular Courses */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <div className="p-7 text-4xl font-bold">{pageContent.popular.title}</div>
          <Link href={pageContent.popular.link} className="bg-lime-50 hover:bg-linear-to-r from-lime-100 to-green-50 transition-all duration-300 ease-in-out text-sm font-medium text-green-700 p-2 rounded-sm flex items-center gap-1">
            {pageContent.popular.button}
            <span className="text-xl ml-1">→</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {popular.map((course, i) => CourseCard(course, i, '/courses'))}
        </div>
      </section>




{/* Become an Instructor */}
<section className="relative py-16 px-4 bg-white w-full overflow-hidden">
  {/* Circle Background Animation */}
  <motion.div
    initial={{ scale: 4, x: 0, y: 0 }}
    animate={{ scale: 1, x: 290, y: 400 }}
    transition={{ type: 'spring', stiffness: 120, damping: 12, duration: 1.2 }}
    className="absolute left-1/2 -translate-x-1/2 z-10"
  >
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: 4 }}
      transition={{ delay: 1, duration: 1 }}
      className="w-28 h-28 bg-lime-200 rounded-full"
      style={{ clipPath: 'inset(0 0 50% 0)' }}
    />
  </motion.div>

  <div className="relative z-20 max-w-7xl mx-auto">
    <h2 className="text-md md:text-4xl font-bold text-center text-[#111] mb-12">
      Become an Instructor
    </h2>

    <div className="flex flex-col md:flex-row items-center justify-center gap-10">
      {/* Text Content */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 text-center md:text-left max-w-lg"
      >
        <h3 className="text-3xl font-bold mb-4 text-black leading-snug">
          Are you skilled, experienced <br />and passionate about teaching?
        </h3>
        <div className="text-black mb-6 space-y-1 text-md leading-relaxed">
          <p>Do you want to help people gain practical,</p>
          <p>high-income skills for today&#39;s digital world?</p>
          <p>Join BrightPath as an Instructor and earn.</p>
        </div>
        <button className="bg-linear-to-r from-green-900 via-lime-600 to-lime-400 text-white px-6 py-2 rounded-md hover:brightness-105 transition">
          {pageContent.instructor.button}
        </button>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <div className="w-120 h-120 overflow-hidden ">
          <Image
            src={pageContent.instructor.image}
            alt={pageContent.instructor.heading}
            className="w-full h-full object-cover"
            width={500}
            height={500}
          />
        </div>
      </motion.div>
    </div>
  </div>
</section>

{/* Hire Verified Talent */}
<section className="py-16 px-4 bg-white w-full">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-md md:text-4xl font-bold text-center text-[#111] mb-12">
      Hire Verified Talent
    </h2>

    <div className="flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Image */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <Image
          src={pageContent.hire.image}
          alt={pageContent.hire.heading}
          className="w-full max-w-sm"
          width={500}
          height={300}
        />
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 text-center md:text-left max-w-lg"
      >
        <h2 className="text-3xl font-bold mb-4">{pageContent.hire.heading}</h2>
        <div className="text-black mb-6 space-y-1 text-md leading-relaxed">
          <p>BrightPath helps you hire smarter by giving you job-ready talent.</p>
          <p>Direct access to pre-trained, AI-assessed,</p>
          <p>job-ready talent.</p>
        </div>
        <button className="bg-linear-to-r from-green-900 via-lime-600 to-lime-400 text-white px-6 py-2 rounded-md hover:brightness-105 transition">
          {pageContent.hire.button}
        </button>
      </motion.div>
    </div>
  </div>
</section>

    </div>
  );
}
