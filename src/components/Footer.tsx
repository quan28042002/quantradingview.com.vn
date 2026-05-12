import React from 'react';
import { MessageCircle, Facebook, Globe, Users } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <a href="#" className="text-2xl font-bold tracking-tighter mb-6 block">
              Quân <span className="text-blue-500">TradingView</span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Chuyên cung cấp các gói TradingView chính hãng, hỗ trợ rõ ràng, nhanh chóng, minh bạch. Đồng hành cùng Pro Trader Việt Nam từ năm 2026.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/quanbantk6868" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://zalo.me/0583156019" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="https://zalo.me/g/mylylx295" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Users className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Liên kết nhanh</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#pricing" className="hover:text-blue-400 transition-colors">Bảng giá</a></li>
              <li><a href="#comparison" className="hover:text-blue-400 transition-colors">So sánh giá</a></li>
              <li><a href="#features" className="hover:text-blue-400 transition-colors">Tính năng</a></li>
              <li><a href="#faq" className="hover:text-blue-400 transition-colors">Câu hỏi thường gặp</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Chính sách</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Chính sách bảo hành</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Chính sách hoàn tiền</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Điều khoản sử dụng</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Bảo mật thông tin</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Liên hệ</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start">
                <MessageCircle className="w-5 h-5 mr-3 text-blue-500 shrink-0" />
                Zalo: 0583156019
              </li>
              <li className="flex items-start">
                <Globe className="w-5 h-5 mr-3 text-blue-500 shrink-0" />
                Quantradingview.com
              </li>
              <li className="flex items-start text-xs italic">
                Hỗ trợ kỹ thuật 24/7 cho khách hàng đang sử dụng.
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © 2026 Quân TradingView. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Designed for professional traders.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
