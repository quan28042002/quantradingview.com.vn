import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Users, Sparkles, TrendingUp, Globe, BarChart3 } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import DynamicChart from './DynamicChart';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const rotate = useTransform(scrollY, [0, 500], [0, 45]);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background patterns with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </motion.div>

      {/* Floating Decorative Elements */}
      <motion.div 
        style={{ y: y2, rotate }}
        className="absolute top-20 right-[10%] w-64 h-64 bg-blue-100/40 rounded-full blur-3xl -z-10"
      ></motion.div>
      <motion.div 
        style={{ y: y1, rotate: -rotate }}
        className="absolute bottom-20 left-[5%] w-80 h-80 bg-indigo-100/30 rounded-full blur-3xl -z-10"
      ></motion.div>

      {/* Extra Floating Icons */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 left-[15%] p-4 bg-white rounded-2xl shadow-2xl border border-slate-100 hidden xl:block z-10"
      >
        <TrendingUp className="w-8 h-8 text-emerald-500" />
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 right-[15%] p-4 bg-white rounded-2xl shadow-2xl border border-slate-100 hidden xl:block z-10"
      >
        <BarChart3 className="w-8 h-8 text-blue-500" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-black uppercase tracking-[0.2em] mb-8 border border-blue-100 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 mr-2" />
              Đối tác TradingView chính thức
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight mb-8"
            >
              Nâng Tầm Phân Tích Với <span className="text-blue-600">TradingView Premium</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed font-medium"
            >
              Sở hữu bộ công cụ phân tích kỹ thuật mạnh mẽ nhất thế giới. Deal đối tác độc quyền từ Quân TradingView giúp bạn tối ưu chi phí và hiệu quả đầu tư.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-5 mb-12"
            >
              <motion.a 
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                href="#pricing" 
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-black rounded-2xl text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200"
              >
                Mua ngay
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                href="https://zalo.me/0583156019" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-black rounded-2xl text-slate-900 bg-white border border-slate-200 hover:bg-slate-50 transition-all hover:shadow-lg"
              >
                Tư vấn 1-1
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                href="https://zalo.me/g/mylylx295" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-black rounded-2xl text-emerald-700 bg-emerald-50 border border-emerald-100 hover:bg-emerald-100 transition-all hover:shadow-lg"
              >
                <Users className="w-5 h-5 mr-2" />
                Săn Deal Hời
              </motion.a>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: ShieldCheck, text: "Dùng riêng 100%" },
                { icon: Zap, text: "Bảo hành trọn đời" },
                { icon: Users, text: "Hỗ trợ 1-1 tận tâm" },
                { icon: CheckCircle2, text: "Deal đối tác độc quyền" }
              ].map((item, idx) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + idx * 0.1, duration: 0.5 }}
                  key={idx} 
                  className="flex items-center text-sm font-bold text-slate-700"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center mr-3">
                    <item.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  {item.text}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex flex-col items-center justify-center"
          >
            {/* Dynamic Chart - Now the main focus of the right column */}
            <motion.div 
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-30 w-full max-w-lg"
            >
              <div className="absolute -inset-10 bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>
              <div className="relative p-2 bg-white/50 backdrop-blur-sm rounded-[2.5rem] border border-white/50 shadow-2xl">
                <DynamicChart />
              </div>
            </motion.div>

            {/* Floating elements */}
            <motion.div 
              animate={{ 
                y: [0, -15, 0],
                x: [0, 5, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 right-0 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-4 z-40"
            >
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center shadow-inner">
                <CheckCircle2 className="w-8 h-8 text-emerald-600" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-1">Hoạt động từ</p>
                <p className="text-xl font-black text-slate-900 tracking-tight">Năm 2026</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ 
                y: [0, 15, 0],
                x: [0, -5, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 left-0 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-4 z-40"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center shadow-inner">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-1">Phạm vi</p>
                <p className="text-xl font-black text-slate-900 tracking-tight">Toàn cầu</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
