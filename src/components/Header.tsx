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
            <a href="#" className="text-2xl font-bold tracking-tighter text-slate-900">
              Quân <span className="text-blue-600">TradingView</span>
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
                <span className="text-xl font-black tracking-tighter text-slate-900">
                  Quân <span className="text-blue-600">TV</span>
                </span>
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
