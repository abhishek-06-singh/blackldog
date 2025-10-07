'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import users from  "../../../components/icons/Lightmode_icons/contact/users.svg"
import userclock from  "../../../components/icons/Lightmode_icons/contact/userclock.svg"
import usertick from "../../../components/icons/Lightmode_icons/contact/usertick.svg"
import tags from "../../../components/icons/Lightmode_icons/contact/tags.svg"

const statsData = [
  {
    id: 1,
    title: 'Total Contacts',
    value: '47',
    icon: <Image src={users} classname='w-6 h-6' />,
  },
  {
    id: 2,
    title: 'Follow-ups Scheduled',
    value: '30',
    icon: <Image src={usertick} classname='w-6 h-6' />,
  },
  {
    id: 3,
    title: 'Recently Added',
    value: '10',
    icon: <Image src={userclock} classname='w-6 h-6' />, 
  },
  {
    id: 4,
    title: 'Tagged Contacts',
    value: '7',
    icon: <Image src={tags} classname='w-6 h-6' />,
  },
]

export default function StatsCardContact({ data = statsData }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-3 mb-8">
      {data.map((stat, index) => (
        <motion.div
          key={stat.id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, type: 'spring', stiffness: 100 }}
          className="flex flex-col items-start p-4 bg-cardbg shadow-sm rounded-2xl border border-bordercolor hover:shadow-lg transition-shadow"
        >
          <div className="p-2 bg-[#FAE9DA] rounded-lg mb-3 ">{stat.icon}</div>
          <p className="text-xs md:text-sm lg:text-sm  text-textnormal">
            {stat.title}
          </p>
          <h2 className="text-sm md:text-xl lg:text-xl font-bold text-textnormal">
            {stat.value}
          </h2>
        </motion.div>
      ))}
    </div>
  )
}
