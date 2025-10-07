'use client'
import React from "react"
import Monthly_Module from "./Monthly_Module"
import Anually_Module from "./Anually_Module"
import { useState, useEffect } from "react"
import {getSubscriptionPlans} from "../../../services/api"
import { toast } from "sonner"

export default function ActivePlan_Module({onPlanSelect}) {
    const [active, setActive] = useState('Monthly')
  const [selectedMonthlyCard, setSelectedMonthlyCard] = useState(null);
const [selectedAnnualCard, setSelectedAnnualCard] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const[loading,setLoading] = useState(false)
  const [plans, setPlans] = useState([])

  useEffect(() => {
  const fetchPlans = async () => {
    setLoading(true);
    try {
      const response = await getSubscriptionPlans();
      console.log('API Response:', response); 
      setPlans(response.data || []); // ✅ inner data array
    } catch (error) {
      toast.error(error.message || 'Failed to fetch plans');
    } finally {
      setLoading(false); // ✅ ensure loading resets
    }
  };

  fetchPlans();
}, []);


if (loading) {
    return <p className="text-center text-sm text-textheading">Loading Plans...</p>;
  }
  return (
    <>
      {/* Toggle Container */}
<div className="w-fit mx-auto mt-3">
  <div className="bg-background border border-bordercolor rounded-full flex items-center p-0.5">
    {/* Monthly Button */}
    <button
      className={`px-2.5 py-0.5 text-[11px] font-medium rounded-full transition ${
        active === "Monthly"
          ? "bg-buttonbg text-background"
          : "text-primary hover:text-primary"
      }`}
      onClick={() => setActive("Monthly")}
    >
      Monthly
    </button>

    {/* Annual Button */}
    <button
      className={`px-2.5 py-0.5 text-[11px] font-medium rounded-full transition flex items-center space-x-1 ${
        active === "Anually"
          ? "bg-buttonbg text-background"
          : "text-primary hover:text-primary"
      }`}
      onClick={() => setActive("Anually")}
    >
      <span>Annual</span>
      <span className="ml-1 text-[9px] text-orange-500 border border-orange-200 bg-orange-50 px-1 py-[1px] rounded-full">
        -15%
      </span>
    </button>
  </div>
</div>


      {/* Content Switch */}
      <div className="max-w-7xl mx-auto">
        {active === "Monthly" && (
          <Monthly_Module

            showModal={showModal}
            selectedPlan={selectedMonthlyCard}
            setSelectedPlan={setSelectedMonthlyCard}
            cards={plans}
            onPlanSelect={onPlanSelect}
          />
        )}
        {active === "Anually" && (
          <Anually_Module

            showModal={showModal}
            selectedPlan={selectedAnnualCard}
            setSelectedPlan={setSelectedAnnualCard}
            cards={plans}
            onPlanSelect={onPlanSelect}
          />
        )}
      </div>
    </>
  )
}
