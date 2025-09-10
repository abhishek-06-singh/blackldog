'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Dropdown, Menu, Button } from 'antd'
import { MoreOutlined } from '@ant-design/icons'

// ✅ Updated data structure
const agents = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    dealsClosed: 12,
    commission: '$42,000',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Michael Chen',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    dealsClosed: 9,
    commission: '$40,000',
    status: 'Active',
  },
  {
    id: 3,
    name: 'Michael Chen',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    dealsClosed: 8,
    commission: '$38,000',
    status: 'Active',
  },
  {
    id: 4,
    name: 'Michael Chen',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    dealsClosed: 8,
    commission: '$32,000',
    status: 'Active',
  },
  {
    id: 5,
    name: 'Michael Chen',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    dealsClosed: 8,
    commission: '$22,000',
    status: 'Active',
  },
]

const statusStyles = {
  Active: 'bg-green-500 text-white',
}

const getMenu = (agent) => (
  <Menu className="!bg-cardbg [&_.ant-dropdown-menu-item]:!text-textnormal [&_.ant-dropdown-menu-item:hover]:!bg-buttonbg  [&_.ant-dropdown-menu-item:hover]:!text-background">
    <Menu.Item key="1" onClick={() => alert(`Edit ${agent.name}`)}>
      Edit
    </Menu.Item>
    <Menu.Item key="2" onClick={() => alert(`Delete ${agent.name}`)}>
      Delete
    </Menu.Item>
    <Menu.Item key="3" onClick={() => alert(`View ${agent.name}'s Profile`)}>
      View Profile
    </Menu.Item>
  </Menu>
)

export default function TopPerformingTables() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selected, setSelected] = useState([])
  const pageSize = 4
  const totalResults = agents.length
  const totalPages = Math.ceil(totalResults / pageSize)

  const start = (currentPage - 1) * pageSize
  const end = start + pageSize
  const currentItems = agents.slice(start, end)

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
    <div className=" border border-bordercolor bg-cardbg  shadow-md rounded-xl p-4">
      <h2 className="text-lg font-semibold mb-4 text-textheading">
        Top 5 Performing Agents
      </h2>

      <div className="overflow-x-auto ">
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
              <th className="p-4 whitespace-nowrap">Agent</th>
              <th className="p-4 whitespace-nowrap">Deals Closed</th>
              <th className="p-4 whitespace-nowrap">Commission</th>
              <th className="p-4 whitespace-nowrap">Status</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-bordercolor">
            {currentItems.map((item) => (
              <tr key={item.id} className="hover:bg-boxbg transition">
                <td className="p-4">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-bordercolor"
                    checked={selected.includes(item.id)}
                    onChange={() => toggleRow(item.id)}
                  />
                </td>

                <td className="pr-10 md:pr-16 py-4 md:p-4">
                  <div className="flex items-center gap-3 w-full">
                    <img
                      src={item.avatar}
                      className="w-9 h-9 rounded-full text-textnormal"
                      alt={item.name}
                    />
                    <div className="min-w-0">
                      <div className="font-medium text-sm text-textnormal">
                        {item.name}
                      </div>
                    </div>
                  </div>
                </td>

                <td className="p-4 text-sm text-textnormal">
                  {item.dealsClosed}
                </td>

                <td className="p-4 text-sm text-textnormal">
                  {item.commission}
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 text-xs rounded-full whitespace-nowrap font-medium ${statusStyles[item.status]}`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="p-4">
                  <Dropdown
                    overlay={getMenu(item)}
                    trigger={['click']}
                    placement="bottomRight"
                  >
                    <Button
                      type="text"
                      icon={
                        <MoreOutlined className="text-textnormal" />
                      }
                    />
                  </Dropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
