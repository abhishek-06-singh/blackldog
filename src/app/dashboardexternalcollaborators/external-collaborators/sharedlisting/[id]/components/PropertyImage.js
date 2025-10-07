import React from 'react';
import Image from 'next/image';
import { MapPinIcon } from '@heroicons/react/24/solid';
import { Camera } from 'lucide-react';

export default function PropertyImage({ property }) {
  return (
    <div className="w-full">
      {/* Property Image */}
      <div
        className="
          relative 
          h-[250px] sm:h-[350px] md:h-[400px]
          rounded-xl overflow-hidden
        "
      >
        <Image
          src={property.image}
          alt={property.title || `Property ${property.id}`}
          width={1200}
          height={800}
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Buttons under the image */}
      <div className="grid grid-cols-2 gap-2 mt-2">
        <button className="flex items-center justify-center gap-2 py-3 text-xs sm:text-sm md:text-base text-textnormal bg-shadow rounded-lg  transition">
          <Camera className="w-4 h-4 sm:w-5 sm:h-5" />
          View Gallery ({property.galleryCount || 12})
        </button>
        <button className="flex items-center justify-center gap-2 py-3 text-xs sm:text-sm md:text-base text-textnormal bg-shadow rounded-lg transition">
          <MapPinIcon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          View on Map
        </button>
      </div>
    </div>
  );
}
