'use client';
import React from 'react';
import Link from 'next/link';

export default function MediaGallery({ listings }) {
  return (
    <div className="w-full border border-bordercolor rounded-xl p-2 shadow-md bg-cardbg">
        <h2 className="text-lg font-semibold text-textnormal mb-4">Media Gallery</h2>
      {Array.isArray(listings) && listings.length === 0 ? (
        <div className="text-center text-textnormal  text-lg">
          No listings found.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 ">
          {listings.map((item) => (
            <Link
              key={item.id}
              href={`/dashboardexternalcollaborators/external-collaborators/sharedlisting/${item.id}`}
              className="block rounded-xl border border-bordercolor shadow-md hover:shadow-lg transition-shadow duration-300 bg-background overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full md:h-40   object-cover rounded-xl"
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
