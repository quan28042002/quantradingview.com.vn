import React from 'react';
import { officialTradingViewData } from '../data/officialTradingViewData';
import { formatCurrency, formatUSD } from '../utils/formatters';
import { TrendingDown, ShieldCheck, Zap, MessageCircle } from 'lucide-react';

import { PricingPlan, pricingData } from '../data/pricingData';

interface OfficialComparisonProps {
  onBuyNow: (plan: PricingPlan) => void;
}

const OfficialComparison: React.FC<OfficialComparisonProps> = ({ onBuyNow }) => {
  const plans = [
    { 
      tier: 'Essential', 
      id: 'essential-1m',
      officialVND: officialTradingViewData.plans.essential.priceVND, 
      quan: 250000, 
      save: officialTradingViewData.plans.essential.priceVND - 250000 
    },
    { 
      tier: 'Plus', 
      id: 'plus-1m',
      officialVND: officialTradingViewData.plans.plus.priceVND, 
      quan: 299000, 
      save: officialTradingViewData.plans.plus.priceVND - 299000 
    },
    { 
      tier: 'Premium', 
      id: 'premium-1m',
      officialVND: officialTradingViewData.plans.premium.priceVND, 
      quan: 399000, 
      save: officialTradingViewData.plans.premium.priceVND - 399000 
    },
  ];

  const handleBuy = (planId: string) => {
    const plan = pricingData.find(p => p.id === planId);
    if (plan) onBuyNow(plan);
  };

  return (
    <section id="comparison" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-widest mb-4 border border-blue-100">
            Lợi ích tài chính
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">So Sánh Với Giá Chính Thức</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Nhờ deal đối tác độc quyền, Quân TradingView mang đến mức giá tối ưu nhất cho nhà giao dịch Việt Nam.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.tier} className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden flex flex-col">
              <div className="p-8 border-b border-slate-50">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-slate-900">{plan.tier}</h3>
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Giá Quân TradingView</p>
                    <p className="text-3xl font-black text-blue-600">{formatCurrency(plan.quan)}<span className="text-sm font-medium text-slate-400">/tháng</span></p>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                    <p className="text-xs font-bold text-slate-500">Giá Official</p>
                    <p className="text-sm font-bold text-slate-700">{formatCurrency(plan.officialVND)}/tháng</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8 bg-blue-600 text-white flex-grow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <TrendingDown className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-blue-100 uppercase tracking-widest">Tiết kiệm ngay</p>
                    <p className="text-xl font-bold">~{formatCurrency(plan.save)}/tháng</p>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-sm font-medium text-blue-50">
                    <ShieldCheck className="w-4 h-4 mr-2" />
                    Deal đối tác độc quyền
                  </li>
                  <li className="flex items-center text-sm font-medium text-blue-50">
                    <ShieldCheck className="w-4 h-4 mr-2" />
                    Hỗ trợ kỹ thuật 1-1
                  </li>
                  <li className="flex items-center text-sm font-medium text-blue-50">
                    <ShieldCheck className="w-4 h-4 mr-2" />
                    Bảo hành trọn đời
                  </li>
                </ul>

                <button 
                  onClick={() => handleBuy(plan.id)}
                  className="block w-full py-3 px-4 bg-white text-blue-600 text-center font-bold rounded-xl hover:bg-blue-50 transition-colors"
                >
                  Mua ngay
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400 italic">
            * Giá official tham chiếu được lấy từ trang pricing TradingView, có thể thay đổi theo thời điểm hoặc khu vực.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfficialComparison;
