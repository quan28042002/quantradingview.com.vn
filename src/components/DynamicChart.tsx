import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const DynamicChart = () => {
  const [candles, setCandles] = useState<{ height: number; type: 'up' | 'down'; id: number }[]>([]);
  
  useEffect(() => {
    // Initial candles
    const initialCandles = Array.from({ length: 20 }).map((_, i) => ({
      height: Math.floor(Math.random() * 60) + 20,
      type: Math.random() > 0.5 ? 'up' : 'down',
      id: i
    }));
    setCandles(initialCandles);

    const interval = setInterval(() => {
      setCandles(prev => {
        const nextId = prev[prev.length - 1].id + 1;
        const newCandle = {
          height: Math.floor(Math.random() * 60) + 20,
          type: Math.random() > 0.5 ? 'up' : 'down',
          id: nextId
        };
        return [...prev.slice(1), newCandle];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 p-4 flex items-end gap-1">
      {/* Grid Lines */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-10 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-full h-px bg-white"></div>
        ))}
      </div>

      {/* Indicator Line (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" preserveAspectRatio="none">
        <motion.path
          d="M 0 100 Q 50 80 100 120 T 200 90 T 300 110 T 400 70 T 500 100"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {/* Candles */}
      <div className="flex items-end gap-1.5 w-full h-full relative z-0">
        {candles.map((candle) => (
          <motion.div
            key={candle.id}
            layout
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className={`w-2 sm:w-3 rounded-t-sm transition-colors ${
              candle.type === 'up' ? 'bg-emerald-500' : 'bg-rose-500'
            }`}
            style={{ height: `${candle.height}%` }}
          />
        ))}
      </div>

      {/* Label */}
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Live Market Data</span>
      </div>
    </div>
  );
};

export default DynamicChart;
