import React, { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    plan: 'Essential',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Chào Quân TradingView, tôi là ${formData.name} (${formData.phone}). Tôi đang quan tâm gói ${formData.plan}. Nhu cầu: ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://zalo.me/0583156019?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Liên Hệ Tư Vấn</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Bạn còn băn khoăn về các gói TradingView? Hãy để lại thông tin hoặc nhắn tin trực tiếp, Quân sẽ hỗ trợ bạn chọn gói tối ưu nhất cho chiến lược giao dịch của mình.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Hỗ trợ Zalo 24/7</p>
                  <p className="text-slate-600">0583156019</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <Send className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Cộng đồng Trader</p>
                  <p className="text-slate-600">Tham gia nhóm Zalo để nhận ưu đãi</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Họ tên</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Nguyễn Văn A"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Số điện thoại</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="0901234567"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Gói quan tâm</label>
                <select 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                  value={formData.plan}
                  onChange={(e) => setFormData({...formData, plan: e.target.value})}
                >
                  <option>Essential</option>
                  <option>Plus</option>
                  <option>Premium</option>
                  <option>Gói 1 tháng</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Nhu cầu của bạn</label>
                <textarea 
                  rows={4}
                  placeholder="Tôi muốn tư vấn về..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 flex items-center justify-center"
              >
                Nhận tư vấn qua Zalo
                <Send className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
