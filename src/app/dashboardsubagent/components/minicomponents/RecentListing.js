import React from 'react';
import Image from 'next/image';

const listingsData = [
  {
    id: 1,
    title: 'Modern Family Home',
    price: '$450,000 - $600,000',
    status: 'Active',
    statusColor: 'green',
    image: 'https://images.unsplash.com/photo-1560185127-6ed189bf02b5?auto=format&fit=crop&w=64&h=64&q=80',
    link: '/listings/1',
  },
  {
    id: 2,
    title: 'Modern Family Home',
    price: '$450,000 - $600,000',
    status: 'Active',
    statusColor: 'green',
    image: 'https://images.unsplash.com/photo-1572120360610-d971b9b78847?auto=format&fit=crop&w=64&h=64&q=80',
    link: '/listings/2',
  },
  {
    id: 3,
    title: 'Modern Family Home',
    price: '$450,000 - $600,000',
    status: 'Active',
    statusColor: 'green',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=64&h=64&q=80',
    link: '/listings/3',
  },
];


const getStatusClasses = (color) => {
  const colors = {
    green: {
      bg: 'bg-green-500',
      text: 'text-white',
      dot: 'bg-white',
    },
    gray: {
      bg: 'bg-gray-200',
      text: 'text-gray-700',
      dot: 'bg-gray-500',
    },
    yellow: {
      bg: 'bg-status-pending-in-review-500',
      text: 'text-white',
      dot: 'bg-white',
    },
  };
  return colors[color] || colors.gray;
};

const RecentListings = () => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col ">
      <h2 className="text-lg text-textnormal font-semibold mb-2">Recent Listings</h2>
      <div className="border border-bordercolor bg-cardbg shadow-md rounded-xl p-2 lg:min-h-[360px] flex flex-col justify-center">
        {listingsData.map((listing) => {
          const classes = getStatusClasses(listing.statusColor);
          return (
            <div key={listing.id} className="flex items-center justify-between p-4 ">
              <div className="flex items-center space-x-4">
                <Image width={100} height={100} src={listing.image} alt="Listing" className="w-auto rounded-md object-cover" />
                <div>
                  <h4 className="font-medium text-sm md:text-base text-textnormal">{listing.title}</h4>
                  <p className="text-xs md:text-sm text-textnormal">{listing.price}</p>
                </div>
              </div>
              <span
                className={`text-xs font-medium px-3 py-1 rounded-full flex items-center ${classes.bg} ${classes.text}`}
              >
                <span className={`w-2 h-2 rounded-full mr-2 ${classes.dot}`}></span>
                {listing.status}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentListings;
