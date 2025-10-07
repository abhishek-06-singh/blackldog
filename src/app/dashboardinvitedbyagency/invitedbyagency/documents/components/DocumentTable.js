'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Dropdown, Menu, Button } from 'antd'
import { MoreOutlined } from '@ant-design/icons'
import Image from 'next/image'
import pdf_light from '../../../components/icons/Lightmode_icons/leads-light/pdf_black.svg'
import pdf_dark from '../../../components/icons/Darkmode_icons/leads-dark/white_pdf.svg'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const documents = [
  {
    id: 1,
    name: 'Purchase Agreement',
    fileType: 'pdf',
    property: {
      name: 'Modern Family Home',
      priceRange: '$450,000 - $600,000',
      image:
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=80',
    },
    uploadedBy: {
      name: 'Michael Chen',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    status: 'Signed',
    uploadDate: 'Jan 15, 2025',
  },
  {
    id: 2,
    name: 'Property NDA.pdf',
    fileType: 'pdf',
    property: {
      name: 'Modern Family Home',
      priceRange: '$450,000 - $600,000',
      image:
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=80',
    },
    uploadedBy: {
      name: 'Michael Chen',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    status: 'Pending',
    uploadDate: 'Jan 15, 2025',
  },
  {
    id: 3,
    name: 'Listing Contract.pdf',
    fileType: 'pdf',
    property: {
      name: 'Modern Family Home',
      priceRange: '$450,000 - $600,000',
      image:
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=80',
    },
    uploadedBy: {
      name: 'Michael Chen',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    status: 'Sent',
    uploadDate: 'Jan 15, 2025',
  },
]

const statusStyles = {
  Signed: 'bg-green-500 text-white',
  Pending: 'bg-status-pending-in-review-500 text-white',
  Sent: 'bg-gray-300 text-black',
}

const getMenu = (doc) => (
  <Menu className="!bg-cardbg [&_.ant-dropdown-menu-item]:!text-textnormal [&_.ant-dropdown-menu-item:hover]:!bg-buttonbg [&_.ant-dropdown-menu-item:hover]:!text-background">
    <Menu.Item key="1" onClick={() => alert(`Download ${doc.name}`)}>
      Download
    </Menu.Item>
    <Menu.Item key="2" onClick={() => alert(`Delete ${doc.name}`)}>
      Delete
    </Menu.Item>
  </Menu>
)

export default function DocumentsTable() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selected, setSelected] = useState([])
  const pageSize = 4
  const totalResults = documents.length
  const totalPages = Math.ceil(totalResults / pageSize)

  const start = (currentPage - 1) * pageSize
  const end = start + pageSize
  const currentItems = documents.slice(start, end)

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
  const router = useRouter()

  const handleClick = (item) => {
    router.push(`/dashboardinvitedbyagency/invitedbyagency/documents/${encodeURIComponent(item.name)}`)
  }

  return (
    <div className="mt-8">
      <div className="overflow-x-auto rounded-xl border border-bordercolor bg-cardbg shadow-md">
        <table className="min-w-full text-left table-auto">
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
              <th className="p-4">Document</th>
              <th className="p-4 whitespace-nowrap">Linked Property</th>
              <th className="p-4 whitespace-nowrap">Uploaded by</th>
              <th className="p-4">Status</th>
              <th className="p-4 whitespace-nowrap">Upload Date</th>
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

                {/* Document */}
                <td className="pr-12 md:p-4 whitespace-nowrap">
                  <div className="flex items-center gap-2 ">
                    <Image src={pdf_light} className="block dark:hidden w-6 h-6" width={24} height={24} />
                    <Image src={pdf_dark} className="hidden dark:block w-6 h-6" width={24} height={24} />
                    <span
                      onClick={() => handleClick(item)}
                      className="text-sm font-medium text-textnormal cursor-pointer"
                    >
                      {item.name}
                    </span>
                  </div>
                </td>
                {/* Linked Property */}
                <td className="pr-16 p-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.property.image}
                      className="w-14 h-10 rounded-md object-cover"
                      alt={item.property.name}
                    />
                    <div className="min-w-0 text-sm">
                      <div className="font-medium text-textnormal">{item.property.name}</div>
                      <div className="text-xs text-textplaceholder">{item.property.priceRange}</div>
                    </div>
                  </div>
                </td>

                {/* Uploaded By */}
                <td className="pr-16 p-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <img
                      src={item.uploadedBy.avatar}
                      className="w-8 h-8 rounded-full"
                      alt={item.uploadedBy.name}
                    />
                    <span className="text-sm text-textnormal">{item.uploadedBy.name}</span>
                  </div>
                </td>

                {/* Status */}
                <td className="p-4">
                  <span className={`px-3 py-1 text-xs rounded-full font-medium ${statusStyles[item.status]}`}>
                    {item.status}
                  </span>
                </td>

                {/* Upload Date */}
                <td className="p-4 text-sm text-textnormal whitespace-nowrap">
                  {item.uploadDate}
                </td>

                {/* Actions */}
                <td className="p-4">
                  <Dropdown
                    overlay={getMenu(item)}
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
      <div className="flex flex-col sm:flex-row items-center justify-between my-10 text-sm text-textnormal gap-4 sm:gap-0">
        <p>
          Showing {start + 1} to {Math.min(end, totalResults)} of {totalResults} results
        </p>
        <div className="flex flex-wrap items-center gap-2">
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
