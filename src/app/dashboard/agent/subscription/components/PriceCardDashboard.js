"use client";
import React from "react";
import { Check } from "lucide-react";

export default function PriceCardDashboard({
  title,
  price,
  period,
  description,
  features,
  showModal,
  isSelected,
  onSelect,
  buttontext,
}) {
  return (
    <div
      onClick={onSelect}
      className={`w-full sm:w-[300px] md:w-[350px] xl:w-[380px] 
        h-auto sm:h-[480px] md:h-[500px] lg:h-[530px] 
        rounded-xl border border-secondary shadow-md 
        p-4 sm:p-6 flex flex-col gap-4 my-2 
        transition-transform duration-300 cursor-pointer
        ${isSelected
          ? "sm:h-[640px] md:h-[520px] lg:h-[540px] shadow-xl bg-background text-primary"
          : "bg-background text-textnormal"
        }`}
    >
      {/* Header */}
      <div className="flex flex-col items-start space-y-2 sm:space-y-3">
        <h3 className="text-sm sm:text-base md:text-lg font-semibold">{title}</h3>

        <div className="mb-2">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold">
            ${price}
          </span>
          {period && (
            <span className="text-xs sm:text-sm ml-1 text-muted">
              per {period}
            </span>
          )}
        </div>

        <p className="text-xs sm:text-sm  text-left mb-2">
          {description}
        </p>
      </div>

      {/* Button */}
      <button
        className={`text-sm sm:text-base text-textnormal border border-bordercolor font-semibold 
          py-2.5 sm:py-3 px-4 rounded-lg transition
          ${isSelected
            ? "bg-buttonbg text-white hover:opacity-90"
            : "bg-background text-primary"
          }`}
        onClick={showModal}
      >
        {buttontext}
      </button>

      {/* Features */}
      <ul className="flex flex-col items-start gap-2 mt-3">
  {features.map((feature, idx) => (
    <li
      key={idx}
      className="flex items-center gap-3 text-xs sm:text-sm md:text-base"
    >
      {/* Perfectly Centered, Responsive Circle with Check */}
      <div
        className="flex items-center justify-center 
                   bg-orange-400 
                   rounded-full 
                   min-w-5 min-h-5 sm:min-w-5 sm:min-h-5 
                   aspect-square"
      >
        <Check className="text-white w-3 h-3 sm:w-4 sm:h-4 " />
      </div>

      <span className="text-xs sm:text-sm text-left">{feature}</span>
    </li>
  ))}
</ul>

    </div>
  );
}
