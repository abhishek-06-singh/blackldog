'use client'

import { Card, Avatar, Tag } from 'antd'
import { MessageOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons'

const AgentCard = () => {
  return (
    <div className=" !bg-cardbg p-2 md:p-6 rounded-2xl shadow-md border border-bordercolor mr-10">
      <div className="flex items-center justify-between gap-6">
        {/* Left Section - Avatar + Info */}
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <Avatar
            size={72}
            src="https://randomuser.me/api/portraits/women/44.jpg"
            className="reletive -top-11"
          />

          {/* Name + Details */}
          <div className="flex flex-col justify-center gap-1">
            <div className="flex items-center gap-3">
              <h3 className="m-0 font-semibold text-lg md:text-[24px] leading-[150%] text-textheading">
                Sarah Johnson
              </h3>
              <Tag className="px-4 py-1 rounded-full text-xs" color="Green">
                . Active
              </Tag>
            </div>

            <p className="m-0 font-normal text-[16px] leading-[150%] tracking-[-0.02em] text-textnormal">
              Sub-Agent
            </p>
            <p className="m-0 text-subtext text-xs leading-[150%]">
              Joined : Jan 12, 2020
            </p>

            <div className="flex flex-wrap gap-2 mt-2">
              <Tag className="rounded border bg-cardbg border-bordercolor px-3 py-1 text-sm font-normal leading-[150%] tracking-[-0.02em] text-textnormal">
                Luxury
              </Tag>
              <Tag className="rounded border bg-cardbg border-bordercolor px-3 py-1 text-sm font-normal leading-[150%] tracking-[-0.02em] text-textnormal">
                Residential
              </Tag>
              <Tag className="rounded border bg-cardbg border-bordercolor px-3 py-1 text-sm font-normal leading-[150%] tracking-[-0.02em] text-textnormal">
                Verified
              </Tag>
            </div>

            {/* Contact */}
            <div className="flex flex-wrap gap-6 mt-2 text-textnormal font-normal text-[16px] leading-[150%] tracking-[-0.02em]">
              <span className="flex items-center text-textnormal">
                <PhoneOutlined className="mr-2" />
                (555) 123-4567
              </span>
              <span className="flex items-center text-textnormal">
                <MailOutlined className="mr-2" />
                sarah@prestigerealty.com
              </span>
            </div>
          </div>
        </div>

        {/* Right Section - Button */}
        <div className="self-start md:self-start shrink-0">
          <button className="bg-buttonbg text-background px-6 py-2 rounded-lg flex items-center gap-2 text-sm hover:scale-95 transition-transform">
            <MessageOutlined /> Message
          </button>
        </div>
      </div>
    </div>
  )
}

export default AgentCard
