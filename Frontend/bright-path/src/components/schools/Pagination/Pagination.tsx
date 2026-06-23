'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';



import { useState } from 'react';

type PaginationProps = {
  totalPages?: number;
};

export default function Pagination({ totalPages = 11 }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (page: number) => {
    if (page !== currentPage) {
      setCurrentPage(page);
    }
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  // Generate the visible page numbers (2 before and 2 after current)
  const visiblePages: number[] = [];
  for (
    let i = Math.max(1, currentPage - 2);
    i <= Math.min(totalPages, currentPage + 2);
    i++
  ) {
    visiblePages.push(i);
  }

  return (
    <div className="flex items-center justify-between px-4 py-3 sm:px-6 rounded-md">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between w-full">
        <nav
          className="isolate inline-flex -space-x-px rounded-md bg-lime-200 shadow"
          aria-label="Pagination"
        >
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:z-20 focus:outline-offset-0 disabled:opacity-50"
          >
            <span className="sr-only">Previous</span>
            <ChevronLeftIcon className="size-5" aria-hidden="true" />
          </button>

          {/* Page Numbers */}
          {visiblePages.map((page) => (
            <button
              key={page}
              onClick={() => handlePageClick(page)}
              aria-current={page === currentPage ? 'page' : undefined}
              className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 ${
                page === currentPage
                  ? 'z-10 bg-green-700 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700'
                  : 'text-gray-900 hover:bg-gray-100'
              }`}
            >
              {page}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:z-20 focus:outline-offset-0 disabled:opacity-50"
          >
            <span className="sr-only">Next</span>
            <ChevronRightIcon className="size-5" aria-hidden="true" />
          </button>
        </nav>

        {/* Page Info */}
        <div className="ml-4">
          <p className="text-sm text-gray-700">
            <span className="font-medium">{currentPage}</span> /{' '}
            <span className="font-medium">{totalPages}</span>
          </p>
        </div>
      </div>
    </div>
  );
}


/*
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'; // Ensure you have these icons available

const MAX_VISIBLE = 3;
const COURSES_PER_PAGE = 6; // Number of courses to display per page

const departmentsData = [
  {
    name: "School of Technology",
    courses: [
      {
        id: "tech-1",
        title: "Introduction to Computer Science",
        images: "/image/course.png",
        level: "Beginner",
        badges: ["School of Technology"],
        price: { formatted: "₦10,000" },
        enrollment: { text: "100" },
        duration: "4 Weeks",
        provider: { name: "Prof. Tech 1" }
      },
      // ... (other courses)
    ]
  },
  // ... (other departments)
];

export default function CourseCatalog() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedDepartments, setExpandedDepartments] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    if (page !== currentPage) {
      setCurrentPage(page);
    }
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = (totalPages: number) => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  type Course = {
    id: string;
    title: string;
    images: string;
    level: string;
    badges: string[];
    price: { formatted: string };
    enrollment: { text: string };
    duration: string;
    provider: { name: string };
  };

  const filterCourses = (deptName: string, courses: Course[]) => {
    const lowerSearch = searchTerm.toLowerCase();
    return courses.filter(
      (course) =>
        course.title.toLowerCase().includes(lowerSearch) ||
        deptName.toLowerCase().includes(lowerSearch)
    );
  };

  const filteredDepartments =
    selectedDepartment === "All"
      ? departmentsData
      : departmentsData.filter((d) => d.name === selectedDepartment);

  return (
    <div className="min-h-screen w-full bg-gray-100">
    
      <div className="text-center px-4 py-17 bg-lime-100/80">
        <h1 className="text-3xl sm:text-6xl font-bold mb-2">Explore Our Amazing School!</h1>
        <p className="text-gray-700 font-medium mb-4">
          Discover curated courses tailored for your growth and professional journey.
        </p>

      
        <div className="max-w-xl mx-auto">
          <div className="relative bg-gradient-to-l from-green-950 via-green-800 to-lime-500 p-[2px] rounded-md">
            <div className="bg-white rounded-md flex items-center">
              <svg
                className="ml-3 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M17 17A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.5 13.5z"
                />
              </svg>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search courses, departments, etc..."
                className="w-full px-8 py-2 pl-4 rounded-sm outline-none bg-white text-gray-800"
              />
            </div>
          </div>
        </div>

        <div className="lg:ml-25 lg:mr-25 sm:ml-1 sm:mr-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-2 mt-8 justify-center">
          <button
            onClick={() => setSelectedDepartment("All")}
            className={`lg:h-44 sm:h-25 lg:rounded-sm sm:rounded-xs font-semibold text-white ${
              selectedDepartment === "All" ? "bg-green-700/80" : "bg-black"
            }`}
          >
            All
          </button>
          {departmentsData.map((dept) => (
            <button
              key={dept.name}
              onClick={() => setSelectedDepartment(dept.name)}
              className={`lg:h-44 sm:h-25 lg:rounded-sm sm:rounded-xs font-semibold text-white ${
                selectedDepartment === dept.name ? "bg-green-700/90" : "bg-black"
              }`}
            >
              {dept.name}
            </button>
          ))}
        </div>
      </div>

    
      <div className="mt-25 lg:ml-52 lg:mr-52 p-6">
        {filteredDepartments.map((dept) => {
          const isExpanded = expandedDepartments.includes(dept.name);
          const filteredCourses = filterCourses(dept.name, dept.courses);
          const totalPages = Math.ceil(filteredCourses.length / COURSES_PER_PAGE);
          const startIndex = (currentPage - 1) * COURSES_PER_PAGE;
          const visibleCourses = filteredCourses.slice(startIndex, startIndex + COURSES_PER_PAGE);

          if (visibleCourses.length === 0) return null;

          return (
            <div key={dept.name} className="mb-10">
              <div className="flex justify-between items-center mb-5">
                <h2 className="lg:text-5xl lg:m-4 sm:text-2xl font-bold">{dept.name}</h2>
                {selectedDepartment === "All" &&
                  filteredCourses.length > MAX_VISIBLE &&
                  !isExpanded && (
                    <button onClick={() =>
                          setExpandedDepartments((prev) => [...prev, dept.name])
                       }
                       className="text-xs px-2 sm:px-3 py-2 bg-lime-100 text-green-700 rounded hover:underline transition-all duration-200 w-full sm:w-auto"
                    >
                      Browse more →
                    </button>
                  )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-5 "> 
                {visibleCourses.map((course) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
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
                        src={course.images}
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
                  </motion.div>
                ))}
              </div>

            
              <div className="flex justify-center mt-4">
                <button
                  onClick={handlePrevious}
                  disabled={currentPage === 1}
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:z-20 focus:outline-offset-0 disabled:opacity-50"
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon className="size-5" aria-hidden="true" />
                </button>

                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className={`mx-1 px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-green-700 text-white' : 'bg-gray-300'}`}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  onClick={() => handleNext(totalPages)}
                  disabled={currentPage === totalPages}
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:z-20 focus:outline-offset-0 disabled:opacity-50"
                >
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon className="size-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
} */
