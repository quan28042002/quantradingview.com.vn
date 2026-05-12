import React, { useState, useEffect } from 'react';
import { X, Copy, CheckCircle2, User, Phone, Facebook, MessageCircle, ArrowRight, TrendingDown, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PricingPlan } from '../data/pricingData';
import { formatCurrency } from '../utils/formatters';

interface CheckoutModalProps {
  plan: PricingPlan | null;
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ plan, onClose }) => {
  const [orderId, setOrderId] = useState('');
  const [copied, setCopied] = useState<string | null>(null);
  const [step, setStep] = useState(1); // 1: Info, 2: Payment
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerFb, setCustomerFb] = useState('');

  useEffect(() => {
    if (plan) {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let result = 'TV-';
      for (let i = 0; i < 6; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      setOrderId(result);
    }
  }, [plan]);

  if (!plan) return null;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const accounts = [
    { bank: "ACB", number: "4108721", owner: "NGUYEN DINH QUAN", code: 'acb' },
    { bank: "MB Bank", number: "0800104437008", owner: "NGUYEN DINH QUAN", code: 'MB' }
  ];

  const transferNote = `${plan.name} ${orderId}`;

  const notifyAdmin = async (type: 'DRAFT' | 'CONFIRMED') => {
    try {
      await fetch('/api/notify-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderData: {
            type,
            customer: {
              name: customerName,
              phone: customerPhone,
              fb: customerFb
            },
            plan: plan.name,
            orderId,
            total: formatCurrency(plan.priceVND)
          }
        })
      });
    } catch (e) {
      console.error('Notification failed:', e);
    }
  };

  const handleProceedToPayment = () => {
    if (customerName && customerPhone) {
      setStep(2);
      notifyAdmin('DRAFT'); 
    }
  };

  const handleZaloConfirm = async () => {
    await notifyAdmin('CONFIRMED');
    const text = `Chào Quân TradingView, tôi đã thanh toán đơn hàng ${orderId}.\n\n--- THÔNG TIN KHÁCH HÀNG ---\n- Họ tên: ${customerName}\n- SĐT/Zalo: ${customerPhone}\n- Facebook/Link: ${customerFb || 'Không có'}\n\n--- THÔNG TIN GÓI ---\n- Gói: ${plan.name}\n- Số tiền: ${formatCurrency(plan.priceVND)}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://zalo.me/0583156019?text=${encodedText}`, '_blank');
  };

  return (
    <div 
      className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-6 bg-slate-900/80 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl h-[92vh] sm:h-auto max-h-[90vh] bg-white rounded-t-[2.5rem] sm:rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 bg-slate-100/50 hover:bg-slate-200 text-slate-900 rounded-full transition-all z-50 shadow-sm backdrop-blur-md"
          title="Đóng"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Left Sidebar: Order Details */}
        <div className="md:w-[32%] bg-slate-50 p-6 sm:p-8 border-b md:border-b-0 md:border-r border-slate-100 shrink-0">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center p-1.5 border border-white/10 shadow-lg">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white">
                <path d="M12.5 19C14.433 19 16 17.433 16 15.5C16 13.567 14.433 12 12.5 12C12.5 10.067 10.933 8.5 9 8.5C7.067 8.5 5.5 10.067 5.5 12C3.567 12 2 13.567 2 15.5C2 17.433 3.567 19 5.5 19H12.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.5 15.5L8 13L10.5 15L13.5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black tracking-tight text-slate-900 leading-none">Quân Tradingview</span>
              <span className="text-[7px] font-black uppercase tracking-widest text-blue-600 mt-1">Official Provider</span>
            </div>
          </div>

          <div className="inline-flex items-center px-2 py-0.5 bg-blue-50 text-blue-700 text-[9px] font-black uppercase tracking-widest rounded mb-3">
            Thông tin đơn hàng
          </div>
          
          <div className="flex items-center justify-between md:block">
            <div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-tight mb-1">{plan.name}</h3>
              <p className="text-xs text-slate-500">{plan.duration}</p>
            </div>
            <div className="text-right md:text-left mt-0 md:mt-6 pt-0 md:pt-6 border-t border-slate-200">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Tổng cộng</p>
              <p className="text-xl sm:text-2xl font-black text-blue-600 tracking-tight">{formatCurrency(plan.priceVND)}</p>
            </div>
          </div>

          <div className="hidden md:block mt-8 space-y-4">
            <div className="flex items-center gap-2 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
              <CheckCircle2 className="w-3 h-3 text-green-500" />
              Tài khoản dùng riêng 100%
            </div>
            <div className="flex items-center gap-2 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
              <CheckCircle2 className="w-3 h-3 text-green-500" />
              Bảo hành trọn đời
            </div>
            <div className="flex items-center gap-2 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
              <CheckCircle2 className="w-3 h-3 text-green-500" />
              Hỗ trợ kỹ thuật 24/7
            </div>
          </div>
        </div>

        {/* Right Content: Flow */}
        <div className="flex-1 overflow-y-auto custom-scrollbar bg-white flex flex-col">
          <div className="p-6 sm:p-10 flex-1">
            {step === 1 ? (
              <div className="h-full flex flex-col">
                <div className="mb-6">
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-2 tracking-tight">Xác nhận thông tin</h2>
                  <p className="text-slate-500 text-xs sm:text-sm">Vui lòng điền thông tin để chúng tôi liên hệ hỗ trợ.</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div>
                    <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5 px-1">
                      Họ tên của bạn <span className="text-red-500">*</span>
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="h-4 w-4 text-slate-400" />
                      </div>
                      <input 
                        type="text" 
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Nguyễn Văn A"
                        className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border-2 border-slate-100 rounded-2xl text-sm font-bold text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5 px-1">
                        SĐT / Zalo <span className="text-red-500">*</span>
                      </label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Phone className="h-4 w-4 text-slate-400" />
                        </div>
                        <input 
                          type="tel" 
                          required
                          value={customerPhone}
                          onChange={(e) => setCustomerPhone(e.target.value)}
                          placeholder="09xx xxx xxx"
                          className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border-2 border-slate-100 rounded-2xl text-sm font-bold text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5 px-1">
                        Link Facebook / Khác
                      </label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Facebook className="h-4 w-4 text-slate-400" />
                        </div>
                        <input 
                          type="text" 
                          value={customerFb}
                          onChange={(e) => setCustomerFb(e.target.value)}
                          placeholder="fb.com/username (tùy chọn)"
                          className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border-2 border-slate-100 rounded-2xl text-sm font-bold text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={handleProceedToPayment}
                  disabled={!customerName || !customerPhone}
                  className={`w-full py-4.5 text-white font-black rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2 mt-auto ${
                    !customerName || !customerPhone 
                    ? 'bg-slate-300 cursor-not-allowed shadow-none' 
                    : 'bg-blue-600 hover:bg-blue-700 shadow-blue-100 active:scale-95'
                  }`}
                >
                  Tiếp tục thanh toán
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <div className="h-full flex flex-col">
                <div className="mb-6">
                  <button 
                    onClick={() => setStep(1)}
                    className="text-[10px] font-black text-blue-600 hover:text-blue-700 mb-3 flex items-center uppercase tracking-widest"
                  >
                    ← Quay lại sửa thông tin
                  </button>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-1 tracking-tight">Thanh toán chuyển khoản</h2>
                  <p className="text-slate-500 text-xs sm:text-sm">Vui lòng quét mã QR hoặc nhập số tài khoản bên dưới.</p>
                </div>

                <div className="space-y-6">
                  {/* Bank Details Selection */}
                  <div className="space-y-4">
                    {accounts.map((acc) => (
                      <div key={acc.number} className="bg-slate-50 rounded-[2rem] p-4 sm:p-5 border border-slate-100 flex flex-col sm:flex-row items-center gap-6">
                        <div className="bg-white p-2 rounded-2xl shadow-sm shrink-0 border border-slate-100">
                          <img 
                            src={`https://img.vietqr.io/image/${acc.code}-${acc.number}-compact2.png?amount=${plan.priceVND}&addInfo=${encodeURIComponent(transferNote)}&accountName=NGUYEN%20DINH%20QUAN`}
                            alt={`QR ${acc.bank}`}
                            className="w-48 h-48 sm:w-40 sm:h-40 object-contain"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="flex-1 text-center sm:text-left min-w-0 w-full">
                          <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                             <span className="px-2 py-0.5 bg-blue-600 text-white text-[9px] font-black rounded uppercase tracking-tighter">{acc.bank}</span>
                             <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{acc.owner}</span>
                          </div>
                          <div className="flex items-center justify-center sm:justify-between mb-1 gap-3">
                            <p className="text-xl font-black text-slate-900 tracking-tighter">{acc.number}</p>
                            <button 
                              onClick={() => copyToClipboard(acc.number, acc.number)}
                              className="p-2 hover:bg-white rounded-xl transition-all border border-transparent active:border-blue-200"
                            >
                              {copied === acc.number ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5 text-slate-400" />}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Transfer Note */}
                  <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <p className="text-[10px] font-black text-amber-600 uppercase tracking-widest">Nội dung bắt buộc</p>
                    </div>
                    <div className="flex items-center justify-between bg-white p-4 rounded-xl border-2 border-amber-200 shadow-sm">
                      <p className="text-base font-black text-slate-900 tracking-tight">{transferNote}</p>
                      <button 
                        onClick={() => copyToClipboard(transferNote, 'note')}
                        className="p-2 hover:bg-slate-50 rounded-xl transition-all"
                      >
                        {copied === 'note' ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5 text-slate-400" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <button 
                    onClick={handleZaloConfirm}
                    className="w-full py-4.5 bg-green-600 text-white font-black rounded-2xl hover:bg-green-700 transition-all shadow-xl shadow-green-100 flex items-center justify-center gap-3 active:scale-95"
                  >
                    <MessageCircle className="w-6 h-6" />
                    Đã thanh toán, gửi bill cho Quân
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CheckoutModal;
