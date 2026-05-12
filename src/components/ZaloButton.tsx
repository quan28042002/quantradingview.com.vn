import React from 'react';
import { Users } from 'lucide-react';

const ZaloButton = () => {
  return (
    <a
      href="https://zalo.me/g/mylylx295"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-blue-600 text-white rounded-full hidden md:flex items-center justify-center shadow-2xl hover:bg-blue-700 transition-all hover:scale-110 active:scale-95 group"
      aria-label="Nhóm Zalo Deal Hời"
    >
      <Users className="w-7 h-7" />
      <span className="absolute right-full mr-3 px-3 py-1 bg-white text-slate-900 text-xs font-bold rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
        Nhóm Zalo Deal Hời
      </span>
    </a>
  );
};

export default ZaloButton;
