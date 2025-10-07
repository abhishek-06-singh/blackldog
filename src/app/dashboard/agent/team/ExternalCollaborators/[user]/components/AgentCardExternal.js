'use client'

import { Avatar, Tag } from 'antd'
import {
  MessageOutlined,
  MailOutlined,
  PhoneOutlined,
} from '@ant-design/icons'

const AgentCardExternal = () => {
  return (
    <div className="!bg-cardbg p-4 sm:p-6 rounded-2xl shadow-md border border-bordercolor mr-2 sm:mr-6 lg:mr-10">
      {/* Layout: stacked on xs and sm, horizontal from md */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 w-full flex-wrap">
        {/* Left Section - Avatar + Info */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 flex-grow min-w-0">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <Avatar
              src="https://randomuser.me/api/portraits/women/44.jpg"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
            />
          </div>

          {/* Name + Details */}
          <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left w-full">
            {/* Name and Status */}
            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 w-full">
              <h3 className="m-0 font-semibold text-base sm:text-lg leading-[150%] text-textheading">
                Sarah Johnson
              </h3>

              {/* On md+ screens, show status inline */}
              <div className="hidden md:flex px-4 py-1 rounded-full text-xs bg-green-500 items-center gap-1 text-white">
                <span className="w-1 h-1 rounded-full bg-white"></span> Active
              </div>
            </div>

            {/* On xs and sm screens, show status below name */}
            <div className="flex md:hidden px-4 py-1 rounded-full text-xs bg-green-500 items-center gap-1 text-white mt-1">
              <span className="w-1 h-1 rounded-full bg-white"></span> Active
            </div>

            {/* Role & Join Date */}
            <p className="m-0 font-normal text-sm leading-[150%] tracking-[-0.02em] text-textnormal">
              Sub-Agent
            </p>
            <p className="m-0 text-subtext text-xs leading-[150%]">
              Joined: Jan 12, 2020
            </p>

            {/* Tags */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
              <Tag className="rounded border bg-cardbg border-bordercolor px-3 py-1 text-xs font-normal leading-[150%] tracking-[-0.02em] text-textnormal">
                Luxury
              </Tag>
              <Tag className="rounded border bg-cardbg border-bordercolor px-3 py-1 text-xs font-normal leading-[150%] tracking-[-0.02em] text-textnormal">
                Residential
              </Tag>
              <Tag className="rounded border bg-cardbg border-bordercolor px-3 py-1 text-xs font-normal leading-[150%] tracking-[-0.02em] text-textnormal">
                Verified
              </Tag>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-start items-center gap-2 lg:gap-6 mt-2 text-textnormal font-normal text-xs sm:text-sm md:text-[16px] leading-[150%] tracking-[-0.02em]">
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

        {/* Right Section - Message Button */}
        <div className="w-full md:w-auto md:flex-shrink-0 flex justify-center md:justify-end">
          <button className="bg-buttonbg text-background px-6 py-2 rounded-lg flex items-center gap-2 text-sm hover:scale-95 transition-transform w-full md:w-auto">
            <MessageOutlined /> Message
          </button>
        </div>
      </div>
    </div>
  )
}

export default AgentCardExternal
