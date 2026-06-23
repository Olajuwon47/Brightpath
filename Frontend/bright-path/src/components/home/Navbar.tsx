'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { AboutPage, OurMissionPage, JobFinder } from '@/components';

const navItems = [
  { name: 'Home', href: '/' },
  {
    name: 'School',
    dropdown: ['Courses', 'Departments'],
  },
  {
    name: 'Pathway',
    dropdown: ['Tech', 'Business', 'Health'],
  },
  { name: 'Job Board' }, // We'll handle Job Board manually
  { name: 'Subscription Plans', href: '/subscriptions' },
  {
    name: 'About Us',
    dropdown: ['About Us', 'Our Mission', 'Team'],
  },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [showAboutPage, setShowAboutPage] = useState(false);
  const [showOurMission, setShowOurMission] = useState(false);
  const [showJobBoard, setShowJobBoard] = useState(false);

  const handleAboutUsClick = () => {
    setShowAboutPage(true);
    setShowOurMission(false);
    setShowJobBoard(false);
    setOpenMenu(null);
  };

  const handleOurMissionClick = () => {
    setShowOurMission(true);
    setShowAboutPage(false);
    setShowJobBoard(false);
    setOpenMenu(null);
  };

  const handleJobBoardClick = () => {
    setShowJobBoard(true);
    setShowAboutPage(false);
    setShowOurMission(false);
    setOpenMenu(null);
  };

  return (
    <>
    <nav className="w-full px-6 py-3 bg-white flex justify-between items-center fixed top-0 left-0 right-0 z-50 shadow-[0_4px_80px_rgba(7,7,2,8)]">
          <div className="flex items-center space-x-2">
          <Image
            src="/Assets/brightpath-logo.svg"
            alt="BrightPath logo"
            width={100}
            height={32}
            className="px-5 mx-30"
          />
        </div>

        <ul className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item, i) => {
            if (item.dropdown) {
              return (
                <li
                  key={i}
                  className="relative group"
                  onMouseEnter={() => setOpenMenu(item.name)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button className="flex items-center gap-2 hover:text-red-600 transition">
                    {item.name}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        openMenu === item.name ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openMenu === item.name && (
                      <motion.ul
                        className="absolute top-full left-0 bg-white shadow-lg rounded mt-2 p-2 w-40 z-50"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.dropdown.map((sub, j) => {
                          let href = `/about-us/${sub
                            .toLowerCase()
                            .replace(/\s+/g, '')}`;
                          if (sub === 'About Us') href = '/about-us';
                          if (sub === 'Our Mission') href = '/about-us/ourmission';

                          if (item.name === 'About Us') {
                            if (sub === 'About Us') {
                              return (
                                <li
                                  key={j}
                                  className="hover:bg-red-100 px-3 py-2 rounded transition-colors duration-200"
                                >
                                  <button
                                    onClick={handleAboutUsClick}
                                    className="block w-full text-left"
                                  >
                                    {sub}
                                  </button>
                                </li>
                              );
                            } else if (sub === 'Our Mission') {
                              return (
                                <li
                                  key={j}
                                  className="hover:bg-red-100 px-3 py-2 rounded transition-colors duration-200"
                                >
                                  <button
                                    onClick={handleOurMissionClick}
                                    className="block w-full text-left"
                                  >
                                    {sub}
                                  </button>
                                </li>
                              );
                            }
                          }

                          return (
                            <li
                              key={j}
                              className="hover:bg-red-100 px-3 py-2 rounded transition-colors duration-200"
                            >
                              <Link href={href} className="block w-full">
                                {sub}
                              </Link>
                            </li>
                          );
                        })}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              );
            }

            if (item.name === 'Job Board') {
              return (
                <li key={i}>
                  <button
                    onClick={handleJobBoardClick}
                    className="hover:text-red-600 transition"
                  >
                    {item.name}
                  </button>
                </li>
              );
            }

            return (
              <li key={i}>
                <Link href={item.href!} className="hover:text-red-600 transition">
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center space-x-4">
          <Link href="/register">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full bg-gradient-to-r from-green-900 via-lime-600 to-lime-400 text-white px-7 py-2 rounded-2xl text-sm"
            >
              Register
            </motion.button>
          </Link>
          <Link href="/login">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full border border-green-700 text-green-700 px-7 py-2 rounded-2xl text-sm"
            >
              Login
            </motion.button>
          </Link>
        </div>
      </nav>

      <div className="h-[72px]"></div>

      {showAboutPage && (
        <div className="fixed inset-0 bg-white z-50 overflow-auto">
          <AboutPage />
        </div>
      )}

      {showOurMission && (
        <div className="fixed inset-0 bg-white z-50 overflow-auto">
          <OurMissionPage />
        </div>
      )}

      {showJobBoard && (
        <div className="fixed inset-0 bg-white z-50 overflow-auto">
          <JobFinder />
        </div>
      )}
    </>
  );
}
