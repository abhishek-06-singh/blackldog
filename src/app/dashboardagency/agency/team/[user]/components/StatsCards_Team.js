'use client'

import { motion } from 'framer-motion'
import building from "../../../../components/icons/Lightmode_icons/teams/building.svg"
import users from "../../../../components/icons/Lightmode_icons/contact/users.svg"
import verified from "../../../../components/icons/Lightmode_icons/stats_icons/verified-light.svg"
import user from "../../../../components/icons/Lightmode_icons/contact/user.svg"
import Image from "next/image"

const statsData = [
  {
    id: 1,
    title: 'Properties Assigned',
    value: '8',
    icon: <Image src={building} width={24} height={24} />,
  },
  {
    id: 2,
    title: 'Properties Listed',
    value: '12',
    icon: <Image src={building} width={24} height={24} />,
  },
  {
    id: 3,
    title: 'Properties Sold',
    value: '8',
    icon: <Image src={verified} width={24} height={24} />,
  },
  {
    id: 4,
    title: 'Leads Converted',
    value: '28',
    icon: <Image src={users} width={24} height={24} />,
  },
  {
    id: 5,
    title: 'Sub-Agents Assigned',
    value: '6',
    icon: <Image src={user} width={24} height={24} />,
  },
]


export default function StatsCards_Team({ data = statsData }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-3 pr-10">
      {data.map((stat, index) => (
        <motion.div
          key={stat.id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, type: 'spring', stiffness: 100 }}
          className=" border-bordercolor flex flex-col items-start p-3 bg-cardbg shadow-sm rounded-2xl border hover:shadow-lg transition-shadow"
        >
          <div className="p-2 bg-[#FAE9DA] rounded-lg mb-3 ">{stat.icon}</div>
          <p className="text-xs md:text-sm lg:textsm text-textnormal">
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
