import React from 'react';
import { CheckCircle2, ShieldCheck, Zap, Headphones, BookOpen, Video, RefreshCw, Gift, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const Benefits = () => {
  const benefits = [
    { icon: ShieldCheck, title: "Dùng riêng 100%", desc: "Tài khoản sử dụng riêng 100%, không dùng chung, bảo mật tuyệt đối." },
    { icon: Zap, title: "Bảo hành trọn đời", desc: "Bảo hành toàn thời gian trong suốt quá trình sử dụng gói." },
    { icon: RefreshCw, title: "Hoàn tiền nhanh chóng", desc: "Bảo hành lỗi mất tính năng, đổi mới hoặc hoàn tiền nhanh chóng." },
    { icon: Headphones, title: "Hỗ trợ 1-1", desc: "Hướng dẫn sử dụng đầy đủ, dễ hiểu, có hỗ trợ 1-1 nếu cần." },
    { icon: BookOpen, title: "Tài liệu chuyên sâu", desc: "Tặng bộ tài liệu trading chuyên sâu, cập nhật liên tục." },
    { icon: Sparkles, title: "Đồng hành tận tâm", desc: "Cam kết đồng hành và hỗ trợ kỹ thuật trong toàn bộ thời gian sử dụng." },
    { icon: CheckCircle2, title: "Email chính chủ", desc: "Nâng cấp trực tiếp trên email của bạn (áp dụng cho các gói từ 1 năm)." },
    { icon: Gift, title: "Quà tặng độc quyền", desc: "Nhiều ưu đãi và tài liệu VIP dành riêng cho đối tác của Quân TradingView." }
  ];

  return (
    <section id="benefits" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-blue-100"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Cam kết dịch vụ
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight"
          >
            Đẳng Cấp <span className="text-blue-600">Số 1 Việt Nam</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500 max-w-2xl mx-auto font-medium"
          >
            Chúng tôi không chỉ bán tài khoản, chúng tôi mang đến sự an tâm và đồng hành cùng hành trình giao dịch của bạn.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 group"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-blue-600 transition-colors duration-500">
                <benefit.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed font-medium">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
