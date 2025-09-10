import { ArrowDown, ArrowRight } from "lucide-react";
import React from "react";

export default function OverviewSalesFunnel() {
  const stages = [
    { label: "Leads", value: 342, bg: "bg-[#FAE9DA]" },
    { label: "New", value: 342, bg: "bg-[#F4CFAF]" },
    { label: "Negotiated", value: 342, bg: "bg-[#EEB887]" },
    { label: "Closed", value: 342, bg: "bg-[#A98360]" },
  ];

  return (
    <div className="p-4 lg:p-6 bg-cardbg rounded-2xl shadow-md border border-bordercolor w-full">
      <h2 className="text-base font-semibold text-textheading mb-4">Sales Funnel</h2>

      {/* Responsive layout */}
      <div className="flex flex-col items-center gap-y-4 sm:flex-row sm:justify-between sm:items-center sm:gap-y-0">
        {stages.map((stage, index) => (
          <React.Fragment key={stage.label}>
            {/* Stage block */}
            <div className="flex flex-col items-center text-center">
              <div
                className={` w-10 h-10 sm:w-8 sm:h-8 lg:w-14 lg:h-14 rounded-full flex items-center justify-center text-sm md:text-md lg:text-lg font-semibold text-black-500 ${stage.bg}`}
              >
                {stage.value}
              </div>
              <span className="mt-1 text-xs text-textnormal">{stage.label}</span>
            </div>

            {/* Arrow (only on large screens and above, skip last) */}
            {index !== stages.length - 1 && (
              <>
              <ArrowRight className="w-4 h-4  text-subtext hidden sm:block " />
              <ArrowDown className="w-4 h-4 text-subtext block sm:hidden" />
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
