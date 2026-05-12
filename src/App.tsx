/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import PricingOverview from './components/PricingOverview';
import PlanExplorer from './components/PlanExplorer';
import OfficialComparison from './components/OfficialComparison';
import ComparisonMatrix from './components/ComparisonMatrix';
import FeatureLibrary from './components/FeatureLibrary';
import Benefits from './components/Benefits';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import PaymentInfo from './components/PaymentInfo';
import Footer from './components/Footer';
import ZaloButton from './components/ZaloButton';
import MobileCTA from './components/MobileCTA';
import PlanDetailModal from './components/PlanDetailModal';
import CheckoutModal from './components/CheckoutModal';
import { PricingPlan } from './data/pricingData';

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleSelectPlan = (plan: PricingPlan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleBuyNow = (plan: PricingPlan) => {
    setSelectedPlan(plan);
    setIsModalOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <Header />
      
      <main>
        <Hero />
        
        <div>
          <TrustBar />
        </div>

        <div>
          <PricingOverview onSelectPlan={handleSelectPlan} onBuyNow={handleBuyNow} />
        </div>

        <div>
          <PlanExplorer selectedPlan={selectedPlan} onBuyNow={handleBuyNow} />
        </div>

        <div>
          <OfficialComparison onBuyNow={handleBuyNow} />
        </div>

        <div>
          <ComparisonMatrix />
        </div>

        <div>
          <FeatureLibrary />
        </div>

        <div>
          <Benefits />
        </div>

        <div>
          <Process />
        </div>

        <div>
          <Testimonials />
        </div>

        <div>
          <FAQ />
        </div>

        <div>
          <ContactForm />
        </div>

        <div>
          <PaymentInfo />
        </div>
      </main>

      <Footer />
      
      {/* Modals & Floating UI */}
      {isModalOpen && (
        <PlanDetailModal 
          plan={selectedPlan} 
          onClose={() => setIsModalOpen(false)} 
          onBuyNow={handleBuyNow}
        />
      )}

      {isCheckoutOpen && (
        <CheckoutModal 
          plan={selectedPlan} 
          onClose={() => setIsCheckoutOpen(false)} 
        />
      )}
      
      <ZaloButton />
      <MobileCTA />
    </div>
  );
}
