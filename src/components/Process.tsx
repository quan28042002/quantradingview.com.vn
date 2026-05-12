import React from 'react';
import { Search, Info, MessageCircle, CreditCard, Key } from 'lucide-react';
import { motion } from 'motion/react';

const Process = () => {
  const steps = [
    { icon: Search, title: "Chọn gói phù hợp", desc: "Tham khảo bảng giá và tính năng để tìm gói tối ưu cho nhu cầu của bạn." },
    { icon: Info, title: "Xem chi tiết lợi ích", desc: "Bấm vào gói để xem giải thích chi tiết về các giới hạn và đặc quyền." },
    { icon: MessageCircle, title: "Chat Zalo tư vấn", desc: "Nhắn tin cho Quân để được tư vấn kỹ thuật và xác nhận tình trạng gói." },
    { icon: CreditCard, title: "Thanh toán", desc: "Thực hiện chuyển khoản qua ngân hàng và gửi bill xác nhận." },
    { icon: Key, title: "Nhận tài khoản", desc: "Nhận thông tin đăng nhập, hướng dẫn sử dụng và bộ tài liệu trading." }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-slate-900 mb-4"
          >
            Quy Trình Mua Hàng Đơn Giản
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600"
          >
            5 bước để sở hữu tài khoản TradingView chính hãng chuyên nghiệp.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-white rounded-2xl border-2 border-blue-600 flex items-center justify-center mb-6 shadow-lg"
                >
                  <step.icon className="w-8 h-8 text-blue-600" />
                </motion.div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
