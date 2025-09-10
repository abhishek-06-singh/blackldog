'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Dropdown, Menu, Button } from 'antd'
import { MoreOutlined } from '@ant-design/icons'
import Link from 'next/link'

const members = [
  {
    id: 1,
    member: 'John Doe',
    status: 'Active',
    propertiesListed: 12,
    dealsClosed: 5,
    joinDate: 'Feb 15, 2023',
    dateAdded: 'Jan 10, 2025',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 2,
    member: 'Sarah Johnson',
    status: 'Inactive',
    propertiesListed: 7,
    dealsClosed: 2,
    joinDate: 'Aug 3, 2022',
    dateAdded: 'Jan 11, 2025',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 3,
    member: 'Michael Smith',
    status: 'Active',
    propertiesListed: 20,
    dealsClosed: 12,
    joinDate: 'Jan 20, 2021',
    dateAdded: 'Jan 12, 2025',
    image: 'https://randomuser.me/api/portraits/men/55.jpg',
  },
  {
    id: 4,
    member: 'Emily Davis',
    status: 'Active',
    propertiesListed: 15,
    dealsClosed: 9,
    joinDate: 'Oct 5, 2020',
    dateAdded: 'Jan 14, 2025',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: 5,
    member: 'David Wilson',
    status: 'Pending',
    propertiesListed: 5,
    dealsClosed: 1,
    joinDate: 'Dec 2, 2024',
    dateAdded: 'Jan 15, 2025',
    image: 'https://randomuser.me/api/portraits/men/71.jpg',
  },
  {
    id: 6,
    member: 'Olivia Martinez',
    status: 'Active',
    propertiesListed: 18,
    dealsClosed: 10,
    joinDate: 'Jul 19, 2023',
    dateAdded: 'Jan 16, 2025',
    image: 'https://randomuser.me/api/portraits/women/85.jpg',
  },
]

const statusStyles = {
  Active: 'bg-green-500 text-white',
  Pending: 'bg-yellow-500 text-white',
  Inactive: 'bg-gray-400 text-white',
}

const getMenu = (member) => (
  <Menu className="!bg-cardbg [&_.ant-dropdown-menu-item]:!text-textnormal [&_.ant-dropdown-menu-item:hover]:!bg-buttonbg [&_.ant-dropdown-menu-item:hover]:!text-background">
    <Menu.Item key="1" onClick={() => alert(`Edit ${member.member}`)}>
      Edit
    </Menu.Item>
    <Menu.Item key="2" onClick={() => alert(`Delete ${member.member}`)}>
      Delete
    </Menu.Item>
  </Menu>
)

export default function SubagentTable() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selected, setSelected] = useState([])
  const pageSize = 4
  const totalResults = members.length
  const totalPages = Math.ceil(totalResults / pageSize)

  const start = (currentPage - 1) * pageSize
  const end = start + pageSize
  const currentItems = members.slice(start, end)

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
    <div className="mt-8">
      <div className="overflow-x-auto rounded-xl border border-bordercolor bg-cardbg shadow-md">
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
              <th className="p-4">Member</th>
              <th className="p-4">Status</th>
              <th className="p-4">Properties Listed</th>
              <th className="p-4">Deals Closed</th>
              <th className="p-4">Join Date</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-bordercolor">
            {currentItems.map((member) => (
              <tr key={member.id} className="hover:bg-boxbg transition">
                <td className="p-4">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-bordercolor"
                    checked={selected.includes(member.id)}
                    onChange={() => toggleRow(member.id)}
                  />
                </td>
                <td className="pr-10 md:pr-16 py-4 md:p-4">
                  <div className="flex items-center gap-3 w-full">
                    <img
                      src={member.image}
                      alt={member.member}
                      className="w-9 h-9 rounded-full object-cover"
                    />
                    <div className="min-w-0">
                      <Link
                        href={`/dashboardagency/agency/team/${encodeURIComponent(member.member)}`}
                        className="font-medium text-sm text-textnormal hover:underline"
                      >
                        {member.member}
                      </Link>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 text-xs rounded-full whitespace-nowrap font-medium ${
                      statusStyles[member.status] || 'bg-gray-300 text-black'
                    }`}
                  >
                    ● {member.status}
                  </span>
                </td>
                <td className="p-4 font-medium text-textnormal">{member.propertiesListed}</td>
                <td className="p-4 text-textnormal">{member.dealsClosed}</td>
                <td className="p-4 text-sm text-textnormal whitespace-nowrap">{member.joinDate}</td>
                <td className="p-4">
                  <Dropdown
                    overlay={getMenu(member)}
                    trigger={['click']}
                    placement="bottomRight"
                  >
                    <Button type="text" icon={<MoreOutlined className="text-textnormal" />} />
                  </Dropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col md:flex-row items-center justify-between my-5 md:my-10 text-sm text-textnormal gap-4 sm:gap-0">
        <p>
          Showing {start + 1} to {Math.min(end, totalResults)} of {totalResults}{' '}
          results
        </p>
        <div className="flex flex-wrap mt-3 md:mt-0 items-center gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            className="px-3 py-1 border border-bordercolor rounded-lg disabled:opacity-50 flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" /> Back
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded-lg border border-bordercolor ${
                currentPage === page
                  ? 'bg-black-500 text-white'
                  : 'hover:bg-boxbg text-textnormal'
              }`}
            >
              {page}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            className="px-3 py-1 border border-bordercolor rounded-lg disabled:opacity-50 flex items-center gap-1"
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
