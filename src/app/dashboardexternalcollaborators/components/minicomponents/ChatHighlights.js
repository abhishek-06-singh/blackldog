import React from 'react';
import Image from 'next/image';

const chatsData = [
  {
    id: 1,
    name: 'Sarah Johnson',
    topic: 'Downtown Condo Discussion',
    status: '3 New',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    topic: 'Interested in Modern Apartment',
    status: '3 New',
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    topic: 'Interested in Modern Apartment',
    status: '',
    avatar: 'https://randomuser.me/api/portraits/women/46.jpg',
  },
  {
    id: 4,
    name: 'Sarah Johnson',
    topic: 'Interested in Modern Apartment',
    status: '',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
];

const ChatHighlights = () => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg text-textnormal font-semibold">Chat Highlights</h2>
        <button className="text-xs md:text-sm px-3 py-1 border border-bordercolor rounded-lg text-textnormal hover:bg-gray-100">
          Go to Inbox
        </button>
      </div>
      <div className="border border-bordercolor bg-cardbg shadow-md rounded-xl p-2 lg:min-h-[360px] flex flex-col justify-center">
        {chatsData.map((chat) => (
          <div
            key={chat.id}
            className="flex items-center justify-between p-4 border-b border-bordercolor last:border-b-0"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 relative">
                <Image
                  src={chat.avatar}
                  alt="Avatar"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium text-sm lg:text-base text-textnormal">
                  {chat.name}
                </h4>
                <p className="text-xs text-textnormal">{chat.topic}</p>
              </div>
            </div>
            {chat.status && (
              <span className="text-xs font-medium px-3 py-1 whitespace-nowrap rounded-full bg-shadow text-textnormal">
                {chat.status}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatHighlights;
