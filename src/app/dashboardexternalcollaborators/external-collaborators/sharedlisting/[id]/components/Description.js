
import React from 'react';

export default function Description({ property }) {
  // Split description into lines
  const lines = property.description?.split('\n') || [];

  // Take only the first 8 lines
  const limitedLines = lines.slice(0, 4);

  // First 4 lines
  const firstPart = limitedLines.slice(0, 2).join('\n');

  // Next 2 lines
  const secondPart = limitedLines.slice(2, 4).join('\n');

  return (
    <div className="w-full bg-cardbg border border-bordercolor rounded-xl p-4 shadow-md text-xs md:text-sm text-textnormal">
      <h2 className="text-lg font-semibold pb-2">Description</h2>
      <p className="whitespace-pre-line">{firstPart}</p>
      {secondPart && <p className="whitespace-pre-line mt-2">{secondPart}</p>}
    </div>
  );
}
