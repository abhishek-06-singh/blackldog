import React from "react";
export default function Map({property, lat = 40.7128, lng = -74.0060 }) {
  return (
    <div className="bg-cardbg rounded-xl  mb-6 border border-bordercolor shadow-md">
        <h2 className="text-lg my-3 px-2 text-textnormal">Location</h2>
   <div className="px-3 pb-3">
    <iframe
      width="100%"
      height={220}
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      src={`https://www.google.com/maps/embed/v1/view?key=&center=${lat},${lng}&zoom=14`}
      className="bg-gray-500 rounded-2xl "
    ></iframe>
    <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <p className="text-textnormal text-xs md:text-sm">Address:</p>
            <p className="text-textnormal text-xs md:text-sm">{property.address},{property.city}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <p className="text-textnormal text-xs md:text-sm">Neighborhood:</p>
            <p className="text-textnormal text-xs md:text-sm">{property.neighborhood || "SOMA District"}</p>
        </div>
    </div>
    </div>
    </div>

  );
}