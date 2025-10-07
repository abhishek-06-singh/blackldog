import React from "react";

export default function AccessInformation() {
  return (
    <div className="w-full border border-bordercolor rounded-xl p-4 shadow-md bg-cardbg">
      <h2 className="text-base md:text-lg text-textheading font-semibold mb-4">Access Information</h2>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
  {/* Access Type */}
  <div className="flex justify-between text-sm">
    <p className="text-subtext">Access Type</p>
    <p className="font-medium text-textnormal">Temporary</p>
  </div>

  {/* Invited By */}
  <div className="flex justify-between text-sm">
    <p className="text-subtext">Invited By</p>
    <p className="font-medium text-textnormal text-right">
      Sarah Johnson, DreamHomes Realty
    </p>
  </div>

  {/* Access Duration */}
  <div className="flex justify-between text-sm">
    <p className="text-subtext">Access Duration</p>
    <p className="font-medium text-textnormal">7 days</p>
  </div>

  {/* Invitation Purpose */}
  <div className="flex justify-between text-sm">
    <p className="text-subtext">Invitation Purpose</p>
    <p className="font-medium text-textnormal text-right">
      Shared Listings + Communication
    </p>
  </div>

  {/* Start Date */}
  <div className="flex justify-between text-sm">
    <p className="text-subtext">Start Date</p>
    <p className="font-medium text-textnormal">July 15, 2025 – 9:00 AM</p>
  </div>

  {/* Listings Shared */}
  <div className="flex justify-between text-sm">
    <p className="text-subtext">Listings Shared</p>
    <p className="font-medium text-textnormal">12</p>
  </div>

  {/* Expiration Date */}
      <div className="flex justify-between text-sm">
    <p className="text-subtext">Expiration Date</p>
    <p className="font-medium text-textnormal">July 22, 2025 – 9:00 AM</p>
  </div>

  {/* Chats Joined */}
  <div className="flex justify-between text-sm ">
    <p className="text-subtext">Chats Joined</p>
    <p className="font-medium text-textnormal">5</p>
  </div>
</div>

    </div>
  );
}
