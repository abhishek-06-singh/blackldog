'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Dropdown, Menu, Button } from 'antd'
import { MoreOutlined } from '@ant-design/icons'

const properties = [
  {
    id: 1,
    name: 'Modern Family Home',
    address: '123 Oak Street, Beverly Hills',
    price: '$850,000',
    views: 245,
    inquiries: 20,
    status: 'Active',
    date: 'Jan 10, 2025',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=80',
    agent: {
      name: 'Sarah Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  },
  {
    id: 2,
    name: 'Modern Family Home',
    address: '123 Oak Street, Beverly Hills',
    price: '$850,000',
    views: 245,
    inquiries: 20,
    status: 'Active',
    date: 'Jan 10, 2025',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=80',
    agent: {
      name: 'Sarah Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  },
  {
    id: 3,
    name: 'Modern Family Home',
    address: '123 Oak Street, Beverly Hills',
    price: '$850,000',
    views: 245,
    inquiries: 20,
    status: 'Active',
    date: 'Jan 10, 2025',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=80',
    agent: {
      name: 'Sarah Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  },
]


const statusStyles = {
  Active: 'bg-green-500 text-white',
  Pending: 'bg-yellow-500 text-white',
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

export default function PropertyTableSub() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selected, setSelected] = useState([])
  const pageSize = 4
  const totalResults = properties.length
  const totalPages = Math.ceil(totalResults / pageSize)

  const start = (currentPage - 1) * pageSize
  const end = start + pageSize
  const currentItems = properties.slice(start, end)

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
              <th className="p-4">Property</th>
              <th className="p-4">Status</th>
              <th className="p-4">Price</th>
              <th className="p-4">Views</th>
              <th className="p-4">Inquiries</th>
              <th className="p-4 whitespace-nowrap">Date Added</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-bordercolor">
            {currentItems.map((property) => (
              <tr key={property.id} className="hover:bg-boxbg transition">
                <td className="p-4">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-bordercolor"
                    checked={selected.includes(property.id)}
                    onChange={() => toggleRow(property.id)}
                  />
                </td>
                <td className="pr-10 md:pr-16 py-4 md:p-4">
                  <div className="flex items-center gap-3 w-full">
                    <img
                      src={property.image}
                      alt={property.name}
                      className="w-9 h-9 rounded-lg object-cover"
                    />
                    <div className="min-w-0">
                      <div className="font-medium text-sm text-textnormal">
                        {property.name}
                      </div>
                      <div className="text-xs text-textplaceholder truncate">
                        {property.address}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 text-xs rounded-full whitespace-nowrap font-medium ${
                      statusStyles[property.status] || 'bg-gray-300 text-black-500'
                    }`}
                  >
                    {property.status}
                  </span>
                </td>
                <td className="p-4 font-medium text-textnormal">{property.price}</td>
                <td className="p-4 text-textnormal">{property.views}</td>
                <td className="p-4 text-textnormal">{property.inquiries}</td>
                <td className="p-4 text-sm text-textnormal whitespace-nowrap">{property.date}</td>
                <td className="p-4">
                  <Dropdown
                    overlay={getMenu(property)}
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
