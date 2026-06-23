"use client";
import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-green-950 via-green-800 to-lime-500 justify-center text-white">
      <div className="justify-center">
        <div className="mx-auto py-8 grid md:grid-cols-4 gap-8 max-md:grid-cols-2 max-sm:grid-cols-1">
          {/* Logo and social section */}
          <div className="pl-20 max-md:pl-10 max-sm:pl-5">
            <Image
              src="/Assets/am.png"
              alt="BrightPath logo"
              width={150}
              height={50}
              className="mb-4 w-24 h-auto max-sm:w-20 max-sm:h-auto"
            />
            <p className="text-sm font-semibold pt-5">
              BrightPath is a modern learning platform dedicated to helping
              schools, instructors, and learners connect through quality education,
              practical skills, and career growth opportunities.
            </p>

            <div className="mt-6 flex space-x-4 max-sm:justify-center">
              {/* Facebook */}
              <a href="https://facebook.com" className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 512 512">
                  <path
                    fill="#ebe6e6"
                    d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5
              -1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
                  />
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com/mrmrs_" className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 448 512">
                  <path
                    fill="#ebe6e6"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  />
                </svg>
              </a>
              {/* Twitter */}
              <a href="https://twitter.com/mrmrs_" className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 512 512">
                  <path
                    fill="#ebe6e6"
                    d="M389.2 48h70.6L305.6 224.2 487
              464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                  />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://LinkedIn.com" className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 448 512">
                  <path
                    fill="#ebe6e6"
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9
            54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* QUICK ONE */}
          <div className="pl-40 py-5 max-md:pl-10 max-sm:pl-5">
            <h1 className="text-md font-semibold mb-3">QUICK ONE</h1>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Blogs</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* BECOME AN INSTRUCTOR */}
          <div className="pl-15 py-5 max-md:pl-10 max-sm:pl-5">
            <h1 className="text-md font-semibold mb-3">BECOME AN INSTRUCTOR</h1>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Register</a></li>
              <li><a href="#" className="hover:underline">Learn More</a></li>
              <li><a href="#" className="hover:underline">Areas We</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* EMPLOYER */}
          <div className="pl-20 py-5 max-md:pl-10 max-sm:pl-5">
            <h1 className="text-md font-semibold mb-3">EMPLOYER</h1>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Register</a></li>
              <li><a href="#" className="hover:underline">Talent Pool</a></li>
              <li><a href="#" className="hover:underline">Verify Card</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white opacity-30 my-6 mx-6"></div>
        <div className="text-center text-sm pb-4">
          <p>© 2025 BrightPath. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
