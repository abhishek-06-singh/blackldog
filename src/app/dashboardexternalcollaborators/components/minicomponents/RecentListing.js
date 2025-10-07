import React from 'react';
import Image from 'next/image';

const listingsData = [
    {
    id: 1,
    title: 'Modern Family Home',
    location: 'Downtown, Seattle',
    sharedBy: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=400&h=300&q=80',
    link: '/listings/1',
  },
  {
    id: 2,
    title: 'Modern Family Home',
    location: 'Downtown, Seattle',
    sharedBy: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=400&h=300&q=80',
    link: '/listings/2',
  },
  {
    id: 3,
    title: 'Modern Family Home',
    location: 'Downtown, Seattle',
    sharedBy: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=100&h=100&q=80',
    link: '/listings/3',
  },
];

const RecentListings = () => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg text-textnormal font-semibold">Recent Listings</h2>
        <button className="text-xs md:text-sm px-3 py-1 border border-bordercolor rounded-lg text-textnormal hover:bg-gray-100">
          View All Listings
        </button>
      </div>
      <div className="border border-bordercolor bg-cardbg shadow-md rounded-xl p-2 lg:min-h-[360px] flex flex-col justify-center">
        {listingsData.map((listing) => (
          <div
            key={listing.id}
            className="flex items-center justify-between p-4 "
          >
            <div className="flex items-center space-x-4">
              <Image
                width={64}
                height={64}
                src={listing.image}
                alt="Listing"
                className="rounded-md object-cover"
              />
              <div>
                <h4 className="font-medium text-sm md:text-base text-textnormal">{listing.title}</h4>
                <p className="text-xs md:text-sm text-textnormal">{listing.location}</p>
                <p className="text-xs text-subtext">Shared by {listing.sharedBy}</p>
              </div>
            </div>
            <button className="px-4 py-2 text-xs md:text-sm bg-secondary text-textnormal font-medium rounded-lg hover:bg-orange-200">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentListings;
