import React from 'react';
import { MessageCircle } from 'lucide-react';

const MobileCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-white/80 backdrop-blur-lg border-t border-slate-100 md:hidden">
      <a
        href="https://zalo.me/0583156019"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-full py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-200 active:scale-95 transition-transform"
      >
        <MessageCircle className="w-5 h-5 mr-2" />
        Nhận tư vấn qua Zalo ngay
      </a>
    </div>
  );
};

export default MobileCTA;
