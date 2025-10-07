'use client'
import React, { useState } from 'react'
import ChatList from './ChatList'
import ChatWindow from './ChatWindow'
import SubAgentChatList from './SubAgentChatList'
import SubAgentChatWindow from './SubAgentChatWindow'
import { ConfigProvider } from 'antd';
import GroupDetailsSidebar from './GroupDetailsSidebar'
import { ArrowLeft } from 'lucide-react'

const conversationsData = [
  {
    name: 'Michael Chen',
    avatar: 'https://i.pravatar.cc/150?img=3',
    agent: 'Sub-Agent',
    extra: 'with John Smith(Lead)',
    isGroup: false,
    preview: "I'll send you the proposal by tomorrow...",
    time: '9:15 AM',
    messages: [
      {
        from: 'them',
        text: 'Hi! I’m interested in the property at 456 Maple Ave. Can we schedule a viewing?',
        time: '9:15 AM',
      },
      {
        from: 'me',
        text: 'Absolutely! I have availability tomorrow at 2 PM or Thursday at 10 AM. Which works better for you?',
        time: '9:16 AM',
      },
    ],
  },

  {
    name: '123 Oak Street',
    avatar: 'https://i.pravatar.cc/150?img=5',
    agent: 'Listing Agent',
    extra: '',
    isGroup: false,
    preview: "Perfect! I'll send the contract today",
    time: '9:15 AM',
    messages: [
      {
        from: 'them',
        text: 'Hi! I’m interested in the property at 456 Maple Ave. Can we schedule a viewing?',
        time: '9:15 AM',
      },
      {
        from: 'me',
        text: 'Absolutely! I have availability tomorrow at 2 PM or Thursday at 10 AM. Which works better for you?',
        time: '9:16 AM',
      },
    ],
  },

  {
    name: 'DownTown Team',
    avatar: 'https://i.pravatar.cc/150?img=7',
    agent: 'Team Agent',
    extra: '',
    isGroup: true,
    preview: "Perfect! I'll send the contract today",
    time: '9:15 AM',
    messages: [
      {
        from: 'Michael Chen',
        role: 'Agent',
        avatar: 'https://i.pravatar.cc/150?img=3',
        text: 'Hi! I’m interested in the property at 456 Maple Ave. Can we schedule a viewing?',
        time: '9:15 AM',
      },
      {
        from: 'John Smith',
        role: 'Lead',
        avatar: 'https://i.pravatar.cc/150?img=4',
        text: 'Absolutely! I have availability tomorrow at 2 PM or Thursday at 10 AM. Which works better for you?',
        time: '9:16 AM',
      },
      {
        from: 'John Williams',
        role: 'Sub-Agent',
        avatar: 'https://i.pravatar.cc/150?img=5',
        text: 'I have availability tomorrow at 2 PM or Thursday at 10 AM. Which works better for you?',
        time: '9:17 AM',
      },
    ],
  },
];


const MessagesTabs = () => {
  const [activeTab, setActiveTab] = useState('my')
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
   const [showMyChatWindow, setShowMyChatWindow] = useState(false)
  const [showSubChatWindow, setShowSubChatWindow] = useState(false)

  const handleSelectConversation = (conv) => {
    setSelectedConversation(conv)
    if (activeTab === 'my') setShowMyChatWindow(true)
    else setShowSubChatWindow(true)
  }

  const handleBack = () => {
    if (activeTab === 'my') setShowMyChatWindow(false)
    else setShowSubChatWindow(false)
  }

return (
    <div className="relative">
      {/* Sidebar stays unchanged */}
      {showSidebar && (
        <div className="overflow-y-scroll fixed right-0 top-0 h-full w-80 bg-cardbg shadow-lg border-l border-bordercolor z-50 p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Group Settings</h2>
            <button onClick={() => setShowSidebar(false)} className="text-gray-500 hover:text-gray-700">
              ✕
            </button>
          </div>
          <GroupDetailsSidebar />
        </div>
      )}

      
        {/* Content */}
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#EEB887',
              borderRadius: 12,
            },
            components: {
              Steps: {
                colorPrimary: '#EEB887',
                colorText: '#000',
                colorTextActive: '#EEB887',
              },
            },
          }}
        >
          
            <div className="mt-6 flex h-screen">
              {/* Chat List */}
              <div className={`w-full lg:w-[40%] ${showMyChatWindow ? 'hidden lg:block' : 'block'}`}>
                <ChatList
                  conversations={conversationsData}
                  onSelect={handleSelectConversation}
                  selectedConversation={selectedConversation}
                />
              </div>

              {/* Chat Window */}
              <div className={`w-full  lg:w-[60%] ${showMyChatWindow ? 'block' : 'hidden lg:block'}`}>
                {selectedConversation && (
                  <div className="relative h-full">
                    {/* 🔙 Back Button */}
                    

                    <ChatWindow
                      conversation={selectedConversation}
                      onOpenGroupSettings={() => setShowSidebar(true)}
                      handleBack={handleBack}
                    />
                  </div>
                )}
              </div>
            </div>
       

        </ConfigProvider>
      </div>
    
  )
}

export default MessagesTabs
