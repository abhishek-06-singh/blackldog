import React from 'react';
import Image from 'next/image';
const leadsData = [
  {
    id: 1,
    name: 'Sarah Johnson',
    interest: 'Interested in Modern Apartment',
    status: 'New',
    statusColor: 'gray',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    interest: 'Interested in Modern Apartment',
    status: 'Active',
    statusColor: 'green',
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    interest: 'Interested in Modern Apartment',
    status: 'Follow-Up',
    statusColor: 'yellow',
    avatar: 'https://randomuser.me/api/portraits/women/46.jpg',
  },
];

const getStatusClasses = (color) => {
  const colors = {
    gray: {
      bg: 'bg-gray-200',
      text: 'text-gray-700',
      dot: 'bg-gray-500',
    },
    green: {
      bg: 'bg-green-500',
      text: 'text-white',
      dot: 'bg-white',
    },
    yellow: {
      bg: 'bg-status-pending-in-review-500',
      text: 'text-white',
      dot: 'bg-white',
    },
  };
  return colors[color] || colors.gray;
};

const RecentLeads = () => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col ">
      <h2 className="text-lg text-textnormal font-semibold mb-2">Recent Leads</h2>
      <div className="border border-bordercolor bg-cardbg shadow-md rounded-xl p-2 lg:min-h-[360px] flex flex-col justify-center">
        {leadsData.map((lead) => {
          const classes = getStatusClasses(lead.statusColor);
          return (
            <div key={lead.id} className="flex items-center justify-between p-4 ">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 relative">
  <Image
    src={lead.avatar}
    alt="Avatar"
    fill
    className="rounded-full object-cover"
  />
</div>
                <div>
                  <h4 className="font-medium text-sm lg:text-base text-textnormal">{lead.name}</h4>
                  <p className="text-[14px] text-textnormal">{lead.interest}</p>
                </div>
              </div>
              <span
                className={`text-xs  font-medium px-3 py-1 whitespace-nowrap rounded-full flex items-center ${classes.bg} ${classes.text}`}
              >
                <span className={`w-2 h-2 rounded-full mr-2 ${classes.dot}`}></span>
                {lead.status}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentLeads;
