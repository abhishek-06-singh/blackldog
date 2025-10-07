'use client'

import { Card, Row, Col, div, Button, Avatar, Table } from 'antd'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import Heading from '../../../components/minicomponents/Heading'
import { CheckCircle, Pencil, Eye, Archive, Check } from 'lucide-react'
import {ConfigProvider} from 'antd'
import eyeLight from "../../../components/icons/Lightmode_icons/listing/eye_black.svg"
import clockLight from "../../../components/icons/Lightmode_icons/listing/clock_black.svg"
import messageLight from "../../../components/icons/Lightmode_icons/listing/message_black.svg"
import tagLight from "../../../components/icons/Lightmode_icons/listing/tag_black.svg"
import eyeDark from "../../../components/icons/Darkmode_icons/listing_dark/eye_white.svg"
import clockDark from "../../../components/icons/Darkmode_icons/listing_dark/clock_white.svg"
import messageDark from "../../../components/icons/Darkmode_icons/listing_dark/message_white.svg"
import tagDark from "../../../components/icons/Darkmode_icons/listing_dark/tag_white.svg"
import Image from 'next/image'
import { MoreOutlined } from '@ant-design/icons'

export default function PropertyOverview() {
  const data = [
    { date: 'Jan 1', views: 50 },
    { date: 'Jan 2', views: 70 },
    { date: 'Jan 3', views: 100 },
    { date: 'Jan 4', views: 90 },
    { date: 'Jan 5', views: 120 },
    { date: 'Jan 6', views: 160 },
  ]

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text) => (
        <div className="flex items-center gap-2">
          <Avatar src="https://i.pravatar.cc/40" />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: 'Role',
      dataIndex: 'role',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (status) =>
        status === 'Active' ? (
          <div className="bg-green-500 w-fit  text-xs rounded-xl text-white flex items-center justify-center px-2 gap-1"><span className='w-1 h-1 rounded-full bg-white'/>{status}</div>
        ) : (
          <div className="bg-status-pending-in-review-500 w-fit rounded-xl text-xs flex items-center justify-center gap-1 px-2 text-white"><span className='w-1 h-1 rounded-full bg-white'/>{status}</div>
        ),
    },
    {
      title: 'Actions',
      render: () => <Button
                      type="text"
                      icon={<MoreOutlined className="text-textnormal" />}
                    />,
    },
  ]

  const collaborators = [
    { key: 1, name: 'Sarah Johnson', role: 'Editor', status: 'Active' },
    { key: 2, name: 'Sarah Johnson', role: 'Lawyer', status: 'Pending' },
  ]

  return (
    <div className="p-2 md:p-6 space-y-6">
      <div className="flex flex-col md:flex-row gap-2  mb-4">
        <Heading title="Property Overview" />
        <div className="flex-col justify-center w-full md:w-fit md:flex-row md:justify-end gap-2 ml-auto flex">
          {' '}
          <Button
            icon={<><div className='w-4 h-4 flex justify-center rounded-full bg-green-500'><Check className='text-white' size={16} /></div></>}
            className="flex items-center gap-1 bg-background text-textnormal border border-bordercolor rounded-lg px-3 py-1 hover:bg-shadow"
          >
            Mark as Sold
          </Button>
          <Button
            icon={<Pencil className='text-textnormal' size={16} />}
            className="flex items-center bg-background  text-textnormal gap-1 border border-bordercolor rounded-lg px-3 py-1 hover:bg-shadow"
          >
            Edit Listing
          </Button>
          <Button
            icon={<Eye className='text-textnormal' size={16} />}
            className="flex items-center bg-background text-textnormal gap-1 border border-bordercolor rounded-lg px-3 py-1 hover:bg-shadow"
          >
            Preview
          </Button>
          <Button
            icon={<Archive className='text-textnormal' size={16} />}
            className="flex items-center bg-background text-textnormal gap-1 border border-bordercolor rounded-lg px-3 py-1 hover:bg-shadow"
          >
            Archive
          </Button>
        </div>
      </div>

      {/* Header */}
      <div className="space-y-6 ">
  {/* Property Overview */}
  <div className="bg-cardbg rounded-lg shadow-sm p-4">
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Left Side (Images) */}
      <div className="w-full lg:w-1/2">
        <img
          src="https://picsum.photos/300/200"
          alt="property"
          className="rounded-lg w-full"
        />
        <div className="flex gap-2 mt-2 w-full">
          {[1, 2, 3, 4].map((i) => (
            <img
              key={i}
              src={`https://picsum.photos/100/70?random=${i}`}
              alt="thumbnail"
              className="rounded-md w-1/5 md:w-1/4"
            />
          ))}
        </div>
      </div>

      {/* Right Side (Details) */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-xl md:text-2xl text-textnormal font-semibold">
          Modern Family Home
        </h2>
        <p className="text-textnormal text-sm md:text-base">
          123 Oak Street, Beverly Hills, CA 90210
        </p>

        <div className="flex gap-2 mt-2 flex-wrap">
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-md text-xs md:text-sm font-medium">
            Active
          </span>
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-xs md:text-sm font-medium">
            House
          </span>
        </div>

        <h1 className="text-2xl md:text-3xl text-textnormal font-bold mt-4">
          $1,250,000
        </h1>

        <div className="flex flex-col sm:flex-row mt-4 gap-6 text-textnormal">
          <div className="space-y-1">
            <p className="text-sm md:text-base">Bedrooms: 4</p>
            <p className="text-sm md:text-base">Area: 2,500 sq ft</p>
            <p className="text-sm md:text-base">Property ID: #PR-2025-001</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm md:text-base">Bathrooms: 3</p>
            <p className="text-sm md:text-base">Year Built: 2018</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Property Statistics */}
  <div className="bg-cardbg rounded-lg shadow-sm p-4">
    <h3 className="text-base md:text-lg text-textnormal font-semibold mb-4">
      Property Statistics
    </h3>

    {/* Charts */}
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Views Chart */}
      <div className="bg-cardbg rounded-lg shadow-md border border-bordercolor p-2 md:p-4 w-full lg:w-1/2">
        <span className="text-sm md:text-base text-textnormal font-semibold block mb-2 ml-2">
          Views Over Time
        </span>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis width={35} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="views"
              stroke="#f97316"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Funnel */}
      <div className="bg-cardbg rounded-lg shadow-md border border-bordercolor p-4 w-full lg:w-1/2">
        <span className="text-base md:text-lg text-textnormal font-semibold block mb-2">
          Conversion Funnel
        </span>
        <div className="space-y-3 mt-4">
          <div className="bg-orange-200 p-3 rounded-lg flex justify-between">
            <span className="text-sm font-medium md:text-base">Leads</span>
            <strong className="text-sm md:text-base">60</strong>
          </div>
          <div className="bg-orange-100 p-3 rounded-lg flex justify-between">
            <span className="text-sm font-medium md:text-base">Offers</span>
            <strong className="text-sm md:text-base">32</strong>
          </div>
          <div className="bg-orange-50 p-3 rounded-lg flex justify-between">
            <span className="text-sm font-medium md:text-base">Conversions</span>
            <strong className="text-sm md:text-base">8</strong>
          </div>
        </div>
      </div>
    </div>

    {/* Stats Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 text-center">
      {[
        { label: "Total Views", value: "1,218", icon :<><Image src={eyeLight} alt="eye" width={24} height={24} className='w-5 h-5 md:w-auto md:h-auto block dark:hidden' /><Image src={eyeDark} alt="eye" width={24} height={24} className='w-5 h-5 md:w-auto md:h-auto hidden dark:block' /></> },
        { label: "Inquiries", value: "23" ,icon :<><Image src={messageLight} alt="message" width={24} height={24} className='w-5 h-5 md:w-auto md:h-autoblock dark:hidden' /><Image src={messageDark} alt="message" width={24} height={24} className='w-5 h-5 md:w-auto md:h-auto hidden dark:block' /></> }, 
        { label: "Offers Made", value: "5", icon :<><Image src={tagLight} alt="tag" width={24} height={24} className='w-5 h-5 md:w-auto md:h-auto block dark:hidden' /><Image src={tagDark} alt="tag" width={24} height={24} className='w-5 h-5 md:w-auto md:h-auto hidden dark:block' /></> },
        { label: "Days Updated", value: "2 Days",icon :<><Image src={clockLight} alt="clock" width={24} height={24} className='w-5 h-5 md:w-auto md:h-autoblock dark:hidden' /><Image src={clockDark} alt="clock" width={24} height={24} className='w-5 h-5 md:w-auto md:h-auto hidden dark:block' /></> },
      ].map((stat, idx) => (
        <div
          key={idx}
          className="bg-cardbg rounded-lg shadow-md border border-bordercolor p-2 lg:p-4 flex justify-between items-center"
        ><div>
          <p className="text-base md:text-xl text-textheading font-semibold">{stat.value}</p>
          <p className="text-xs md:text-base whitespace-nowrap text-textnormal">{stat.label}</p>
          </div>
            <div>
              {stat.icon}
              </div>
        </div>
      ))}
    </div>
  </div>

  {/* Collaborators */}
  <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#EEB887', // custom theme color
          borderRadius: 12,
        },
        components: {
          Steps: {
            colorPrimary: '#EEB887',
            colorText: '#000',
            colorTextActive: '#EEB887',
          },
        },
      }}
    >

  <div className="bg-cardbg rounded-lg shadow-sm p-4">
    <div className="w-full flex flex-col justify-center md:flex-row md:justify-between items-center mb-4">
      <h3 className="text-lg font-semibold text-textnormal">Collaborators</h3>
      <Button className=" w-full md:w-fit bg-buttonbg text-background hover:opacity-90">
        + Invite Collaborator
      </Button>
    </div>
        
    <div className="overflow-x-auto rounded-xl border border-bordercolor bg-cardbg shadow-md">
  <table className="min-w-full text-left table-auto">
    <thead className="bg-cardbg text-textplaceholder text-sm font-thin">
      <tr>
        {columns.map((col, index) => (
          <th key={index} className="p-4 whitespace-nowrap">
            {col.title}
          </th>
        ))}
      </tr>
    </thead>
    <tbody className="divide-y text-sm whitespace-nowrap md:text-base divide-bordercolor text-textnormal">
      {collaborators.map((row, rowIndex) => (
        <tr
          key={row.key || rowIndex}
          className="hover:bg-boxbg table-row mb-4 sm:mb-0 transition"
        >
          {columns.map((col, colIndex) => (
            <td
              key={colIndex}
              className={`p-2 sm:p-4 ${
                col.className || ''
              } ${colIndex >= 4 ? 'hidden md:table-cell' : ''}`}
            >
              {col.render
                ? col.render(row[col.dataIndex], row, rowIndex)
                : row[col.dataIndex]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
</div>

  </div>
  </ConfigProvider>
</div>

</div>

  )
}
