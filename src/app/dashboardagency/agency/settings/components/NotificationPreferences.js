'use client';
import React, { useState } from 'react';
import { Switch } from 'antd';

const notificationSettings = [
  {
    section: 'Email Notifications',
    options: [
      { id: 1, label: 'New Lead Assignment' },
      { id: 2, label: 'Listing Approval Status' },
      { id: 3, label: 'Monthly Summary' },
    ],
  },
  {
    section: 'In-App Notifications',
    options: [
      { id: 4, label: 'Upcoming appointments' },
      { id: 5, label: 'Team Updates' },
      { id: 6, label: 'Real time chat updates' },
    ],
  },
];

export default function NotificationPreferences() {
  const [toggles, setToggles] = useState(() =>
    notificationSettings.flatMap(group => group.options).reduce((acc, cur) => {
      acc[cur.id] = true;
      return acc;
    }, {})
  );

  const handleToggle = (id) => {
    setToggles(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="bg-cardbg rounded-xl border border-bordercolor p-4 shadow-md w-full">
      <h2 className="text-base font-semibold text-textheading mb-6">Notification Preferences</h2>

      <div className="flex flex-col gap-6">
        {notificationSettings.map((group) => (
          <div key={group.section}>
            <div className="text-sm font-medium text-textheading mb-2">{group.section}</div>
            {group.options.map(({ id, label }) => (
              <div
                key={id}
                className="flex items-center justify-between py-2"
              >
                <div className="text-sm text-textnormal">{label}</div>
                <Switch
                  checked={toggles[id]}
                  onChange={() => handleToggle(id)}
                  className="bg-buttonbg"
                  size="small"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
