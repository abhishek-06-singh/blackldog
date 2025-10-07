'use client'
import { useState } from 'react'

const messages = [
  {
    id: 1,
    name: 'Sarah Johnson',
    subject: 'Property Inquiry',
    message: "Hi Sarah, I'm interested in the downtown condo listing...",
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    time: '2 hours ago',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    subject: 'Property Inquiry',
    message: "Hi Sarah, I'm interested in the downtown condo listing...",
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    time: '2 hours ago',
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    subject: 'Property Inquiry',
    message: "Hi Sarah, I'm interested in the downtown condo listing...",
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    time: '2 hours ago',
  },
]

export default function MessagesTabExternal() {
  return (
    <div className="mt-8">
      <h2 className="text-lg text-textheading font-semibold mb-4">
        Recent Communications
      </h2>

      {/* Responsive wrapper just like table */}
      <div className="overflow-x-auto rounded-xl border border-bordercolor bg-cardbg shadow divide-y divide-bordercolor">
        <div className="min-w-[600px]"> {/* Ensures horizontal scroll on small screens */}
          {messages.map((msg, index) => (
            <div
              key={msg.id}
              className={`
                flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 transition 
                ${index === 0 ? 'hover:bg-boxbg hover:rounded-t-xl' : 'hover:bg-boxbg'}
              `}
            >
              {/* Left: Avatar + Message */}
              <div className="flex items-start sm:items-center gap-3 w-full sm:w-auto pr-4 sm:pr-16">
                <img
                  src={msg.avatar}
                  alt={msg.name}
                  className="w-10 h-10 rounded-full object-cover shrink-0"
                />
                <div className="flex flex-col min-w-0">
                  <div className="text-xs sm:text-sm font-semibold text-textheading whitespace-nowrap">
                    {msg.name} - {msg.subject}
                  </div>
                  <div className="text-xs sm:text-sm text-textnormal truncate max-w-[12rem] sm:max-w-[16rem] md:max-w-md">
                    {msg.message}
                  </div>
                </div>
              </div>

              {/* Right: Time + Button */}
              <div className="flex items-center gap-3 mt-4 sm:mt-0 sm:ml-auto shrink-0">
                <span className="text-xs sm:text-sm text-textnormal whitespace-nowrap">
                  {msg.time}
                </span>
                <button className=" font-medium bg-buttonbg text-background px-5 sm:px-7 py-2 rounded-lg text-sm hover:scale-95 transition-transform whitespace-nowrap">
                  Open Conversation
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
