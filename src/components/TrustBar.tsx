import React from 'react';

const TrustBar = () => {
  const stats = [
    { label: "Đối tác", value: "TradingView" },
    { label: "Hỗ trợ", value: "Kỹ thuật 1-1" },
    { label: "Bảo hành", value: "Toàn thời gian" },
    { label: "Kinh nghiệm", value: "Từ năm 2026" }
  ];

  return (
    <div className="bg-white border-y border-slate-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">{stat.label}</p>
              <p className="text-lg font-bold text-slate-900">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
