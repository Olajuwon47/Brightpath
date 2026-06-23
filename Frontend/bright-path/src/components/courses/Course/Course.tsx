'use client';
import React from 'react';
//import Image from 'next/image';

interface CourseProps {
  courseId: string;
}

export default function Course({ courseId }: CourseProps) {
  // You can fetch course data based on courseId here
  
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Course Details</h1>
        <p>Course ID: {courseId}</p>
        
        {/* Add your course content here */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Course Information</h2>
          {/* Course details content */}
        </div>
      </div>
    </div>
  );
}