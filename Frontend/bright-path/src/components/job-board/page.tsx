"use client";

import React, { useState, useEffect, useRef } from "react";
import { Send, Link as LinkIcon, Copy, Bookmark, Search } from "lucide-react";

// Simulated Job Data
const generateJobs = () => {
  const titles = ["UI/UX Designer", "Frontend Developer", "Backend Developer", "Product Manager", "Marketing Specialist", "Sales Executive", "Content Writer", "Data Analyst", "DevOps Engineer", "HR Manager", "SEO Expert", "Project Coordinator"];
  const locations = ["Remote", "New York", "London", "Berlin"];
  const types = ["Full-Time", "Part-Time", "Contract", "Freelance"];
  const categories = ["Design", "Development", "Marketing", "Sales"];
  const jobs = [];

  for (let i = 0; i < 34; i++) {
    jobs.push({
      id: i,
      title: titles[i % titles.length],
      location: locations[i % locations.length],
      type: types[i % types.length],
      category: categories[i % categories.length],
      description: "Join our team and help us deliver innovative digital products.",
      postedBy: `Company ${i + 1}`,
      date: `${(i % 5) + 1} days ago`,
    });
  }

  return jobs;
};

export default function JobFinder() {
  const [search, setSearch] = useState("");
  const [jobType, setJobType] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [jobs] = useState(generateJobs());
  const [fadeIn, setFadeIn] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    setFadeIn(true);
    setTimeout(() => setFilterVisible(true), 300);
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const titleMatch = job.title.toLowerCase().includes(search.toLowerCase());
    const typeMatch = !jobType || job.type === jobType;
    const categoryMatch = !category || job.category === category;
    const locationMatch = !location || job.location === location;
    return titleMatch && typeMatch && categoryMatch && locationMatch;
  });

  const jobRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting, target }) => {
          const index = parseInt(target.getAttribute("data-index") || "0", 10);
          if (isIntersecting && !visibleItems.includes(index)) {
            setVisibleItems((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    jobRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, [filteredJobs, visibleItems]);

  return (
    <div className="min-h-screen bg-lime-50 flex flex-col">
      <header className="bg-gradient-to-r from-green-950 via-green-800 to-lime-500 text-white text-center py-10 px-4">
        <h1 className="text-3xl md:text-5xl font-semibold">Find Your Dream Job</h1>
        <h2 className="text-3xl md:text-5xl font-semibold mt-2">Your Future Starts Here</h2>
        <p className="mt-4 max-w-xl mx-auto">
        Search, apply, and connect with employers – all in one place.<br/> Our AI personalized recommendations make finding your <br/>next opportunity a breeze.
        </p>

        {/* Search */}
        <div className="relative mt-6 max-w-3xl mx-auto">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="peer w-full p-3 pt-5 rounded-md text-gray-800 bg-lime-100 border border-green-900 focus:outline-none focus:ring-2 focus:ring-lime-500"
            placeholder=" "
          />
          <label
            className={`absolute left-10 text-gray-500 top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs transition-all flex items-center gap-2 ${
              search ? "text-xs top-1" : ""
            }`}
          >
            <Search size={18} />
            <span>Search for Jobs...</span>
          </label>
        </div>

        {/* Filters */}
        <div
          className={`mt-6 max-w-4xl bg-lime-100 p-8 rounded mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 transition-all duration-500 ${
            filterVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <select onChange={(e) => setJobType(e.target.value)} className="p-2 rounded-md border border-gray-800 text-gray-900">
            <option value="">All Jobs</option>
            <option>Full-Time</option>
            <option>Part-Time</option>
            <option>Contract</option>
            <option>Freelance</option>
          </select>

          <select onChange={(e) => setCategory(e.target.value)} className="p-2 rounded-md border border-gray-800 text-gray-900">
            <option value="">Category</option>
            <option>Design</option>
            <option>Development</option>
            <option>Marketing</option>
            <option>Sales</option>
          </select>

          <select onChange={(e) => setLocation(e.target.value)} className="p-2 rounded-md border border-gray-800 text-gray-900">
            <option value="">Location</option>
            <option>Remote</option>
            <option>New York</option>
            <option>London</option>
            <option>Berlin</option>
          </select>

          <select className="p-2 rounded-md border border-gray-800 text-gray-900">
            <option>Date Range</option>
            <option>Last 24 hours</option>
            <option>Last 3 days</option>
            <option>Last 7 days</option>
            <option>This month</option>
          </select>
        </div>
      </header>

      {/* Main Content */}
      <main className={`flex-grow max-w-7xl mx-auto px-2 py-10 grid grid-cols-1 lg:grid-cols-3 gap-6 transition-opacity duration-1000 ${fadeIn ? "opacity-100" : "opacity-0"}`}>
        
        {/* MOBILE: Scrollable AI cards */}
        <div className="lg:hidden col-span-full flex gap-3 overflow-x-auto no-scrollbar mb-4 bg-lime-100 p-4">
  {["AI RECOMMENDED SEARCH", "AI MOCKUP", "INTERVIEW PREP", "RESUME BUILDER"].map((label, i) => (
    <div
      key={i}
      className="min-w-[2rem] h-20 bg-white rounded-lg flex items-center justify-center text-center font-medium italic px-1 text-[0.75rem] leading-tight"
    >
      {label}
    </div>
  ))}
</div>

        {/* Job Listings */}
        <section className="lg:col-span-2 space-y-6">
          {filteredJobs.map((job, index) => (
            <div
              key={job.id}
              data-index={index}
              ref={(el) => {
                jobRefs.current[index] = el;
              }}
              className={`bg-white px-6 py-6 w-full max-w-3xl mx-auto rounded-2xl shadow transition-all duration-700 transform ${
                visibleItems.includes(index)
                  ? "opacity-100 translate-y-0 hover:scale-[1.02] hover:shadow-xl hover:bg-lime-50"
                  : "opacity-0 translate-y-6"
              } flex justify-between items-start text-base lg:text-lg`}
            >
              <div>
                <h3 className="text-xl font-semibold">
                  {job.title}
                  <span className="text-sm bg-lime-100 text-green-700 ml-2 px-2 py-1 rounded">
                    {job.location}
                  </span>
                </h3>
                <p className="text-md text-gray-600 mt-2 mr-10">{job.description}</p>
                <p className="text-md text-gray-400 mt-2">{job.date}</p>
                <hr className="my-4 border-gray-200" />
                <div className="text-sm text-gray-600">
                  Posted by: <span className="text-green-700">{job.postedBy}</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <button title="Apply" className="bg-lime-200 p-2 rounded-full">
                  <Send size={16} />
                </button>
                <button title="Copy Link" onClick={() => navigator.clipboard.writeText(`https://job/${job.id}`)} className="bg-lime-200 p-2 rounded-full">
                  <LinkIcon size={16} />
                </button>
                <button title="Copy Details" onClick={() => navigator.clipboard.writeText(job.description)} className="bg-lime-200 p-2 rounded-full">
                  <Copy size={16} />
                </button>
                <button title="Save Job" className="bg-lime-200 p-2 rounded-full">
                  <Bookmark size={16} />
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* DESKTOP: AI tools sidebar */}
        <aside className="space-y-4 hidden lg:block">
          {["AI RECOMMENDED SEARCH", "AI MOCKUP", "INTERVIEW PREP", "RESUME BUILDER"].map((label, i) => (
            <div
              key={i}
              className="bg-lime-100 h-40 rounded-xl flex items-center justify-center text-center font-semibold italic"
            >
              {label}
            </div>
          ))}
        </aside>
      </main>
    </div>
  );
}

