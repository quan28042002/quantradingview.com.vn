import React from 'react';
import { Copy, CheckCircle2 } from 'lucide-react';

const PaymentInfo = () => {
  const [copied, setCopied] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const accounts = [
    { bank: "ACB", number: "4108721", owner: "NGUYEN DINH QUAN" },
    { bank: "MB Bank", number: "0800104437008", owner: "NGUYEN DINH QUAN" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-8 text-center">Thông Tin Thanh Toán</h2>
            
            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              {accounts.map((acc) => (
                <div key={acc.number} className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:bg-white/15 transition-all flex flex-col items-center text-center">
                  <p className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-4">{acc.bank}</p>
                  
                  {/* QR Code Placeholder/Generator */}
                  <div className="bg-white p-6 rounded-[2.5rem] mb-8 shadow-2xl">
                    <img 
                      src={`https://img.vietqr.io/image/${acc.bank === 'ACB' ? 'acb' : 'MB'}-${acc.number}-compact2.png?accountName=NGUYEN%20DINH%20QUAN`}
                      alt={`QR Thanh toán ${acc.bank}`}
                      className="w-80 h-80 sm:w-[400px] sm:h-[400px] object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="w-full flex justify-between items-center mb-2 bg-black/20 p-3 rounded-xl">
                    <p className="text-xl font-mono font-bold tracking-wider">{acc.number}</p>
                    <button 
                      onClick={() => copyToClipboard(acc.number, acc.number)}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      {copied === acc.number ? <CheckCircle2 className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5 text-white/60" />}
                    </button>
                  </div>
                  <p className="text-sm font-medium text-white/80">{acc.owner}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-600/30 border border-blue-500/30 rounded-2xl p-6 text-center">
              <p className="text-sm font-medium mb-2 text-blue-100">Nội dung chuyển khoản:</p>
              <p className="text-lg font-bold mb-4">Tên gói + Số điện thoại</p>
              <p className="text-xs text-blue-200 italic">
                Ví dụ: "Essential 3th 0901234567"
              </p>
            </div>
            
            <p className="mt-8 text-center text-sm text-white/60">
              Sau khi thanh toán, vui lòng gửi bill qua Zalo để được hỗ trợ xác nhận và nhận tài khoản nhanh nhất.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentInfo;
