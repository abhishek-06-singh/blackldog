"use client";
import React, { useEffect } from "react";
import FeaturesList from "./FeaturesList";
import PlanHeader from "./PlanHeader";
import PriceSummary from "./PriceSummary";
import BillingInfoCard from "./BillingInfoCard";

export default function OrderSummary({ handleChangePlan, plan, setPlan, billingPeriod }) {
  useEffect(() => {
    // Read selected plan from localStorage if not already in state
    if (!plan) {
      const storedPlan = localStorage.getItem("selectedPlan");
      if (storedPlan) {
        setPlan(JSON.parse(storedPlan)); // parse back to object
      }
    }
  }, [plan, setPlan]);

  if (!plan) {
    return <p className="text-center text-gray-500 mt-4">No plan selected.</p>;
  }

  // Map features dynamically
  const planFeatures =
    plan.featureLimits?.map(
      (f) =>
        `${f.feature.replace(/_/g, " ")}: ${
          f.limit === -1 ? "Unlimited" : f.limit
        }`
    ) || [];

    const price =
  billingPeriod === "Monthly"
    ? plan.pricing?.monthly
    : billingPeriod === "Anually"
    

  // Calculate subtotal, tax, and total
  const subtotal = price ?? 0;
  const tax = (subtotal * 0.18).toFixed(2); // 18% GST/VAT
  const total = (subtotal * 1.18).toFixed(2);

  return (
    <div className="w-full mx-auto bg-cardbg rounded-2xl shadow p-6 border border-bordercolor">
      {/* Title */}
      <h2 className="text-lg md:text-xl font-semibold text-subheading mb-4">
        Order Summary
      </h2>

      {/* Plan Info */}
      <PlanHeader
        title={plan.planType}
        subtitle={plan.description}
        price={subtotal > 0 ? `$${subtotal}/month` : "Custom"}
        billing="Billed monthly"
      />

      {/* Features */}
      <FeaturesList features={planFeatures} />

      {/* Divider */}
      <hr className="my-4 border-bordercolor" />

      {/* Pricing */}
      <PriceSummary
        subtotal={subtotal > 0 ? `$${subtotal}.00` : "Custom"}
        tax={subtotal > 0 ? `$${tax}` : "0.00"}
        total={subtotal > 0 ? `$${total}` : "Custom"}
      />

      {/* Billing Info */}
      <BillingInfoCard
        billingCycle="Monthly"
        nextBillingDate="February 10, 2025"
      />

      {/* Change Package */}
      <button
        onClick={handleChangePlan} // ✅ now a proper function
        className="mt-3 text-sm md:text-base px-3 py-2 rounded-lg text-textblack bg-orange-200 hover:underline-offset-2 hover:underline"
      >
        Change package
      </button>
    </div>
  );
}
