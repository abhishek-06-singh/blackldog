'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from 'antd';
import { PaperClipOutlined } from '@ant-design/icons';
import { Send } from 'lucide-react';
import InviteModal from './InviteModal';
import { ArrowLeft } from 'lucide-react'
import { Menu, Dropdown } from 'antd';
import { MoreOutlined } from '@ant-design/icons';

const SubAgentChatWindow = ({ conversation,onOpenGroupSettings,handleBack }) => {
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);

  if (!conversation) {
    return (
      <div className="hidden md:flex md:w-2/3 items-center justify-center text-textnormal h-screen">
        Select a conversation
      </div>
    );
  }
    const handleMenuClick = ({ key }) => {
if (key === 'groupSettings' && onOpenGroupSettings) {
  onOpenGroupSettings(); 
}
};
  const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">Edit Contact</Menu.Item>
    <Menu.Item key="2">Delete Conversation</Menu.Item>
    <Menu.Item key="groupSettings">Group Settings</Menu.Item>
  </Menu>
);

  const participants = conversation.extra
    ? conversation.name + ' ' + conversation.extra
    : conversation.name;

  return (
    <div className=" flex flex-col h-screen bg-cardbg">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-bordercolor">
        <button
          onClick={handleBack}
          className="md:hidden absolute top-4 left-4 z-50 bg-background border border-bordercolor p-2 rounded-full"
        >
          <ArrowLeft className="w-5 h-5 text-textnormal" />
        </button>
        <div className="flex items-center space-x-2 pl-16 p-2 md:pl-0 md:p-4">
          <div className=" flex space-x-2">
            <Image
              src={conversation.avatar}
              alt={conversation.name}
              width={40}
              height={40}
              className="rounded-full object-cover border-2 border-bordercolor"
            />
            {/* Hardcoding second avatar for demo as in image */}
            {conversation.isGroup && (
              <Image
                src="https://i.pravatar.cc/150?img=12"
                alt="John Smith"
                width={40}
                height={40}
                className="rounded-full object-cover border-2 border-bordercolor"
              />
            )}
          </div>
          <div>
            <h2 className="text-lg font-semibold text-textheading">
              {conversation.isGroup ? 'Michael Chen & John Smith' : conversation.name}
            </h2>
            <p className="text-sm text-textnormal">
              {conversation.agent}
              {conversation.extra ? ' ' + conversation.extra : ''}
            </p>
          </div>
        </div>
         <div className="flex items-center space-x-2">
        <Button
          className="border border-bordercolor bg-cardbg text-textnormal"
          onClick={() => setIsInviteModalOpen(true)}
        >
          Invite
        </Button>
        <Dropdown overlay={menu} trigger={['click']}  className="bg-transparent">
           
            <Button
              icon={<MoreOutlined className='text-textnormal w-6 h-6' />}
              className="border-none p-2"
            />
          </Dropdown>
          </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {conversation.messages.length > 0 ? (
          conversation.messages.map((msg, index) => (
            <div key={index} >
                
              <div className=" flex items-center space-x-2 mb-1">
                <Image
                  src={msg.from === 'them' ? conversation.avatar : 'https://i.pravatar.cc/150?img=12'}
                  alt={msg.from === 'them' ? conversation.name : 'Me'}
                  width={24}
                  height={24}
                  className="rounded-full object-cover"
                />
                <div className="text-xs font-semibold text-textnormal">
                  {msg.from === 'them' ? conversation.name : 'John Smith'}
                  <span className="ml-2 px-2 py-0.5 bg-subtext text-background rounded text-[10px] font-normal">
                    {msg.from === 'them' ? conversation.agent : 'Lead'}
                  </span>
                </div>
              </div>

              <div className="bg-background border border-bordercolor rounded-lg px-4 py-3 text-textnormal text-sm">
                {msg.text}
              </div>

              <div className="text-[10px] text-textnormal mt-1">{msg.time}</div>
            </div>
          ))
        ) : (
          <div className="text-textnormal text-sm text-center mt-8">
            No messages in this conversation yet.
          </div>
        )}
      </div>

      {/* Document signing prompt */}
      <div className="w-full flex justify-between items-center bg-shadow p-4 border-t border-bordercolor">
        <p className="text-textnormal font-semibold text-sm">
          Instantly get ur document signed via Zapsign
        </p>
        <Button className="text-xs rounded-md bg-background text-textnormal border border-bordercolor">
          Send Document for Signature
        </Button>
      </div>

      {/* Input box */}
      <div className="p-4 flex items-center gap-x-3 border-t border-bordercolor">
        {/* Attach Button */}
        <button className="text-textnormal">
          <PaperClipOutlined className="w-5 h-5" />
        </button>

        {/* Message Input */}
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 rounded-md border border-bordercolor focus:outline-none text-sm text-textnormal bg-background"
        />

        {/* Send Button */}
        <button className="bg-buttonbg rounded-md p-2 flex items-center justify-center">
          <Send className="w-5 h-5 text-background" />
        </button>
      </div>

      <InviteModal
        open={isInviteModalOpen}
        onCancel={() => setIsInviteModalOpen(false)}
        onConfirm={({ email, role }) => {
          console.log('Inviting:', email, 'as', role);
          setIsInviteModalOpen(false);
        }}
      />
    </div>
  );
};

export default SubAgentChatWindow;
