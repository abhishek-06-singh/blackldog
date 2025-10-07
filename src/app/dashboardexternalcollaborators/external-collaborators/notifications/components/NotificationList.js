'use client'

import React from 'react'
import Image from 'next/image'
import messageIcon from '../icons/message.svg'
import propertyIcon from '../icons/userplus.svg'
import documentIcon from '../icons/pdf.svg'

const notifications = [
  {
    id: 1,
    title: 'New Property Shared: Lakeview Condo',
    subtitle: 'Sarah Johnson shared a property with you.',
    time: '5 mins ago',
    icon: <Image src={propertyIcon} alt="property icon" />,
    action: {
      label: 'View Property',
      href: '#',
    },
  },
  {
    id: 2,
    title: 'New Message from Emily Johnson',
    subtitle: '"Hey, did you check the documents?"',
    time: '5 mins ago',
    icon: <Image src={messageIcon} alt="message icon" />,
  },
  {
    id: 3,
    title: 'Document Access Updated',
    subtitle:
      'Your access to property documents has been updated for Sunset Villa.',
    time: '5 mins ago',
    icon: <Image src={documentIcon} alt="document icon" />,
  },
]

export default function NotificationList() {
  return (
    <div className="p-4 w-full space-y-4">
      <h3 className="font-semibold text-lg text-textheading mb-4">Today</h3>

      {notifications.map((notif) => (
        <div
          key={notif.id}
          className="flex flex-col sm:flex-row gap-4 p-4 bg-cardbg rounded-lg shadow-md border border-bordercolor items-start sm:items-center"
        >
          <div className="w-11 h-11 flex items-center justify-center rounded-full bg-orange-100 shrink-0">
            {notif.icon}
          </div>

          <div className="flex flex-col gap-1 w-full">
            <span className="font-semibold text-textheading">
              {notif.title}
            </span>

            <span className="text-textnormal text-sm">{notif.subtitle}</span>

            {/* Action button if exists */}
            {notif.action && (
              <button
                type="button"
                onClick={() => {
                  window.location.href = notif.action.href
                }}
                className="bg-buttonbg text-background text-xs px-3 py-1 rounded-md w-fit mt-1"
              >
                {notif.action.label}
              </button>
            )}

            <span className="text-subtext text-xs mt-1">{notif.time}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
