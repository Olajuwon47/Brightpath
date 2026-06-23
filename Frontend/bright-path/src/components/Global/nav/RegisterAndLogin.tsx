'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function RegisterAndLogin() {
  return (
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
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="w-full rounded-2xl bg-gradient-to-l from-green-700 via-lime-500 to-lime-300 p-[1px]"
  >
    <button className="w-full bg-white text-green-700 px-8 py-2 rounded-xl text-sm">
      Login
    </button>
  </motion.div>
</Link>
    </div>
  );
}
