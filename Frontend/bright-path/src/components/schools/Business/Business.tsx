"use client";

import React from "react";
import Image from 'next/image';
const Business: React.FC = () => {
const Courses = [
  {
    id: "biz107",
    title: "Project Management Essentials",
    thumbnail: "https://www.theopencollege.com/wp-content/uploads/2013/07/QQI-Business-Management-Course-level-6-850-x-440px.jpg",
    badges: ["Business"],
    level: "Intermediate",
    price: { formatted: "₦14,000" },
    enrollment: { text: "270" },
    duration: "6 Weeks",
    provider: { name: "Dr. Nneka Uzo" },
  },
  {
    id: "biz108",
    title: "Customer Relationship Management (CRM)",
    thumbnail: "https://www.theopencollege.com/wp-content/uploads/2013/07/QQI-Business-Management-Course-level-6-850-x-440px.jpg",
    badges: ["Business"],
    level: "Beginner",
    price: { formatted: "₦10,500" },
    enrollment: { text: "160" },
    duration: "4 Weeks",
    provider: { name: "Ibrahim Taiwo" },
  },
  {
    id: "biz109",
    title: "Business Analytics & Data-Driven Decisions",
    thumbnail: "https://www.theopencollege.com/wp-content/uploads/2013/07/QQI-Business-Management-Course-level-6-850-x-440px.jpg",
    badges: ["Business"],
    level: "Advanced",
    price: { formatted: "₦18,000" },
    enrollment: { text: "110" },
    duration: "7 Weeks",
    provider: { name: "Esther Danladi" },
  },
  {
    id: "biz110",
    title: "Startup Fundraising & Venture Capital",
    thumbnail: "https://www.theopencollege.com/wp-content/uploads/2013/07/QQI-Business-Management-Course-level-6-850-x-440px.jpg",
    badges: ["Business"],
    level: "Advanced",
    price: { formatted: "₦22,000" },
    enrollment: { text: "95" },
    duration: "6 Weeks",
    provider: { name: "Chioma Obasi" },
  },
  {
    id: "biz111",
    title: "Brand Management & Storytelling",
    thumbnail: "https://www.theopencollege.com/wp-content/uploads/2013/07/QQI-Business-Management-Course-level-6-850-x-440px.jpg",
    badges: ["Business"],
    level: "Intermediate",
    price: { formatted: "₦13,500" },
    enrollment: { text: "180" },
    duration: "5 Weeks",
    provider: { name: "Tomiwa Adeniran" },
  },
  {
    id: "biz112",
    title: "E-commerce Business Management",
    thumbnail: "https://www.theopencollege.com/wp-content/uploads/2013/07/QQI-Business-Management-Course-level-6-850-x-440px.jpgg",
    badges: ["Business"],
    level: "Beginner",
    price: { formatted: "₦12,000" },
    enrollment: { text: "240" },
    duration: "5 Weeks",
    provider: { name: "Ngozi Nwachukwu" },
  },
  {
    id: "biz113",
    title: "Strategic Leadership for Business Growth",
    thumbnail: "https://www.theopencollege.com/wp-content/uploads/2013/07/QQI-Business-Management-Course-level-6-850-x-440px.jpg",
    badges: ["Business"],
    level: "Advanced",
    price: { formatted: "₦16,500" },
    enrollment: { text: "130" },
    duration: "6 Weeks",
    provider: { name: "Dr. Adebayo Kole" },
  },
  {
    id: "biz114",
    title: "Negotiation & Conflict Resolution",
    thumbnail: "https://www.theopencollege.com/wp-content/uploads/2013/07/QQI-Business-Management-Course-level-6-850-x-440px.jpg",
    badges: ["Business"],
    level: "Intermediate",
    price: { formatted: "₦11,000" },
    enrollment: { text: "170" },
    duration: "4 Weeks",
    provider: { name: "Funmi Bello" },
  },
  {
    id: "biz115",
    title: "Social Enterprise & Impact Business",
    thumbnail: "https://www.theopencollege.com/wp-content/uploads/2013/07/QQI-Business-Management-Course-level-6-850-x-440px.jpg",
    badges: ["Business"],
    level: "Beginner",
    price: { formatted: "₦10,000" },
    enrollment: { text: "140" },
    duration: "4 Weeks",
    provider: { name: "Lanre Ojo" },
  },
  {
    id: "biz116",
    title: "Taxation & Business Compliance",
    thumbnail: "https://www.theopencollege.com/wp-content/uploads/2013/07/QQI-Business-Management-Course-level-6-850-x-440px.jpg",
    badges: ["Business"],
    level: "Advanced",
    price: { formatted: "₦17,000" },
    enrollment: { text: "115" },
    duration: "5 Weeks",
    provider: { name: "Aisha Sulaiman" },
  }
];

  return (
    <>
      <section className="px-[7.5rem] mt-10 max-md:px-6 max-sm:px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {Courses.map((course) => (
          <div
            key={course.id}
            className="max-w-xs w-full rounded-2xl border border-gray-200 shadow-md overflow-hidden bg-white p-4 space-y-3 font-sans mx-auto"
          >
            <div className="flex justify-between items-center text-xs text-gray-600">
              <span className="bg-black text-white px-1 text-sm">
                {course.badges?.[0] || "General Course"}
              </span>
              <span className="text-gray-500 pr-14 text-[10px]">{course.level}</span>
            </div>

            <h2 className="font-bold text-base text-gray-900 leading-snug">
              {course.title}
            </h2>

            <div className="rounded-lg overflow-hidden">
              <Image
                width={400}
                height={200}
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-36 object-cover"
              />
            </div>

            <div className="flex items-center justify-between mt-1">
              <span className="bg-gradient-to-r from-green-900 via-lime-600 to-lime-400 text-white text-md font-semibold px-6 py-2 rounded-md">
                {course.price?.formatted}
              </span>
              <span className="text-gray-500 text-xs pl-10">
                {course.enrollment?.text} Enrolled
              </span>
            </div>

            <span className="text-sm pb-6 text-gray-700">{course.duration}</span>

            <div className="flex justify-between pt-5 items-center text-lg text-gray-600">
              <div className="flex space-x-1 text-yellow-400">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span className="text-gray-300">★</span>
                <span className="text-gray-300">★</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-2 mt-2">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512">
                  <path
                    fill="#0d0d0d"
                    d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"
                  />
                </svg>
                <div className="text-xs text-gray-800 font-medium">
                  <p className="uppercase text-[10px] text-gray-500">Instructor</p>
                  <p className="text-sm">{course.provider?.name}</p>
                </div>
              </div>
              <button
                className="flex items-center justify-center rounded-full bg-gray-400 size-12"
                aria-label="Bookmark"
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="15" viewBox="0 0 384 512">
                  <path
                    fill="#f7f7f7"
                    d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Business;
