'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';

const ChatList = ({ conversations, onSelect, selectedConversation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all'); 

  const filteredConversations = useMemo(() => {
    return conversations.filter((conv) => {
      const matchesSearch = conv.name.toLowerCase().includes(searchTerm.toLowerCase());
      const isGroup = conv.name.toLowerCase().includes('team') || conv.agent === 'Team Agent';
      const isOneToOne = !isGroup;

      if (filter === '1:1' && !isOneToOne) return false;
      if (filter === 'group' && !isGroup) return false;

      return matchesSearch;
    });
  }, [conversations, searchTerm, filter]);

  return (
    <div
      className={`
        bg-cardbg h-screen overflow-y-auto border-r border-bordercolor p-2
      `}
    >
      {/* 🔍 Search Input */}
      <input
        type="text"
        placeholder="Search by agent name, property..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-3 py-2 mb-4 border border-bordercolor rounded-md text-sm focus:outline-none"
      />

      {/* 🗂 Filter Buttons */}
      <div className="flex space-x-2 mb-4">
        {['all', '1:1', 'group'].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-3 py-1 text-sm rounded-md border ${
              filter === type
                ? 'bg-buttonbg text-background text-sm'
                : 'bg-background text-textnormal border-bordercolor text-sm'
            }`}
          >
            {type === 'all' ? 'All' : type === '1:1' ? '1:1 Chats' : 'Group Chats'}
          </button>
        ))}
      </div>

      {/* 💬 Chat List */}
      {filteredConversations.map((conv, index) => (
        <div
          key={index}
          onClick={() => onSelect(conv)}
          className={`
            w-full py-2 px-1 cursor-pointer border-b border-b-bordercolor border-l-4
            ${selectedConversation?.name === conv.name ? 'border-l-buttonbg bg-cardbg' : 'border-l-transparent'}
          `}
        >
          <div className="flex items-center">
            <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={conv.avatar}
                alt={conv.name}
                width={56}
                height={56}
                className="object-cover"
              />
            </div>
            <div className="w-full p-2">
              <div className="flex justify-between items-center">
                <div className="font-semibold text-sm text-textheading">{conv.name}</div>
                <div className="text-xs text-textnormal">{conv.time}</div>
              </div>
              <div className="text-xs text-textnormal truncate">{conv.preview}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
