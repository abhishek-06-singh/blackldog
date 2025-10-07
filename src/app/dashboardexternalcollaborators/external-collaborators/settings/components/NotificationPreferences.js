'use client'

import React, { useState } from 'react'
import { Switch } from 'antd'


const notificationSettings = [
  { id: 1, label: 'Property shared with you' },
  { id: 2, label: 'New chat invitation' },
  { id: 3, label: 'New message in shared chat' },
  { id: 4, label: 'Access expiring reminder' },
  { id: 5, label: 'Chat @mentions' },
]

export default function NotificationPreferences() {
  const [toggles, setToggles] = useState(() =>
    notificationSettings.reduce((acc, cur) => {
      if (!cur.isHeading) acc[cur.id] = true
      return acc
    }, {})
  )

  const handleToggle = (id) => {
    setToggles((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="bg-cardbg rounded-xl border border-bordercolor p-4 shadow-md w-full">
      <h2 className="text-base font-semibold text-textheading mb-6">
        Notification Preferences
      </h2>

      <div className="flex flex-col gap-4">
        {notificationSettings.map(({ id, label, isHeading }) => (
          isHeading ? (
            <div key={id} className="text-sm font-semibold text-textheading mt-2">
              {label}
            </div>
          ) : (
            <div
              key={id}
              className="flex flex-col sm:flex-row sm:items-center justify-between"
            >
              <div className="text-sm text-primary">{label}</div>
              <Switch
                checked={toggles[id]}
                onChange={() => handleToggle(id)}
                className="mt-2 sm:mt-0"
                size="small"
              />
            </div>
          )
        ))}
      </div>
    </div>
  )
}
