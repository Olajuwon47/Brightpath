"use client";
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

export default function Course() {
  const reviews = [
    {
      name: 'Olajuwon Edunmi',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      time: 'about an hour ago',
      comment:
        'Great course. The quiz marking acts as a nice nudge to get one into the solution mindset.',
    },
    {
      name: 'Ibukun',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      time: 'about an hour ago',
      comment:
        'The clarity and structure of the lessons made it easy to understand. Well done team!',
    },
  ];

  const courseBenefits = [
    '1 hour on-demand video',
    '2 quizzes',
    'Certificate of completion',
    'Downloadable resources',
    'Leadership principles',
    'Change management',
    'Decision-making frameworks',
    'Communication in teams',
  ];

  return (
    <div className="">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-2 p-4 max-sm:flex-wrap max-sm:text-sm"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 transition"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="w-5 h-5" />
        </motion.button>

        <span className="text-sm text-gray-500">Course -</span>
        <h1 className="text-sm font-semibold text-gray-800">
          AWS DevOps Continuous; Integration, Delivery and Deployment
        </h1>
      </motion.div>

      <div className="max-w-6xl mx-auto shadow-md min-h-screen py-10 px-4 bg-white rounded-md grid grid-cols-1 lg:grid-cols-3 gap-6 max-md:px-2 max-sm:px-1">
        {/* Left side */}
        <div className="lg:col-span-2 space-y-6 p-6 max-sm:p-3 max-md:p-4">
          <div>
            <video
              className="h-96 w-full object-cover rounded-md max-md:h-72 max-sm:h-56"
              controls
            >
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            </video>

            <div className="flex gap-5 mt-6 max-sm:flex-col max-sm:gap-3">
              <button className="bg-gradient-to-tl from-green-950 via-green-800 to-lime-500 text-white text-sm px-4 py-2 rounded-md">
                Enroll Now
              </button>
              <button className="bg-lime-200 text-green-900 text-sm px-4 py-2 rounded-md hover:bg-lime-300">
                Add to favourite
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800 max-sm:text-xl">Business & Management</h2>
          </div>

          <p className="text-gray-600 text-base max-sm:text-sm">
            Learn essential theory and practical skills in business management. This course will help you lead change, manage people, and make strategic decisions. Ideal for beginners seeking foundational knowledge.
          </p>

          <p className="text-gray-600 text-base max-sm:text-sm">
            Learn essential theory and practical skills in business management. This course will help you lead change, manage people, and make strategic decisions. Ideal for beginners seeking foundational knowledge.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-20 gap-6">
            <div className="flex items-center gap-4">
              <Image
                src="/Assets/faq.png"
                alt="Instructor"
                width={50}
                height={50}
                className="rounded-md bg-gray-500"
              />
              <div>
                <p className="text-sm text-gray-800">Instructor</p>
                <p className="font-semibold text-gray-800">Daniel Ayeni</p>
                <p className="text-yellow-500 text-sm">
                  ★★★<span className="text-gray-300">★★</span>
                </p>
              </div>
            </div>
            <p className="text-gray-600 text-sm max-w-xl">
              Learn essential theory and practical skills in business management.
            </p>
          </div>

          <div className="mt-20 space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 max-sm:text-base">Reviews</h3>
            {reviews.map((review, idx) => (
              <article key={idx} className="flex items-start gap-4 max-sm:gap-2">
                <Image
                  width={40}
                  height={40}
                  src={review.avatar}
                  alt={`${review.name}'s avatar`}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.time}</p>
                  <p className="mt-1 text-sm text-gray-700">{review.comment}</p>
                </div>
              </article>
            ))}
          </div>

          <form className="mt-6 space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Leave a Comment</h3>
            <textarea
              className="w-full border border-lime-200 bg-lime-100 rounded-md p-3 focus:ring-2 focus:ring-lime-500"
              rows={4}
              placeholder="Write your comment..."
            ></textarea>
            <button className="px-3 py-2 bg-gradient-to-r from-green-900 via-lime-600 to-lime-400 text-white rounded hover:brightness-105">
              Post Comment
            </button>
          </form>
        </div>

        {/* Right side */}
        <div className="bg-gray-300 p-6 shadow-sm rounded-md space-y-4 h-fit max-sm:p-3">
          <div>
            <h3 className="font-semibold mb-3 text-gray-700">What you&#39;ll learn</h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor nulla in tortor fringilla congue. Phasellus imperdiet pellentesque mollis.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-gray-700">This course includes</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
              {courseBenefits.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
