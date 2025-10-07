'use client'
import React, { useState } from "react";
import OrderSummary from "../components/payment_components/OrderSummary";
import PaymentMethod from "../components/payment_components/PaymentMethod";
import PriceModalWrapper from "../components/Modal/PriceModalWrapper";
import { useRouter } from "next/navigation"


export default function Payment() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [plan, setPlan] = useState(null);
  const [billingPeriod, setBillingPeriod] = useState(null);
  const router = useRouter();
  const handleChangePlan = () => {
    setPlan(null);
    localStorage.removeItem("selectedPlan");
    localStorage.removeItem("period"); 
     setIsModalOpen(true);
     router.push('/payment');
  };
 

  return (
    <div className="min-h-screen w-full p-2 sm:p-5 md:p-10 ">

        <div className="pb-2 sm:pb-5 md:pb-10">

        <h1 className="text-2xl md:text-4xl font-bold text-primary mb-1 ">Complete Your Payment</h1>
        <p className="text-base md:text-lg text-textnormal ">Secure payment powered by Stripe</p>
        </div>
        <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-6/12 p-2">
            <OrderSummary handleChangePlan={handleChangePlan} plan={plan} setPlan={setPlan} billingPeriod={billingPeriod} />
        </div>
        <div className="w-full md:w-6/12 p-4">
            <PaymentMethod plan={plan} billingPeriod={billingPeriod}
                        />
        </div>
        </div>
        {isModalOpen && (
         <PriceModalWrapper
          isModalOpen={isModalOpen}
          showModal={() => setIsModalOpen(true)}
          onPlanSelect={(selectedPlan, period) => {
            setPlan(selectedPlan);
            setBillingPeriod(period);
            localStorage.setItem("selectedPlan", JSON.stringify(selectedPlan));
            localStorage.setItem("period", period);

            setIsModalOpen(false); 
            router.push("/payment"); 
          }}
        />
        )}
      
    </div>
  );
}
