"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavItem } from "@/types";
import RegisterAndLogin from "./RegisterAndLogin";

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  {
    label: "School",
    href: "/school",
  },
  {
    label: "Pathway",
    href: "/apathway",
    dropdown: [
      { label: "Student", href: "/apathway/students" },
      { label: "Instructor", href: "/apathway/instructor" },
      { label: "Employer", href: "/apathway/employer" },
    ],
  },
  { href: "/job-board", label: "Job Board" },
  { href: "/subscriptions", label: "Subscription Plans" },
  {
    label: "About Us",
    href: "/about-us",
    dropdown: [
      { label: "What We Do", href: "/about-us?section=what-we-do" },
      { label: "Our Mission", href: "/about-us?section=our-mission" },
      { label: "Team", href: "/about-us?section=team" },
    ],
  },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <>
      <nav className="w-full px-6 py-1 bg-white flex justify-between items-center fixed top-0 left-0 right-0 z-50 shadow-md">
        {/* Logo */}
        <div className="flex items-center space-x-2 min-w-0">
          <Link href="/">
            <Image
              src="/image/logo.png"
              alt="TPN Logo"
              width={120}
              height={42}
              className="px-3 mx-30 max-w-[200px]"
              priority
              sizes="(max-width: 768px) 80vw, 100px"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item, i) => {
            if (item.dropdown) {
              return (
                <li
                  key={i}
                  className="relative group"
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2 hover:text-lime-600 transition ${
                        pathname === item.href
                          ? "text-lime-600 font-semibold"
                          : ""
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          openMenu === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </Link>
                  ) : (
                    <span className="flex items-center gap-2 cursor-default">
                      {item.label}
                      <ChevronDown size={14} />
                    </span>
                  )}

                  <AnimatePresence>
                    {openMenu === item.label && (
                      <motion.ul
                        className="absolute top-full left-0 bg-white shadow-lg rounded mt-2 p-2 w-40 z-50"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.dropdown.map((sub, j) => (
                          <li
                            key={j}
                            className="hover:bg-lime-100 px-3 py-2 rounded transition-colors duration-200"
                          >
                            <Link
                              href={sub.href}
                              className="block w-full text-left"
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              );
            }

            // ✅ Only render Link if item.href is defined
            return item.href ? (
              <li key={i}>
                <Link
                  href={item.href}
                  className={`hover:text-lime-600 transition ${
                    pathname === item.href ? "text-lime-600 font-semibold" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ) : null;
          })}
        </ul>

        {/* Auth */}
        <div className="hidden md:block">
          <RegisterAndLogin />
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden text-xl p-3 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
          aria-label="Open menu"
          aria-controls="mobile-sidebar"
          aria-expanded={sidebarOpen}
        >
          <FaBars />
        </button>
      </nav>

      {/* Offset for navbar */}
      <div className="h-[72px]"></div>

      {/* Mobile Sidebar & Backdrop */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSidebarOpen(false)}
              aria-label="Close menu backdrop"
            />
            {/* Sidebar */}
            <motion.div
              id="mobile-sidebar"
              role="dialog"
              aria-modal="true"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-64 max-w-full h-full bg-lime-900/90 text-white shadow-lg z-50 p-5 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Menu</h2>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-3 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
                  aria-label="Close menu"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              <ul className="space-y-4 text-sm font-medium">
                {navItems.map((item, i) => (
                  <li key={i}>
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() =>
                            setMobileDropdown(
                              mobileDropdown === item.label ? null : item.label
                            )
                          }
                          className="flex justify-between items-center w-full text-left py-2 px-2 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
                          aria-expanded={mobileDropdown === item.label}
                          aria-controls={`mobile-dropdown-${i}`}
                        >
                          {item.label}
                          <ChevronDown
                            size={18}
                            className={`transition-transform ${
                              mobileDropdown === item.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {mobileDropdown === item.label && (
                          <ul
                            className="ml-4 mt-2 space-y-2"
                            id={`mobile-dropdown-${i}`}
                          >
                            {item.dropdown.map((sub, j) => (
                              <li key={j}>
                                <Link
                                  href={sub.href}
                                  className="block hover:text-lime-600 py-2 px-2 rounded"
                                  onClick={() => setSidebarOpen(false)}
                                >
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : item.href ? (
                      <Link
                        href={item.href}
                        className="block hover:text-lime-600 py-2 px-2 rounded"
                        onClick={() => setSidebarOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : null}
                  </li>
                ))}
              </ul>

              {/* Auth in mobile */}
              <div className="mt-14">
                <RegisterAndLogin />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
