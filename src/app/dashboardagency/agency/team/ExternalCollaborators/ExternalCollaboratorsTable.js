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
    role: 'Agent',
    property: {
      name: 'Luxury Villa',
      address: '123 Palm Street, LA',
      image:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=640&q=80',
    },
    joinDate: 'Feb 15, 2023',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
  {
    id: 2,
    member: 'Sarah Johnson',
    status: 'Inactive',
    role: 'Broker',
    property: {
      name: 'Modern Apartment',
      address: '456 Ocean Drive, Miami',
      image:
        'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=640&q=80',
    },
    joinDate: 'Aug 3, 2022',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    id: 3,
    member: 'Michael Smith',
    status: 'Active',
    role: 'Manager',
    property: {
      name: 'Penthouse Suite',
      address: '789 Skyline Blvd, NYC',
      image:
        'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=640&q=80',
    },
    joinDate: 'Jan 20, 2021',
    image: 'https://randomuser.me/api/portraits/men/29.jpg',
  },
]

const statusStyles = {
  Active: 'bg-green-500 text-white',
  Pending: 'bg-yellow-500 text-white',
  Inactive: 'bg-gray-400 text-white',
}

export default function ExternalCollaboratorsTable() {
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

  const getMenu = (member) => (
    <Menu className="!bg-cardbg [&_.ant-dropdown-menu-item]:!text-textnormal [&_.ant-dropdown-menu-item:hover]:!bg-buttonbg [&_.ant-dropdown-menu-item:hover]:!text-background">
      <Menu.Item key="1" onClick={() => alert(`Edit ${member.member}`)}>
        Edit
      </Menu.Item>
      <Menu.Item key="2" onClick={() => alert(`Delete ${member.member}`)}>
        Delete
      </Menu.Item>
      <Menu.Item
        key="3"
        onClick={() => alert(`View property: ${member.property.name}`)}
      >
        View Property
      </Menu.Item>
    </Menu>
  )

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
              <th className="p-4">Role</th>
              <th className="p-4 whitespace-nowrap">For Property</th>
              <th className="p-4 whitespace-nowrap">Join Date</th>
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
                  <div className="flex  items-center gap-3 w-full">
                    <img
                      src={member.image}
                      alt={member.member}
                      className="w-9 h-9 rounded-full object-cover"
                    />
                    <div className="min-w-0 ">
                      <Link
                        href={`/dashboardagency/agency/team/externalcollaborators/${encodeURIComponent(member.member)}`}
                        className="font-medium text-sm text-textnormal whitespace-nowrap  hover:underline"
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
                <td className="p-4 font-medium text-sm text-textnormal">{member.role}</td>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={member.property.image}
                      alt={member.property.name}
                      className="w-16 h-12 rounded-lg object-cover"
                    />
                    <div className='mr-16 md:mr-0'>
                      <div className="font-medium  whitespace-nowrap text-sm text-textnormal">{member.property.name}</div>
                      <div className="text-xs whitespace-nowrap text-subtext">{member.property.address}</div>
                    </div>
                  </div>
                </td>
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
