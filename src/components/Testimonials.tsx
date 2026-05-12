import React from 'react';
import { Facebook, ExternalLink, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
          >
            Uy Tín & Phản Hồi Khách Hàng
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 max-w-2xl mx-auto"
          >
            Hàng nghìn nhà giao dịch đã tin tưởng và sử dụng dịch vụ tại Quân TradingView.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
              <Facebook className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Check Legit & Feedback</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Toàn bộ feedback thực tế được công khai minh bạch trên Facebook cá nhân. Bạn có thể kiểm tra bất cứ lúc nào.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <a 
                href="https://www.facebook.com/quanbantk6868/posts/pfbid02NGw7f3bnkJi3BtiFknWSK7A3fPHyfAAcVD8XdB1w6SY5MUY9jscugXvgRbVvoNc1l" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-white border border-slate-200 text-slate-900 font-bold rounded-xl hover:bg-slate-50 transition-all"
              >
                Xem feedback khách
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
              <a 
                href="https://www.facebook.com/quanbantk6868" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-md shadow-blue-100"
              >
                Facebook cá nhân
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-200">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Cộng Đồng Zalo</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Tham gia nhóm Zalo để cập nhật các deal độc quyền, tài khoản giá hời và nhận hỗ trợ nhanh nhất từ cộng đồng.
            </p>
            <a 
              href="https://zalo.me/g/mylylx295" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all shadow-md shadow-green-100"
            >
              Tham gia nhóm Zalo
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
