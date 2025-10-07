'use client';
import React, { useState } from 'react';
import { MapPinIcon } from '@heroicons/react/24/solid';
import { Bath, Heart, Ruler, Bed } from 'lucide-react';
import Link from 'next/link';

export default function CardComponent_External({ listings }) {
    const [liked, setLiked] = useState([]);
  return (
    <div className="max-w-2xl">
      {Array.isArray(listings) && listings.length === 0 ? (
        <div className="text-center text-textnormal py-10 text-lg">
          No listings found.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {listings.map((item) => ( // 👈 Show only 2 cards
            <div
              key={item.id}
              className="rounded-xl border border-bordercolor shadow-md hover:shadow-lg transition-shadow duration-300 bg-background cursor-pointer"
            >
              <Link href={`/dashboardexternalcollaborators/external-collaborators/sharedlisting/${item.id}`} className="block">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 sm:h-52 md:h-56 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-3 left-3 bg-buttonbg text-white text-xs px-3 py-1 rounded-md shadow-sm">
                    For Sale
                  </div>
                  <div className="absolute top-3 right-3 bg-buttonbg text-xs p-1 rounded-full shadow-sm w-8 h-8 flex items-center justify-center">
                    <Heart
                      className={`w-4 h-4 md:w-5 md:h-5 text-white cursor-pointer transition ${
                        liked.includes(item.id)
                          ? 'fill-red-500 stroke-red-500'
                          : 'hover:fill-red-500 hover:stroke-red-500'
                      }`}
                    />
                    <button
                      onClick={() => {
                        setLiked((prev) =>
                          prev.includes(item.id)
                            ? prev.filter((id) => id !== item.id)
                            : [...prev, item.id]
                        );
                      }}
                      aria-label="Like listing"
                      type="button"
                      className="absolute inset-0 w-full h-full cursor-pointer"
                    ></button>
                  </div>
                </div>

                <div className="p-3 space-y-2 md:p-2 md:space-y-2.5 mb-3">
                  <div className="flex items-center justify-between md:pt-3">
                    <div className="flex items-center gap-2">
                      <img
                        src={item.agentAvatar}
                        alt={item.agent}
                        className="w-6 h-6 md:w-8 md:h-8 rounded-full object-cover"
                      />
                      <p className="text-xs md:text-base text-primary font-semibold">{item.agent}</p>
                    </div>
                    <p className="text-lg md:text-2xl text-primary">
                      ${item.price || `${item.rent} /mo`}
                    </p>
                  </div>

                  <h2 className="text-base md:text-lg text-cardHeading truncate">{item.title}</h2>

                  <p className="text-textnormal text-xs md:text-sm flex items-center gap-1">
                    <MapPinIcon className="w-4 h-4 md:w-5 md:h-5 text-textnormal" />
                    {item.address}, {item.city}
                  </p>

                  <div className="flex flex-row flex-wrap justify-between px-1.5 pt-1 gap-1 text-xs text-primary">
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4 md:w-5 md:h-5" />
                      <span>{item.bedrooms} Beds</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4 md:w-5 md:h-5" />
                      <span>{item.bathrooms} Baths</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Ruler className="w-4 h-4 md:w-5 md:h-5" />
                      <span>{item.areaSqFt} sqft</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
