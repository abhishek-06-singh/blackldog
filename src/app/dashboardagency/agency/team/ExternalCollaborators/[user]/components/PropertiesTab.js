'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Dropdown, Menu } from 'antd'
import { MoreOutlined } from '@ant-design/icons'

const members = [
  {
    id: 1,
    property: {
      name: 'Modern Family Home',
      address: '123 Oak Street, Beverly Hills',
      image:
        'https://images.pexels.com/photos/6414289/pexels-photo-6414289.jpeg',

    },
    type: 'Villa',
    status: 'Active',
    dateAdded: 'Jan 15, 2025',
    assignedBy: {
      name: 'Sarah Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  },
  {
    id: 2,
    property: {
      name: 'Modern Family Home',
      address: '123 Oak Street, Beverly Hills',
      image:
        'https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1868667_960_720.jpg',
    },
    type: 'Villa',
    status: 'Active',
    dateAdded: 'Jan 15, 2025',
    assignedBy: {
      name: 'Sarah Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  },
  {
    id: 3,
    property: {
      name: 'Modern Family Home',
      address: '123 Oak Street, Beverly Hills',
      image:
        'https://cdn.pixabay.com/photo/2017/03/26/19/37/house-2178994_640.jpg',
    },
    type: 'Villa',
    status: 'Active',
    dateAdded: 'Jan 15, 2025',
    assignedBy: {
      name: 'Sarah Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  },
]

export default function PropertiesTab({ decodedUser }) {
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 4
  const totalResults = members.length
  const totalPages = Math.ceil(totalResults / pageSize)

  const start = (currentPage - 1) * pageSize
  const end = start + pageSize
  const currentItems = members.slice(start, end)

  const getMenu = (member) => (
    <Menu>
      <Menu.Item key="1" onClick={() => alert(`Edit ${member.property.name}`)}>
        Edit
      </Menu.Item>
      <Menu.Item key="2" onClick={() => alert(`Delete ${member.property.name}`)}>
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
      <h2 className="text-lg text-textheading font-semibold mb-4">
        Properties Managed by {decodedUser}
      </h2>
      <div className="bg-cardbg overflow-x-auto rounded-xl border border-bordercolor shadow-md">
        <table className="min-w-full text-left table-auto">
          <thead className="bg-cardbg text-textplaceholder text-sm font-thin">
            <tr>
              {/* No checkbox column */}
              <th className="p-4">Property</th>
              <th className="p-4">Type</th>
              <th className="p-4">Status</th>
              <th className="p-4">Assigned Added</th>
              <th className="p-4">Assigned By</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-bordercolor text-textnormal">
            {currentItems.map((member) => (
              <tr key={member.id} className="hover:bg-boxbg transition">
                {/* Property with image and address */}
                <td className="p-4 flex items-center gap-3">
                  <img
                    src={member.property.image}
                    alt={member.property.name}
                    className="w-16 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <div className="font-semibold">{member.property.name}</div>
                    <div className="text-sm text-textnormal">
                      {member.property.address}
                    </div>
                  </div>
                </td>

                {/* Type */}
                <td className="p-4 font-semibold">{member.type}</td>

                {/* Status with green badge for Active */}
                <td className="p-4">
                  <span
                    className={`px-3 py-1 text-xs rounded-full whitespace-nowrap font-medium ${
                      member.status === 'Active'
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-400 text-white'
                    }`}
                  >
                    ● {member.status}
                  </span>
                </td>

                {/* Assigned Added */}
                <td className="p-4">{member.dateAdded}</td>

                {/* Assigned By with avatar */}
                <td className="p-4 flex items-center gap-2">
                  <img
                    src={member.assignedBy.avatar}
                    alt={member.assignedBy.name}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span>{member.assignedBy.name}</span>
                </td>

                {/* Actions */}
                <td className="p-4">
                  <Dropdown
                    overlay={getMenu(member)}
                    trigger={['click']}
                    placement="bottomRight"
                  >
                    <MoreOutlined className="cursor-pointer text-lg" />
                  </Dropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
        <p>
          Showing {start + 1} to {Math.min(end, totalResults)} of {totalResults}{' '}
          results
        </p>
        <div className="flex items-center gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            className="px-3 py-1 border border-textnormal rounded-lg disabled:opacity-50 flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" /> Back
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded-lg border ${
                currentPage === page
                  ? 'bg-textnormal text-background'
                  : 'hover:bg-gray-100 text-textnormal'
              }`}
            >
              {page}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            className="px-3 py-1 border border-textnormal rounded-lg disabled:opacity-50 flex items-center gap-1"
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
