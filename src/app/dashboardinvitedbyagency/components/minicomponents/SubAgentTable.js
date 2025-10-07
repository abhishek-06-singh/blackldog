'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Dropdown, Menu, Button } from 'antd'
import { MoreOutlined } from '@ant-design/icons'
const subAgents = [
  {
    id: 1,
    name: 'Sarah Johnson',
    dealsClosed: 12,
    commission: '$42,000',
    status: 'Active',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 2,
    name: 'Michael Chen',
    dealsClosed: 10,
    commission: '$38,500',
    status: 'Active',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 3,
    name: 'Aisha Patel',
    dealsClosed: 9,
    commission: '$36,000',
    status: 'Active',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: 4,
    name: 'Carlos Martinez',
    dealsClosed: 8,
    commission: '$31,000',
    status: 'Active',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
  {
    id: 5,
    name: 'Emily Davis',
    dealsClosed: 7,
    commission: '$28,500',
    status: 'Active',
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
  },
  {
    id: 6,
    name: 'Daniel Lee',
    dealsClosed: 6,
    commission: '$24,000',
    status: 'Active',
    image: 'https://randomuser.me/api/portraits/men/54.jpg',
  },
]
const statusStyles = {
  Active: 'bg-green-500 text-white',
  Pending: 'bg-status-pending-in-review-500 text-white', // Just in case
  Inactive: 'bg-gray-300 text-black',
}

const getMenu = (property) => (
  <Menu className="!bg-cardbg [&_.ant-dropdown-menu-item]:!text-textnormal [&_.ant-dropdown-menu-item:hover]:!bg-buttonbg  [&_.ant-dropdown-menu-item:hover]:!text-background">
    <Menu.Item key="1" onClick={() => alert(`Edit ${property.name}`)}>
      Edit
    </Menu.Item>
    <Menu.Item key="2" onClick={() => alert(`Delete ${property.name}`)}>
      Delete
    </Menu.Item>
    <Menu.Item key="3" onClick={() => alert(`View details of ${property.name}`)}>
      View Details
    </Menu.Item>
  </Menu>
)

export default function SubAgentTable() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selected, setSelected] = useState([])
  const pageSize = 4
  const totalResults = subAgents.length
  const totalPages = Math.ceil(totalResults / pageSize)

  const start = (currentPage - 1) * pageSize
  const end = start + pageSize
  const currentItems = subAgents.slice(start, end)

  const toggleSelectAll = (checked) => {
    if (checked) {
      setSelected([...new Set([...selected, ...currentItems.map((p) => p.id)])])
    } else {
      setSelected(
        selected.filter((id) => !currentItems.map((p) => p.id).includes(id))
      )
    }
  }

  const toggleRow = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const allChecked = currentItems.every((item) => selected.includes(item.id))

  return (
    <div className=" mr-5 md:mr-10">
      <div className="overflow-x-auto rounded-xl border border-bordercolor bg-cardbg shadow-md ">
        <table className="min-w-full text-left table-auto overflow-x-auto">
          <thead className="bg-cardbg text-textplaceholder text-sm font-thin">
            <tr>
              <th className="p-4">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-bordercolor"
                  checked={allChecked}
                  onChange={(e) => toggleSelectAll(e.target.checked)}
                />
              </th>
              {/* ✅ Updated headings */}
              <th className="p-4">Sub-Agent</th>
              <th className="p-4">Deals Closed</th>
              <th className="p-4">Commission</th>
              <th className="p-4">Status</th>
             
            </tr>
          </thead>
          <tbody className="divide-y divide-bordercolor">
            {currentItems.map((agent) => (
              <tr key={agent.id} className="hover:bg-boxbg transition">
                <td className="p-4">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-bordercolor"
                    checked={selected.includes(agent.id)}
                    onChange={() => toggleRow(agent.id)}
                  />
                </td>
                <td className="pr-10 md:pr-16 py-4 md:p-4">
                  <div className="flex items-center gap-3 w-full">
                    <img
                      src={agent.image}
                      alt={agent.name}
                      className="w-9 h-9 rounded-lg object-cover"
                    />
                    <div className="min-w-0">
                      <div className="font-medium text-sm text-textnormal">
                        {agent.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-4 font-medium text-textnormal">{agent.dealsClosed}</td>
                <td className="p-4 text-textnormal">{agent.commission}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 text-xs rounded-full whitespace-nowrap font-medium ${
                      statusStyles[agent.status] || 'bg-gray-300 text-black'
                    }`}
                  >
                    {agent.status}
                  </span>
                </td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}