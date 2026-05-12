import React, { useState, useEffect } from 'react';
import { X, Copy, CheckCircle2, QrCode, CreditCard, ShieldCheck, MessageCircle, ArrowRight, TrendingDown, User, Phone, Facebook } from 'lucide-react';
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
  const [step, setStep] = useState(1); // 1: Info & Summary, 2: Payment
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

  const handeProceedToPayment = () => {
    if (customerName && customerPhone) {
      setStep(2);
      notifyAdmin('DRAFT'); // Notify when customer reaches payment screen
    }
  };

  const handleZaloConfirm = () => {
    notifyAdmin('CONFIRMED'); // Notify when customer clicks confirm
    const text = `Chào Quân TradingView, tôi đã thanh toán đơn hàng ${orderId}.\n\n--- THÔNG TIN KHÁCH HÀNG ---\n- Họ tên: ${customerName}\n- SĐT/Zalo: ${customerPhone}\n- Facebook/Link: ${customerFb || 'Không có'}\n\n--- THÔNG TIN GÓI ---\n- Gói: ${plan.name}\n- Số tiền: ${formatCurrency(plan.priceVND)}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://zalo.me/0583156019?text=${encodedText}`, '_blank');
  };

  return (
    <div 
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/80 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-full transition-all z-50 shadow-sm hover:scale-110 active:scale-95"
          title="Đóng và quay lại trang chủ"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col md:flex-row h-full">
          {/* Left: Order Summary (Visible on Desktop) */}
          <div className="md:w-1/3 bg-slate-50 p-8 border-r border-slate-100">
            <div className="mb-8">
              <div className="inline-flex items-center px-2 py-1 bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-widest rounded mb-4">
                Đơn hàng của bạn
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">{plan.name}</h3>
              <p className="text-sm text-slate-500 mb-6">{plan.duration}</p>
              
              <div className="space-y-4 pt-6 border-t border-slate-200">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Mã đơn hàng:</span>
                  <span className="font-bold text-slate-900">{orderId}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Tạm tính:</span>
                  <span className="font-bold text-slate-900">{formatCurrency(plan.priceVND)}</span>
                </div>
                <div className="flex justify-between text-lg font-black pt-4 border-t border-slate-200">
                  <span className="text-slate-900">Tổng cộng:</span>
                  <span className="text-blue-600">{formatCurrency(plan.priceVND)}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <ShieldCheck className="w-3 h-3 text-green-500" />
                Thanh toán an toàn
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <ShieldCheck className="w-3 h-3 text-green-500" />
                Bảo mật thông tin
              </div>
            </div>

            <button 
              onClick={onClose}
              className="mt-8 w-full py-3 px-4 border border-slate-200 text-slate-500 text-xs font-bold rounded-xl hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
            >
              <X className="w-3 h-3" />
              Quay lại trang chủ
            </button>
          </div>

          {/* Right: Payment Details */}
          <div className="flex-1 p-8 sm:p-10">
            {step === 1 ? (
              <div className="h-full flex flex-col">
                <div className="mb-6">
                  <h2 className="text-2xl font-black text-slate-900 mb-2">Thông tin thanh toán</h2>
                  <p className="text-slate-500 text-sm">Vui lòng để lại thông tin để chúng tôi hỗ trợ kích hoạt gói nhanh nhất.</p>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">
                      Họ tên của bạn <span className="text-red-500">*</span>
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="h-4 w-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                      </div>
                      <input 
                        type="text" 
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Nguyễn Văn A"
                        className="block w-full pl-11 pr-4 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl text-sm font-bold text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">
                        SĐT / Zalo <span className="text-red-500">*</span>
                      </label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Phone className="h-4 w-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                        </div>
                        <input 
                          type="tel" 
                          required
                          value={customerPhone}
                          onChange={(e) => setCustomerPhone(e.target.value)}
                          placeholder="09xx xxx xxx"
                          className="block w-full pl-11 pr-4 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl text-sm font-bold text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">
                        Link Facebook
                      </label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Facebook className="h-4 w-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                        </div>
                        <input 
                          type="text" 
                          value={customerFb}
                          onChange={(e) => setCustomerFb(e.target.value)}
                          placeholder="fb.com/username"
                          className="block w-full pl-11 pr-4 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl text-sm font-bold text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
                        <TrendingDown className="w-4 h-4 text-white" />
                      </div>
                      <p className="font-black text-slate-900 text-sm">{plan.name}</p>
                    </div>
                    <ul className="space-y-1.5">
                      {plan.benefits.slice(0, 2).map((b, i) => (
                        <li key={i} className="flex items-center text-[11px] text-slate-600 font-medium">
                          <CheckCircle2 className="w-3 h-3 text-blue-500 mr-2" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button 
                  onClick={handeProceedToPayment}
                  disabled={!customerName || !customerPhone}
                  className={`mt-auto w-full py-5 text-white font-black rounded-2xl transition-all shadow-lg flex items-center justify-center group ${
                    !customerName || !customerPhone 
                    ? 'bg-slate-300 cursor-not-allowed shadow-none' 
                    : 'bg-blue-600 hover:bg-blue-700 shadow-blue-100 hover:scale-[1.02] active:scale-[0.98]'
                  }`}
                >
                  {(customerName && customerPhone) ? 'Tiến hành thanh toán' : 'Vui lòng điền đủ thông tin'}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ) : (
              <div className="h-full flex flex-col">
                <div className="mb-6">
                  <button 
                    onClick={() => setStep(1)}
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 mb-4 flex items-center"
                  >
                    ← Quay lại
                  </button>
                  <h2 className="text-2xl font-black text-slate-900 mb-2">Quét mã thanh toán</h2>
                  <p className="text-slate-500 text-sm">Sử dụng ứng dụng Ngân hàng hoặc Ví điện tử để quét mã QR.</p>
                </div>

                <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar space-y-6">
                  {/* Bank Accounts */}
                  <div className="grid grid-cols-1 gap-4">
                    {accounts.map((acc) => (
                      <div key={acc.number} className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex flex-col sm:flex-row items-center gap-6">
                        <div className="bg-white p-4 rounded-3xl shadow-sm shrink-0">
                          <img 
                            src={`https://img.vietqr.io/image/${acc.code}-${acc.number}-compact2.png?amount=${plan.priceVND}&addInfo=${encodeURIComponent(transferNote)}&accountName=NGUYEN%20DINH%20QUAN`}
                            alt={`QR ${acc.bank}`}
                            className="w-64 h-64 sm:w-48 sm:h-48 object-contain"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">{acc.bank}</p>
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-sm font-bold text-slate-900 truncate">{acc.number}</p>
                            <button 
                              onClick={() => copyToClipboard(acc.number, acc.number)}
                              className="p-1 hover:bg-slate-200 rounded transition-colors"
                            >
                              {copied === acc.number ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-slate-400" />}
                            </button>
                          </div>
                          <p className="text-[10px] text-slate-500 font-medium">{acc.owner}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Transfer Note */}
                  <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4">
                    <p className="text-[10px] font-black text-amber-600 uppercase tracking-widest mb-2">Nội dung chuyển khoản quan trọng</p>
                    <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-amber-200">
                      <p className="text-sm font-black text-slate-900">{transferNote}</p>
                      <button 
                        onClick={() => copyToClipboard(transferNote, 'note')}
                        className="p-1 hover:bg-slate-100 rounded transition-colors"
                      >
                        {copied === 'note' ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-slate-400" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <button 
                    onClick={handleZaloConfirm}
                    className="w-full py-4 bg-green-600 text-white font-bold rounded-2xl hover:bg-green-700 transition-all shadow-lg shadow-green-100 flex items-center justify-center"
                  >
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Đã thanh toán, gửi bill qua Zalo
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
