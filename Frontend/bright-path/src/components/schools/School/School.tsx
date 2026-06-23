"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Sample departments with a few starter courses (you can import this if external)
const departments = [
  {
    name: "School of Technology",
    courses: [
       
      {
        id: "tech101",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8qOFSh17xrt8bBIP6J_o2OJICZ0hd5SG2_g&s",
        badges: ["Technology"],
        title: "Introduction to Web Development",
        level: "Beginner",
        price: { formatted: "₦9,500" },
        enrollment: { text: "320" },
        duration: "5 Weeks",
        provider: { name: "Samuel Odeyemi" },
      },
      {
        id: "tech102",
        title: "Mobile App Development with Flutter",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8qOFSh17xrt8bBIP6J_o2OJICZ0hd5SG2_g&s",
        badges: ["Technology"],
        level: "Intermediate",
        price: { formatted: "₦13,000" },
        enrollment: { text: "210" },
        duration: "6 Weeks",
        provider: { name: "Dr. Chinedu Eze" },
      },
      {
        id: "tech103",
        title: "Artificial Intelligence Fundamentals",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8qOFSh17xrt8bBIP6J_o2OJICZ0hd5SG2_g&s",
        badges: ["Technology"],
        level: "Advanced",
        price: { formatted: "₦20,000" },
        enrollment: { text: "135" },
        duration: "7 Weeks",
        provider: { name: "Kemi Adebanjo" },
      },
    ],
  },
  {
    name: "School of Business",
    courses: [
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
    ],
  },
  {
    name: "School of Management",
    courses: [
      {
        id: "mgmt201",
        title: "Operations Management Fundamentals",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVPZrXGblbCJqj1QGjCGQVxRO3Iq9zrhQ8bA&s",
        badges: ["Management"],
        level: "Beginner",
        price: { formatted: "₦13,000" },
        enrollment: { text: "210" },
        duration: "5 Weeks",
        provider: { name: "Dr. Femi Akinwale" },
      },
      {
        id: "mgmt202",
        title: "Human Resource Management Principles",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVPZrXGblbCJqj1QGjCGQVxRO3Iq9zrhQ8bA&s",
        badges: ["Management"],
        level: "Intermediate",
        price: { formatted: "₦14,500" },
        enrollment: { text: "190" },
        duration: "6 Weeks",
        provider: { name: "Ngozi Opara" },
      },
      {
        id: "mgmt203",
        title: "Organizational Behavior & Culture",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVPZrXGblbCJqj1QGjCGQVxRO3Iq9zrhQ8bA&s",
        badges: ["Management"],
        level: "Advanced",
        price: { formatted: "₦15,000" },
        enrollment: { text: "170" },
        duration: "6 Weeks",
        provider: { name: "Dr. Chuka Mordi" },
      },
    ],
  },
   {
    name: "School of Leadership",
    courses: [
      {
    id: "lead201",
    title: "Emotional Intelligence for Leaders",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRel6hyWi7tZ1jw2vtoYlcOz__5As4l18OCig&s",
    badges: ["Leadership"],
    level: "Intermediate",
    price: { formatted: "₦13,000" },
    enrollment: { text: "200" },
    duration: "5 Weeks",
    provider: { name: "Dr. Grace Obinna" },
  },
  {
    id: "lead202",
    title: "Visionary Leadership in Uncertain Times",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRel6hyWi7tZ1jw2vtoYlcOz__5As4l18OCig&s",
    badges: ["Leadership"],
    level: "Advanced",
    price: { formatted: "₦16,000" },
    enrollment: { text: "125" },
    duration: "6 Weeks",
    provider: { name: "Prof. Adekunle Bamidele" },
  },
  {
    id: "lead203",
    title: "Servant Leadership & Organizational Culture",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRel6hyWi7tZ1jw2vtoYlcOz__5As4l18OCig&s",
    badges: ["Leadership"],
    level: "Beginner",
    price: { formatted: "₦9,500" },
    enrollment: { text: "180" },
    duration: "4 Weeks",
    provider: { name: "Mrs. Bola Okonkwo" },
  },
    ],
  },
];

// Generate placeholder courses to simulate full catalog
const MAX_COURSES_VISIBLE = 3;
const MAX_PER_DEPARTMENT = 20;

/*const placeholderCourse = (id: string, title: string, provider: string) => ({
  id,
  title,
  thumbnail: "https://via.placeholder.com/300x180.png?text=Course+Image",
  badges: ["General"],
  level: "Beginner",
  price: { formatted: "₦12,000" },
  enrollment: { text: Math.floor(Math.random() * 300).toString() },
  duration: "6 Weeks",
  provider: { name: provider },
});

// Fill up departments to 20 courses
departments.forEach((dept) => {
  const existing = dept.courses.length;
  const placeholders = Array.from({ length: MAX_PER_DEPARTMENT - existing }, (_, i) =>
    placeholderCourse(`${dept.name}-${i}`, `Placeholder Course ${i + 1}`, dept.name)
  );
  dept.courses.push(...placeholders);
});*/

const CourseCatalog = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [, setSearchTerm] = useState('');
  const [expandedDepartments] = useState<string[]>([]);

  const filteredDepartments =
    selectedDepartment === "All"
      ? departments
      : departments.filter((dept) => dept.name === selectedDepartment);

  return (
<>
<div className="w-full items-center px-4  py-7 min-h-screen max-sm:px-6 max-md:px-4 flex flex-col text-center">
     <div className="w-full items-center px-4 bg-lime-50 py-7 min-h-screen max-sm:px-6 max-md:px-4 flex flex-col text-center">
                <h1 className="font-bold text-3xl sm:text-3xl leading-tight mt-3 max-sm:text-xl">
                  Explore Our Amazing School!
                </h1>
                <p className="font-semibold text-sm leading-relaxed mb-3 max-sm:text-base max-md:text-sm">
                  Discover curated courses tailored for your growth and professional journey.
                </p>
          
                {/* Search Box */}
                <div className="p-[2px] rounded-md bg-gradient-to-tl from-green-900 via-lime-500 to-lime-400 mt-3 w-full max-w-3xl mx-auto">
                  <div className="flex items-stretch bg-white rounded-md shadow-sm overflow-hidden">
                    <span className="inline-flex items-center px-3 text-gray-700 text-sm font-medium">
                        <svg
                  className="w-5 h-5 text-gray-500"
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
                    </span>
                    <input
                      type="text"
                      placeholder="Search"
                      aria-label="search"
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="flex-1 px-3 py-2 text-sm sm:text-base focus:ring-0 focus:outline-none w-full"
                    />
                  </div>
                </div>
                  {/* Department Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 mt-10 md:grid-cols-5 gap-4">
        <button
          onClick={() => setSelectedDepartment("All")}
          className={`h-32 w-40 rounded-md font-medium text-white ${selectedDepartment 
            === "All" ? "bg-green-700" : "bg-black"} hover:bg-lime-500`}
        >
          All
        </button>
        {departments.map((dept) => (
          <button
            key={dept.name}
            onClick={() => setSelectedDepartment(dept.name)}
            className={`h-32 w-40 rounded-md font-medium text-white ${selectedDepartment
               === dept.name ? "bg-green-700" : "bg-black"}`}
          >
            {dept.name}
          </button>
        ))}
      </div>
        </div>
      {/* Filter buttons 
      <div className="flex flex-wrap gap-3 mb-8">
        <button
          className={`h-32 w-40 rounded-md font-medium text-white ${
            selectedDepartment === "All"
              ? "bg-green-700 text-white"
              : "bg-black text-green-700"
          }`}
          onClick={() => setSelectedDepartment("All")}
        >
          All
        </button>
        {departments.map((dept) => (
          <button
            key={dept.name}
            className={`h-32 w-40 rounded-md font-medium text-white ${
              selectedDepartment === dept.name
                ? "bg-green-700 text-white"
                : "bg-black text-green-700"
            }`}
            onClick={() => setSelectedDepartment(dept.name)}
          >
            {dept.name}
          </button>
        ))}
      </div>*/}

      {/* Course display */}
      {filteredDepartments.map((dept) => {
        const isExpanded = expandedDepartments.includes(dept.name);
        const visibleCourses =
          selectedDepartment === "All"
            ? isExpanded
              ? dept.courses
              : dept.courses.slice(0, MAX_COURSES_VISIBLE)
            : dept.courses.slice(0, MAX_PER_DEPARTMENT);

        return (
          <div key={dept.name} className="mb-12">
            {/* Department title and Browse More 
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-8">
              <h2 className="font-bold text-2xl sm:text-3xl max-sm:text-xl mb-3 sm:mb-0">{dept.name}</h2>
              {selectedDepartment === "All" &&
                dept.courses.length > MAX_COURSES_VISIBLE &&
                !isExpanded && (
                  <button
                    onClick={() =>
                      setExpandedDepartments((prev) => [...prev, dept.name])
                    }
                    className="text-green-700 text-sm hover:underline"
                  >
                    Browse more →
                  </button>
                )}
            </div>*/}
             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-8">
            <h1 className="font-bold text-2xl sm:text-3xl max-sm:text-xl mb-3 sm:mb-0">{dept.name}
              {/*selectedDepartment === "All" ? "All Courses" : selectedDepartment*/}
            </h1>
            <Link
              href=""
              className="inline-flex items-center px-4 py-2 bg-lime-100 text-green-700 rounded-sm text-sm font-semibold hover:bg-lime-200"
            >
              Browse more →
            </Link>
          </div>

            {/* Course Grid 
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {visibleCourses.map((course) => (
                <div
                  key={course.id}
                  className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
                >
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4 space-y-2">
                    <h3 className="text-lg font-medium">{course.title}</h3>
                    <p className="text-sm text-gray-500">
                      {course.provider.name}
                    </p>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{course.level}</span>
                      <span>{course.duration}</span>
                    </div>
                    <div className="text-green-700 font-semibold">
                      {course.price.formatted}
                    </div>
                    <Link
                      href={`/courses/${course.id}`}
                      className="block mt-2 text-sm text-white bg-gradient-to-r from-green-900 via-lime-600 to-lime-400 text-center py-2 rounded hover:brightness-105"
                    >
                      View Course
                    </Link>
                  </div>
                </div>
              ))}
            </div>*/}

             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                      {visibleCourses.map((course) => (
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
              
                          <h2 className="font-bold text-base text-gray-900 leading-snug">{course.title}</h2>
              
                          <div className="rounded-lg overflow-hidden">
                            <Image
                              src={course.thumbnail}
                              alt={course.title}
                              width={300}
                              height={180}
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
                              <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512">
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
                            <button className="flex items-center justify-center rounded-full bg-gray-400 size-12" aria-label="Bookmark">
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

          </div>
        );
      })}
    </div>
      </>
  );
};

export default CourseCatalog;
