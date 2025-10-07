import React from "react";
import PriceCard_Module from "./PriceCard_Module";

/**
 * Monthly_Module
 * Expects `cards` to be the array from your API: response.data (array of plans)
 */
export default function Monthly_Module({
  showModal,
  selectedPlan,
  setSelectedPlan,
  onPlanSelect,
  cards = [],
}) {

   console.log('Monthly Cards:', cards);
  // Safety: handle empty/no-data case
  if (!Array.isArray(cards) || cards.length === 0) {
    return (
      <p className="text-center text-sm text-gray-500">
        No subscription plans found.
      </p>
    );
  }

  // map feature limit value to readable string
  const humanizeFeature = (f) => {
    const name = (f.feature || "").replace(/_/g, " ");
    const limit = f.limit === -1 ? "Unlimited" : String(f.limit);
    return `${name}: ${limit}`;
  };

  const mapPriceProp = (card) => {
    const monthly = card.pricing?.monthly;
    // Treat enterprise/custom plans with monthly 0 as "Custom"
    if (card.planType === "ENTERPRISE" && (monthly === 0 || monthly === null || monthly === undefined)) {
      return "Custom";
    }
    // if monthly is undefined/null -> fallback to "Custom"
    if (monthly === null || monthly === undefined) return "Custom";
    return monthly;
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* allow wrapping so multiple cards show on smaller screens */}
      <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-4">
       
        {cards.map((card, idx) => (
          <PriceCard_Module
            key={card.id ?? idx}
            showModal={showModal}
            title={ card.planType } 
            price={mapPriceProp(card)}
            period="Monthly"
            description={card.description ?? ""}
            buttontext="Choose Plan"
            features={Array.isArray(card.featureLimits) ? card.featureLimits.map(humanizeFeature) : []}
            isSelected={selectedPlan?.id === card.id}
           onSelect={() => {
           setSelectedPlan(card)   
            onPlanSelect?.(card, "monthly") 
           }}
            plan={card}
            
          />
        ))}
      </div>
    </div>
  );
}
