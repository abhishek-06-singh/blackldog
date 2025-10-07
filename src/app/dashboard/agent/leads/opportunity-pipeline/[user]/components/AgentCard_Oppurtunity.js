'use client'

import { Card, Avatar, Tag } from 'antd'
import { MessageOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons'
import { Check } from 'lucide-react'

const AgentCard_Oppurtunity = () => {
  return (
    <div className="!bg-cardbg p-4 sm:p-6 rounded-2xl shadow-md border border-bordercolor w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 w-full">
        {/* Left Section: Avatar + Info */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 flex-grow min-w-0 w-full">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <Avatar
              src="https://randomuser.me/api/portraits/women/44.jpg"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left w-full">
            {/* Name + Verified */}
            <div className="flex flex-col md:flex-row md:items-center gap-1 sm:gap-3 w-full justify-center md:justify-start">
              <h3 className="m-0 font-semibold text-base md:text-lg leading-[150%] text-textheading">
                Sarah Johnson
              </h3>

              <Tag className="rounded-full border bg-cardbg border-green-500 px-3 py-0.5 text-xs font-normal leading-[150%] tracking-[-0.02em] text-textnormal flex items-center gap-1 w-fit mx-auto md:mx-0">
                <Check className="w-3 h-3 text-white bg-green-500 rounded-full" />
                <span className="text-green-500">Verified</span>
              </Tag>
            </div>

            {/* Role */}
            <p className="m-0 font-normal text-sm leading-[150%] tracking-[-0.02em] text-textnormal">
              Sub-Agent
            </p>
            <p className="m-0 text-subtext text-xs leading-[150%]">
              Joined: Jan 12, 2020
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start items-center gap-2 md:gap-6 mt-2 text-textnormal font-normal text-xs sm:text-sm md:text-[16px] leading-[150%] tracking-[-0.02em]">
              <span className="flex items-center">
                <PhoneOutlined className="mr-2" />
                (555) 123-4567
              </span>
              <span className="flex items-center">
                <MailOutlined className="mr-2" />
                sarah@prestigerealty.com
              </span>
            </div>
          </div>
        </div>

        {/* Right Section - Button */}
        <div className="w-full md:w-auto flex  justify-center md:justify-end mt-4 md:mt-0">
          <button className="bg-buttonbg  text-background px-6 py-2 rounded-lg flex justify-center font-medium items-center gap-2 text-xs sm:text-sm hover:scale-95 transition-transform w-full md:w-auto">
            <MessageOutlined /> Message
          </button>
        </div>
      </div>
    </div>
  )
}

export default AgentCard_Oppurtunity
