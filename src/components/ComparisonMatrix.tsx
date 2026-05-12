import React from 'react';
import { Check, X, ChevronRight } from 'lucide-react';

const ComparisonMatrix = () => {
  const specs = [
    { name: "Biểu đồ/tab", essential: "2", plus: "4", premium: "8" },
    { name: "Chỉ báo trên 1 biểu đồ", essential: "5", plus: "10", premium: "25" },
    { name: "Cảnh báo giá", essential: "20", plus: "100", premium: "400" },
    { name: "Cảnh báo kỹ thuật", essential: "20", plus: "100", premium: "400" },
    { name: "Kết nối biểu đồ", essential: "10", plus: "20", premium: "50" },
    { name: "Chỉ báo trên chỉ báo", essential: "1", plus: "7", premium: "20" },
    { name: "Dữ liệu Backtest", essential: "10k thanh", plus: "10k thanh", premium: "20k thanh" },
    { name: "Không quảng cáo", essential: true, plus: true, premium: true },
    { name: "Hồ sơ khối lượng", essential: true, plus: true, premium: true },
    { name: "Khung thời gian tùy chỉnh", essential: true, plus: true, premium: true },
    { name: "Trích xuất dữ liệu biểu đồ", essential: false, plus: true, premium: true },
    { name: "Biểu đồ Renko / Kagi", essential: false, plus: true, premium: true },
    { name: "Cảnh báo theo giây", essential: false, plus: false, premium: true },
    { name: "Cảnh báo không hết hạn", essential: false, plus: false, premium: true },
    { name: "Khoảng thời gian tính giây", essential: false, plus: false, premium: true },
  ];

  const renderValue = (val: string | boolean) => {
    if (typeof val === 'boolean') {
      return val ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-slate-300 mx-auto" />;
    }
    return <span className="text-sm font-bold text-slate-700">{val}</span>;
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ma Trận So Sánh Plan</h2>
          <p className="text-slate-600">So sánh chi tiết các thông số kỹ thuật giữa các gói.</p>
        </div>

        <div className="relative">
          <div className="lg:hidden absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="overflow-x-auto custom-scrollbar pb-4 -mx-4 px-4 lg:mx-0 lg:px-0">
            <table className="w-full border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b-2 border-slate-100">
                  <th className="py-6 px-4 text-left text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Tính năng</th>
                  <th className="py-6 px-4 text-center">
                    <span className="text-lg font-black text-slate-900">Essential</span>
                  </th>
                  <th className="py-6 px-4 text-center bg-blue-50/50 rounded-t-3xl">
                    <span className="text-lg font-black text-blue-600">Plus</span>
                  </th>
                  <th className="py-6 px-4 text-center">
                    <span className="text-lg font-black text-amber-600">Premium</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {specs.map((spec, idx) => (
                  <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-4 text-sm font-bold text-slate-600">{spec.name}</td>
                    <td className="py-4 px-4 text-center">{renderValue(spec.essential)}</td>
                    <td className="py-4 px-4 text-center bg-blue-50/30">{renderValue(spec.plus)}</td>
                    <td className="py-4 px-4 text-center">{renderValue(spec.premium)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="lg:hidden flex justify-center mt-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-widest">
              <ChevronRight className="w-3 h-3 animate-pulse" />
              Vuốt sang để xem thêm
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonMatrix;
