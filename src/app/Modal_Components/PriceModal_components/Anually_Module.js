import React from "react";
import PriceCard_Module from "./PriceCard_Module";

export default function Anually({ showModal, selectedPlan, setSelectedPlan, cards, onPlanSelect }) {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-4">
        {cards.map((card, idx) => (
          <PriceCard_Module
            key={card.id || idx}
            showModal={showModal}
            title={card.planType} // ✅ from API
            price={card.pricing?.annually ?? "Custom"} // ✅ annual price
            period="Year" // ✅ fixed for annually
            description={card.description}
            buttontext={card.pricing?.annually ? "Get Started" : "Contact Us"} // ✅ dynamic button
            features={
              card.featureLimits?.map(f => `${f.feature}: ${f.limit}`) || []
            } // ✅ mapped features
            isSelected={selectedPlan?.id === card.id}
            onSelect={() => {
            setSelectedPlan(card)   // local selection
            onPlanSelect?.(card, "annually") // bubble up to Payment
           }}
            plan={card}
          />
        ))}
      </div>
    </div>
  );
}
