import React, { useState } from 'react';
import { featureLibraryData } from '../data/featureLibraryData';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const FeatureLibrary = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);

  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Thư Viện Tính Năng TradingView</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Hiểu rõ các công cụ mạnh mẽ bạn sẽ sở hữu để nâng tầm kỹ năng giao dịch.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {featureLibraryData.map((group, idx) => (
            <button
              key={group.title}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === idx 
                ? 'bg-slate-900 text-white shadow-lg' 
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {group.title}
            </button>
          ))}
        </div>

        {/* Feature List */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-px bg-slate-100">
            {featureLibraryData[activeTab].features.map((feature) => (
              <div 
                key={feature.name} 
                className="bg-white p-6 hover:bg-slate-50 transition-colors cursor-pointer"
                onClick={() => setExpandedFeature(expandedFeature === feature.name ? null : feature.name)}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-slate-900 flex items-center">
                    <Check className="w-4 h-4 text-blue-600 mr-2" />
                    {feature.name}
                  </h4>
                  {expandedFeature === feature.name ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                </div>
                <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                  {feature.description}
                </p>
                <AnimatePresence>
                  {expandedFeature === feature.name && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      {feature.highlightPlan && (
                        <div className="mt-2 inline-block px-2 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-widest rounded">
                          {feature.highlightPlan}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureLibrary;
