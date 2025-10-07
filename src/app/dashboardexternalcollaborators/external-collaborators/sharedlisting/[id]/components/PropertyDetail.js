import React from "react";

export default function PropertyDetail() {
  const details = [
    { label: "Lot Size", value: "N/A" },
    { label: "Year Built", value: "2018" },
    { label: "HOA Fees", value: "$350/month" },
    { label: "Flooring", value: "Hardwood" },
    { label: "Property Tax", value: "$8,500/year" },
    { label: "Heating", value: "Central Air" },
    { label: "MLS #", value: "SFT123456" },
    { label: "Parking", value: "1 Space" },
  ];

  return (
    <div className="w-full border border-bordercolor rounded-xl p-4 shadow-md bg-cardbg">
      <h2 className="text-lg font-semibold text-textnormal mb-4">Property Details</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-y-3 gap-x-6">
        {details.map((item, index) => (
          <div
            key={index}
            className="flex justify-between text-xs sm:text-sm  text-textnormal"
          >
            <span className="font-medium">{item.label}</span>
            <span className="text-right font-semibold">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
