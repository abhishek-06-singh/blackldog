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
    <div className="bg-cardbg w-full h-screen flex flex-col p-2 overflow-hidden">
      {/* 🔍 Search Input */}
      <input
        type="text"
        placeholder="Search by  name, property..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="rounded-xl w-full p-4 mb-2 text-xs sm:text-sm h-10 bg-cardbg text-textnormal focus:ring-0 focus:border-textnormal border border-bordercolor shadow-none outline-none"
      />

      {/* 🗂 Filter Buttons */}
      <div className="flex space-x-2 mb-4 flex-wrap">
        {['all', '1:1', 'group'].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-3 py-1 text-xs md:text-sm rounded-md border ${
              filter === type
                ? 'bg-buttonbg text-background'
                : 'bg-background text-textnormal border-bordercolor'
            }`}
          >
            {type === 'all' ? 'All' : type === '1:1' ? '1:1 Chats' : 'Group Chats'}
          </button>
        ))}
      </div>

      {/* 💬 Chat List */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
        {filteredConversations.length === 0 ? (
          <div className="flex items-center justify-center h-32 text-textnormal">
            No chats found
          </div>
        ) : (
          filteredConversations.map((conv, index) => (
            <div
              key={index}
              onClick={() => onSelect(conv)}
              className={`w-full py-2 md:px-1 cursor-pointer border-b border-bordercolor border-l-4 transition-all duration-300 ease-in-out ${
                selectedConversation?.name === conv.name
                  ? 'border-l-buttonbg bg-cardbg'
                  : 'border-l-transparent hover:bg-cardbg/50'
              }`}
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
                  <div className="flex gap-4 justify-start sm:justify-between items-center">
                    <div className="font-semibold text-xs md:text-sm text-textheading truncate">
                      {conv.name}
                    </div>
                    <div className="text-xs text-textnormal">{conv.time}</div>
                  </div>
                  <p className="text-xs text-textnormal truncate line-clamp-2">
                    {conv.preview}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ChatList;
