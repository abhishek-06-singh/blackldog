'use client'
import React from 'react'
import Navbar from '../../components/minicomponents/Navbar'
import Heading from '../../components/minicomponents/Heading'
import Help_Page from './components/Help_Page'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'
export default function HelpCenterPage() {
  return (
    <motion.div
      className="mt-0 w-full flex flex-col overflow-x-hidden"
      initial={{ opacity: 0, y: 0 }} // start hidden + slightly down
      animate={{ opacity: 1, y: 0 }} // fade in + move up
      transition={{ duration: 0.6, ease: 'easeInOut' }} // 400ms
    >
      <Navbar />

      <div className=" ml-5 md:ml-10 mt-6 pr-10 w-full  space-y-7">
        <Heading
          title="Help Center"
          subtitle="Find guides, tutorials, and answers to your questions."
        />

        {/* Search bar below Heading */}
        <div className="mt-4 max-w-md">
          <Input
            placeholder="Search articles, guides, and FAQs"
            prefix={<SearchOutlined className="text-current" />}
            size="large"
            className="rounded-lg border border-bordercolor shadow-sm !bg-input"
            allowClear
            onPressEnter={(e) => console.log('Search:', e.target.value)}
          />
        </div>
      </div>

      <div className="   w-full ">
        <Help_Page />
      </div>
    </motion.div>
  )
}
