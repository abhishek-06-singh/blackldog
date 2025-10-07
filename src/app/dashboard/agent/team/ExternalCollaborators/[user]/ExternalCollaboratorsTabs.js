'use client'
import React, { useState } from 'react'
import PropertiesTabExternal from './components/PropertiesTabExternal'
import MessagesTabExternal from './components/MessagesTabExternal'
// Example icons (replace with your own if needed)
import { Home, Users, MessageCircle, DollarSign } from 'lucide-react'

// Dummy components for each tab

const ExternalCollaboratorsTabs = ({ decodedUser }) => {
  const [activeTab, setActiveTab] = useState('properties')

  const tabs = [
    {
      id: 'properties',
      label: 'Properties',
      icon: <Home size={16} />,
      component: <PropertiesTabExternal decodedUser={decodedUser} />,
    },
   
    {
      id: 'messages',
      label: 'Messages',
      icon: <MessageCircle size={16} />,
      component: <MessagesTabExternal />,
    },
   
  ]

  return (
    <div className="w-full">
      {/* Tabs Header */}
      <div className="flex border-b border-bordercolor">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-medium rounded-t-lg transition-all
              ${
                activeTab === tab.id
                  ? 'text-buttonbg border-b-2 border-buttonbg'
                  : 'text-textnormal hover:text-textheading'
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      <div className="mt-4">
        {tabs.find((tab) => tab.id === activeTab)?.component}
      </div>
    </div>
  )
}

export default ExternalCollaboratorsTabs
