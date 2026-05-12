import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Zap, Info, Users, ShieldCheck, MessageCircle, TrendingDown } from 'lucide-react';
import { PricingPlan } from '../data/pricingData';
import { officialTradingViewData } from '../data/officialTradingViewData';
import { formatCurrency, formatUSD } from '../utils/formatters';

interface PlanDetailModalProps {
  plan: PricingPlan | null;
  onClose: () => void;
  onBuyNow: (plan: PricingPlan) => void;
}

const PlanDetailModal: React.FC<PlanDetailModalProps> = ({ plan, onClose, onBuyNow }) => {
  if (!plan) return null;

  const officialPrice = officialTradingViewData.plans[plan.tier];
  const durationMonths = parseInt(plan.duration) || 1;
  const officialTotalVND = officialPrice.priceVND * durationMonths;
  const savings = officialTotalVND - plan.priceVND;
  const savingsPercent = Math.round((savings / officialTotalVND) * 100);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors text-slate-600"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="overflow-y-auto p-8 sm:p-12 custom-scrollbar">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-2 mb-4"
                >
                  <span className="px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg shadow-blue-200">
                    {plan.tier}
                  </span>
                  {plan.isPartnerDeal && (
                    <span className="px-4 py-1.5 bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-[0.2em] rounded-full border border-emerald-100">
                      Deal độc quyền đối tác
                    </span>
                  )}
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl sm:text-5xl font-black text-slate-900 mb-2 tracking-tight"
                >
                  {plan.name}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl text-slate-500 font-medium"
                >
                  Thời hạn: {plan.duration}
                </motion.p>
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, type: 'spring' }}
                className="text-left md:text-right"
              >
                <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Giá Quân TradingView</p>
                <div className="text-5xl font-black text-emerald-600 tracking-tighter">
                  {formatCurrency(plan.priceVND)}
                </div>
              </motion.div>
            </div>

            {/* Savings Banner */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 mb-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-white shadow-xl shadow-blue-200"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
                  <TrendingDown className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-lg font-black">Tiết kiệm {savingsPercent}%</p>
                  <p className="text-white/80 font-medium">So với giá gốc {formatCurrency(officialPrice.priceVND)}/tháng</p>
                </div>
              </div>
              <div className="text-center sm:text-right">
                <p className="text-xs font-black text-white/60 uppercase tracking-[0.2em] mb-1">Số tiền bạn giữ lại</p>
                <p className="text-3xl font-black">~{formatCurrency(savings)}</p>
              </div>
            </motion.div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-10">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h4 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-4 flex items-center">
                    <Info className="w-4 h-4 mr-3 text-blue-600" />
                    Mô tả chi tiết
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-lg font-medium">{plan.description}</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <h4 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-4 flex items-center">
                    <Users className="w-4 h-4 mr-3 text-blue-600" />
                    Đối tượng phù hợp
                  </h4>
                  <p className="text-slate-600 leading-relaxed font-medium">{plan.suitableFor}</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <h4 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-4 flex items-center">
                    <Zap className="w-4 h-4 mr-3 text-blue-600" />
                    Lợi ích nổi bật
                  </h4>
                  <ul className="space-y-4">
                    {plan.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start text-slate-700 font-bold">
                        <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mr-4 shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-emerald-600" />
                        </div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              <div className="space-y-10">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <h4 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-4 flex items-center">
                    <ShieldCheck className="w-4 h-4 mr-3 text-blue-600" />
                    Tính năng kỹ thuật
                  </h4>
                  <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100">
                    <ul className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-slate-700 font-bold text-sm">
                          <div className="w-2 h-2 rounded-full bg-blue-600 mr-4 mt-2 shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {plan.note && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 }}
                    className="p-6 bg-amber-50 rounded-2xl border border-amber-100"
                  >
                    <p className="text-[10px] text-amber-800 font-black uppercase tracking-[0.2em] mb-2">Ghi chú từ Quân TradingView</p>
                    <p className="text-sm text-amber-700 font-bold leading-relaxed">{plan.note}</p>
                  </motion.div>
                )}

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="pt-4"
                >
                  <button
                    onClick={() => plan.note !== 'Hết hàng' && onBuyNow(plan)}
                    disabled={plan.note === 'Hết hàng'}
                    className={`w-full py-6 px-8 rounded-3xl font-black text-xl transition-all flex items-center justify-center shadow-2xl group ${
                      plan.note === 'Hết hàng'
                      ? 'bg-slate-300 text-slate-500 cursor-not-allowed shadow-none'
                      : 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200'
                    }`}
                  >
                    {plan.note === 'Hết hàng' ? 'Hết hàng' : (
                      <>
                        <Zap className="w-8 h-8 mr-4 group-hover:rotate-12 transition-transform" />
                        Mua ngay
                      </>
                    )}
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PlanDetailModal;
