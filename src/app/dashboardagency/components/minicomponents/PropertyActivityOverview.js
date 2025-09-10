'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import users from '../icons/Lightmode_icons/contact/users.svg'
import user from '../icons/Lightmode_icons/contact/user.svg'



export default function PropertyActivityOverview() {
 const stats = [
  {
    id: 1,
    title: 'Total Team Members',
    value: '20',
    icon: <Image src={users} className="w-6 h-6 text-black-400" />,
    subtitle: 'Both Agents & Subagents',
  },
  {
    id: 2,
    title: 'Agents',
    value: '10 Active / 1 Inactive',
    icon: <Image src={user} className="w-6 h-6 text-black-400" />,
  },
  {
    id: 3,
    title: 'Sub-Agents',
    value: '10 Active / 1 Inactive',
    icon: <Image src={user} className="w-6 h-6 text-black-400" />,
  },
]

  return (
    <div className="pr-10 mt-2 bg-background rounded-2xl ">
      {/* Header */}
      <h2 className="text-xl font-semibold mb-3 text-subheading">
        Property Activity Overview
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.3, type: 'spring' }}
            className="flex flex-col items-start p-4 bg-cardbg shadow-sm rounded-2xl border border-bordercolor hover:shadow-lg transition-shadow"

          >
            <div className="p-2 bg-[#FAE9DA] rounded-lg mb-4">{stat.icon}</div>
            <p className="text-xs md:text-sm lg:text-sm text-textnormal">
              {stat.title}
            </p>
            <h3 className="text-sm md:text-xl lg:text-xl font-bold text-textnormal">
              {stat.value}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
