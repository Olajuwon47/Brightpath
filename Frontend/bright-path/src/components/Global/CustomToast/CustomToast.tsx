// components/CustomToast.tsx
import React from 'react';
import Image from 'next/image';

interface CustomToastProps {
  message: string;
}

const CustomToast: React.FC<CustomToastProps> = ({ message }) => {
  return (
    <div className="relative flex items-center gap-3 px-7 py-7 border border-transparent text-base font-medium rounded-md bg-gradient-to-tl to-blue-600 from-pink-600 text-white shadow-sm overflow-hidden">
      <Image src="/Assets/brightpath-logo.svg" alt="BrightPath logo" width={24} height={24} />
      <span>{message}</span>
      <div className="absolute bottom-0 left-0 h-[4px] bg-white animate-toast-timer" />
    </div>
  );
};

export default CustomToast;
