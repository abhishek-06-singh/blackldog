import React from "react";
import Image from "next/image";

const listings = [
  {
    id: 1,
    title: "Modern House",
    address: "123 Oak Street, Beverly Hills",
    status: "Active",
    views: 247,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    title: "City Apartment",
    address: "456 Pine Avenue, New York",
    status: "Sold",
    views: 385,
    image: "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=400&q=80",
  },
];



const SharedListings = () => {
  return (
    <div className="bg-cardbg shadow-md rounded-lg p-6 ">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm md:text-lg text-textnormal font-semibold">Shared Listings</h2>
        <p className="text-xs text-subtext">
          These listings are view-only. You cannot edit or delete them.
        </p>
      </div>

      {/* Listings */}
      <div className="flex flex-col gap-4">
        {listings.map((listing) => (
          <div
            key={listing.id}
            className="flex items-center bg-cardbg border border-bordercolor rounded-md p-4 shadow-sm"
          >
            <Image
              width={100}
              height={100}
              src={listing.image}
              alt={listing.title}
              className="w-20 h-16 rounded-md object-cover mr-4"
            />
            <div className="flex flex-col">
              <h3 className="text-sm md:text-lg font-semibold text-textnormal">{listing.title}</h3>
              <p className="text-xs text-subtext">{listing.address}</p>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-xs bg-green-600 text-white px-2 py-0.5 rounded-full">
                  ● {listing.status}
                </span>
                <span className="text-xs text-subtext">{listing.views} Views</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SharedListings;
