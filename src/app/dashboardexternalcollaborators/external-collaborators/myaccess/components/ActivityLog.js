import React from "react";

export default function ActivityLog() {
  return (
    <div className="border border-bordercolor shadow-md rounded-xl p-4 bg-cardbg">
      {/* Heading */}
      <h2 className="text-lg font-semibold text-textnormal mb-4">
        Activity Log
      </h2>

      {/* Grid for activity items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* First Login */}
        <div className="border rounded-lg p-3 sm:p-4 bg-cardbg">
          <p className="text-subtext text-xs md:text-sm">First Login</p>
          <p className="font-medium text-textnormal text-xs md:text-sm">
            July 15, 2025 – 9:00 AM
          </p>
        </div>

        {/* Last Viewed Listing */}
        <div className="border rounded-lg p-3 sm:p-4 bg-cardbg">
          <p className="text-subtext text-xs md:text-sm">Last Viewed Listing</p>
          <p className="font-medium text-textnormal text-xs md:text-sm">
            July 17, 2025 – 2:15 PM
          </p>
        </div>

        {/* Last Chat Interaction */}
        <div className="border rounded-lg p-3 sm:p-4 bg-cardbg">
          <p className="text-subtext text-xs md:text-sm">Last Chat Interaction</p>
          <p className="font-medium text-textnormal text-xs md:text-sm">
            July 17, 2025 – 4:45 PM
          </p>
        </div>

        {/* Access Expiry */}
        <div className="border rounded-lg p-3 sm:p-2 bg-cardbg">
          <p className="text-subtext text-xs md:text-sm">Access Expiry</p>
          <p className="font-medium text-textnormal text-xs md:text-sm">
            3 Days Left
          </p>
        </div>
      </div>
    </div>
  );
}
