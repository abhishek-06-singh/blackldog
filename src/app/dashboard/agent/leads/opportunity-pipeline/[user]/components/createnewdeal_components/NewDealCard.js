'use client'

import { Card, Avatar, Tag } from 'antd'
import { MessageOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons'
import { Check } from 'lucide-react'
import NewDealForm from './NewDealForm'

const NewDealCard = () => {
  return (
    <>
      <Card className="w-full bg-cardbg rounded-2xl shadow-sm border border-bordercolor p-4 sm:p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 w-full">
          {/* Left Section: Avatar + Info */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 flex-grow min-w-0 w-full">
            {/* Avatar */}
            <Avatar
              size={72}
              src="https://randomuser.me/api/portraits/women/44.jpg"
              className="flex-shrink-0"
            />

            {/* Info */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1 w-full">
              {/* Name + Tag */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 w-full justify-center sm:justify-start">
                <h3 className="m-0 font-medium text-sm md:text-lg lg:text-[24px] text-textheading">
                  Sarah Johnson
                </h3>
                <Tag className="rounded-full border bg-cardbg border-green-500 px-3 py-0.5 text-xs font-normal leading-[150%] tracking-[-0.02em] text-textnormal flex items-center gap-1 w-fit mx-auto sm:mx-0">
                  <Check className="w-3 h-3 text-white bg-green-500 rounded-full" />
                  <span className="text-green-500">Verified</span>
                </Tag>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center sm:justify-start items-center gap-2 sm:gap-6 mt-2 text-textnormal font-normal text-xs sm:text-sm md:text-[16px] leading-[150%] tracking-[-0.02em]">
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

          {/* Right Section: Message Button */}
          <div className="w-full md:w-auto flex justify-center md:justify-end mt-4 md:mt-0">
            <button className=" font-medium bg-buttonbg text-background px-6 py-2 rounded-lg flex items-center gap-2 text-sm hover:scale-95 transition-transform w-full md:w-auto">
              <MessageOutlined /> Message
            </button>
          </div>
        </div>
      </Card>

      {/* NewDealForm Below */}
      <NewDealForm />
    </>
  )
}

export default NewDealCard
