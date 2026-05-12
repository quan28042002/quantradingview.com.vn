import React, { useState, useEffect, useRef } from 'react';
import { PricingPlan, pricingData } from '../data/pricingData';
import { officialTradingViewData } from '../data/officialTradingViewData';
import { formatCurrency, formatUSD } from '../utils/formatters';
import { Check, MessageCircle, TrendingDown, Info, ChevronRight, Zap, Users, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PlanExplorerProps {
  selectedPlan: PricingPlan | null;
  onBuyNow: (plan: PricingPlan) => void;
}

const PlanExplorer: React.FC<PlanExplorerProps> = ({ selectedPlan: initialSelectedPlan, onBuyNow }) => {
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan>(initialSelectedPlan || pricingData[0]);
  const explorerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (initialSelectedPlan) {
      setSelectedPlan(initialSelectedPlan);
      explorerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [initialSelectedPlan]);

  const officialPrice = officialTradingViewData.plans[selectedPlan.tier];
  
  // Calculate savings
  // Duration in months (approximate)
  const durationMonths = parseInt(selectedPlan.duration) || 1;
  const officialTotalVND = officialPrice.priceVND * durationMonths;
  const savings = officialTotalVND - selectedPlan.priceVND;
  const savingsPercent = Math.round((savings / officialTotalVND) * 100);

  return (
    <section id="explorer" ref={explorerRef} className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Khám Phá Chi Tiết Từng Gói</h2>
          <p className="text-slate-600">Bấm vào từng gói để xem giải thích chi tiết lợi ích và tính năng.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left: Quick Selector */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6 hidden lg:block">Danh sách gói</h3>
            
            {/* Mobile Selector: Horizontal Scroll */}
            <div className="lg:hidden flex overflow-x-auto pb-4 gap-3 no-scrollbar -mx-4 px-4">
              {pricingData.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan)}
                  className={`flex-shrink-0 px-6 py-3 rounded-2xl border font-black text-sm transition-all whitespace-nowrap ${
                    selectedPlan.id === plan.id 
                    ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200' 
                    : 'bg-white border-slate-200 text-slate-600'
                  }`}
                >
                  {plan.name}
                </button>
              ))}
            </div>

            {/* Desktop Selector: Vertical List */}
            <div className="hidden lg:block max-h-[600px] overflow-y-auto pr-4 space-y-3 custom-scrollbar">
              {pricingData.map((plan, idx) => (
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all flex items-center justify-between group relative overflow-hidden ${
                    selectedPlan.id === plan.id 
                    ? 'bg-white border-blue-500 shadow-xl ring-1 ring-blue-500' 
                    : 'bg-white border-slate-200 hover:border-blue-300'
                  }`}
                >
                  {selectedPlan.id === plan.id && (
                    <motion.div 
                      layoutId="active-indicator"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-600"
                    />
                  )}
                  <div className="relative z-10">
                    <p className={`text-[10px] font-black uppercase tracking-[0.2em] mb-1.5 ${
                      selectedPlan.id === plan.id ? 'text-blue-600' : 'text-slate-400'
                    }`}>
                      {plan.tier}
                    </p>
                    <p className="font-black text-slate-900 tracking-tight">{plan.name}</p>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                    selectedPlan.id === plan.id ? 'text-blue-600 translate-x-1' : 'text-slate-300 group-hover:text-slate-400'
                  }`} />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Detail Panel */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <div
                key={selectedPlan.id}
                className="bg-white rounded-3xl lg:rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden"
              >
                <div className="p-6 sm:p-10">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                          {selectedPlan.tier}
                        </span>
                        {selectedPlan.isPartnerDeal && (
                          <span className="px-3 py-1 bg-green-50 text-green-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-green-100">
                            Deal độc quyền đối tác
                          </span>
                        )}
                      </div>
                      <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">{selectedPlan.name}</h3>
                      <p className="text-slate-500 font-bold mt-1">Thời hạn: {selectedPlan.duration}</p>
                    </div>
                    <div className="text-left sm:text-right pt-4 sm:pt-0 border-t sm:border-0 border-slate-100">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Giá Quân TradingView</p>
                      <div className="text-4xl sm:text-5xl font-black text-emerald-600 tracking-tighter">{formatCurrency(selectedPlan.priceVND)}</div>
                    </div>
                  </div>

                  {/* Savings Card */}
                  <div className="bg-blue-50 rounded-3xl p-6 mb-10 flex flex-col sm:flex-row items-center justify-between gap-6 border border-blue-100 shadow-sm">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200 shrink-0">
                        <TrendingDown className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <p className="text-base font-black text-blue-900">Tiết kiệm ước tính {savingsPercent}%</p>
                        <p className="text-sm text-blue-700 font-medium">So với giá gốc {formatCurrency(officialPrice.priceVND)}/tháng</p>
                      </div>
                    </div>
                    <div className="text-center sm:text-right w-full sm:w-auto pt-4 sm:pt-0 border-t sm:border-0 border-blue-200/50">
                      <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] mb-1">Bạn tiết kiệm được</p>
                      <p className="text-2xl font-black text-blue-700">~{formatCurrency(savings)}</p>
                    </div>
                  </div>

                  {/* Content Grid */}
                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-10">
                      <div>
                        <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em] mb-4 flex items-center">
                          <Info className="w-4 h-4 mr-3 text-blue-600" />
                          Mô tả gói
                        </h4>
                        <p className="text-slate-600 leading-relaxed font-medium text-lg">{selectedPlan.description}</p>
                      </div>

                      <div>
                        <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em] mb-4 flex items-center">
                          <Users className="w-4 h-4 mr-3 text-blue-600" />
                          Ai nên mua gói này?
                        </h4>
                        <p className="text-slate-600 leading-relaxed font-medium">{selectedPlan.suitableFor}</p>
                      </div>

                      <div>
                        <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em] mb-4 flex items-center">
                          <Zap className="w-4 h-4 mr-3 text-blue-600" />
                          Lợi ích chính
                        </h4>
                        <ul className="space-y-4">
                          {selectedPlan.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start text-slate-700 font-bold">
                              <Check className="w-5 h-5 text-emerald-500 mr-3 shrink-0 mt-0.5" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-10">
                      <div>
                        <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em] mb-4 flex items-center">
                          <ShieldCheck className="w-4 h-4 mr-3 text-blue-600" />
                          Tính năng cụ thể
                        </h4>
                        <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100">
                          <ul className="space-y-4">
                            {selectedPlan.features.map((feature, i) => (
                              <li key={i} className="flex items-start text-sm text-slate-700 font-bold">
                                <div className="w-2 h-2 rounded-full bg-blue-600 mr-4 mt-2 shrink-0"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {selectedPlan.note && (
                        <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100">
                          <p className="text-[10px] text-amber-800 font-black uppercase tracking-[0.2em] mb-2">Ghi chú quan trọng</p>
                          <p className="text-sm text-amber-700 font-bold leading-relaxed">{selectedPlan.note}</p>
                        </div>
                      )}

                      <button
                        onClick={() => selectedPlan.note !== 'Hết hàng' && onBuyNow(selectedPlan)}
                        disabled={selectedPlan.note === 'Hết hàng'}
                        className={`w-full py-6 px-8 rounded-3xl font-black text-xl transition-all flex items-center justify-center shadow-2xl group ${
                          selectedPlan.note === 'Hết hàng'
                          ? 'bg-slate-300 text-slate-500 cursor-not-allowed shadow-none'
                          : 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200'
                        }`}
                      >
                        {selectedPlan.note === 'Hết hàng' ? 'Hết hàng' : (
                          <>
                            <Zap className="w-8 h-8 mr-4 group-hover:rotate-12 transition-transform" />
                            Mua ngay
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanExplorer;
