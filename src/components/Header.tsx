import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Bảng giá', href: '#pricing' },
    { name: 'So sánh', href: '#comparison' },
    { name: 'Tính năng', href: '#features' },
    { name: 'Cam kết', href: '#benefits' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Liên hệ', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-100' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 via-fuchsia-500 to-amber-400 rounded-xl blur-[2px] opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center p-1.5 shadow-xl border border-white/10">
                  <div className="relative w-full h-full">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white">
                      <path d="M17.5 19C15.0147 19 13 16.9853 13 14.5C13 12.0147 15.0147 10 17.5 10C19.9853 10 22 12.0147 22 14.5C22 16.9853 19.9853 19 17.5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 14.5H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 18C10 18 10 18 10 18C10 18 10 18 10 18C10 18 10 18 10 18C10 18 10 18 10 18V18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 10C12 10 12 10 12 10C12 10 12 10 12 10C12 10 12 10 12 10C12 10 12 10 12 10V10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2.5 10C3.32843 10 4 9.32843 4 8.5C4 7.67157 3.32843 7 2.5 7C1.67157 7 1 7.67157 1 8.5C1 9.32843 1.67157 10 2.5 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 11.5V11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5.5 14C5.5 14 5.5 14 5.5 14C5.5 14 5.5 14 5.5 14C5.5 14 5.5 14 5.5 14C5.5 14 5.5 14 5.5 14V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 8C8 8 8 8 8 8C8 8 8 8 8 8C8 8 8 8 8 8C8 8 8 8 8 8V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4.5 19H12.5C14.433 19 16 17.433 16 15.5C16 13.567 14.433 12 12.5 12C12.5 10.067 10.933 8.5 9 8.5C7.067 8.5 5.5 10.067 5.5 12C3.567 12 2 13.567 2 15.5C2 17.433 3.567 19 5.5 19Z" fill="white" className="opacity-20"/>
                      <path d="M12.5 19C14.433 19 16 17.433 16 15.5C16 13.567 14.433 12 12.5 12C12.5 10.067 10.933 8.5 9 8.5C7.067 8.5 5.5 10.067 5.5 12C3.567 12 2 13.567 2 15.5C2 17.433 3.567 19 5.5 19H12.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5.5 15.5L8 13L10.5 15L13.5 12" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-slate-900 leading-none">
                  Quân <span className="text-blue-600">TradingView</span>
                </span>
                <span className="text-[8px] font-black uppercase tracking-[0.3em] text-slate-400 mt-1">Premium Services</span>
              </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#pricing" 
              className="inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-black rounded-full shadow-xl shadow-blue-200 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition-all"
            >
              Mua ngay
            </a>
            <a 
              href="https://zalo.me/0583156019" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 border border-slate-200 text-sm font-semibold rounded-full text-slate-600 hover:bg-slate-50 focus:outline-none transition-all"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Tư vấn
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white z-50 md:hidden shadow-2xl flex flex-col"
            >
              <div className="p-6 flex justify-between items-center border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center p-1 border border-white/10">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white">
                      <path d="M12.5 19C14.433 19 16 17.433 16 15.5C16 13.567 14.433 12 12.5 12C12.5 10.067 10.933 8.5 9 8.5C7.067 8.5 5.5 10.067 5.5 12C3.567 12 2 13.567 2 15.5C2 17.433 3.567 19 5.5 19H12.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5.5 15.5L8 13L10.5 15L13.5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-xl font-black tracking-tighter text-slate-900 leading-none">
                    Quân <span className="text-blue-600">TV</span>
                  </span>
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 bg-slate-100 rounded-full text-slate-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex-grow overflow-y-auto p-6 space-y-2">
                {navLinks.map((link, idx) => (
                  <motion.a 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-4 text-lg font-black text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-2xl transition-all"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
              <div className="p-6 border-t border-slate-100">
                <a 
                  href="https://zalo.me/0583156019" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-5 py-4 border border-transparent text-lg font-black rounded-2xl shadow-xl shadow-blue-200 text-white bg-blue-600 hover:bg-blue-700"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Chat Zalo ngay
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
