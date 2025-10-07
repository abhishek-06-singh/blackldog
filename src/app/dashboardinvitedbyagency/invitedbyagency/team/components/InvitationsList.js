'use client'

import { Dropdown, Menu } from 'antd'
import { MoreOutlined } from '@ant-design/icons'

const InvitationsList = ({ invitations, activeTab }) => {
  const menu = (
    <Menu
      items={[
        { key: '1', label: 'Resend Invite' },
        { key: '2', label: 'Revoke Access' },
      ]}
    />
  )

  return (
    <div className="mt-6 bg-cardbg border-bordercolor border shadow-md p-6 rounded-lg">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-textheading text-lg font-medium">Your Invitations</h3>

        <span className="text-xs border border-bordercolor font-medium rounded-full px-3 py-1 text-textnormal">
          3 Active Invites
        </span>
      </div>

      {/* Table Container */}
      <div className="mt-3 overflow-x-auto">
        <table className="min-w-full text-left table-auto">
          <thead className="bg-cardbg text-textplaceholder text-sm border-b border-bordercolor">
            <tr>
              <th className="p-4 whitespace-nowrap">Invited Email</th>
              <th className="p-4 whitespace-nowrap">Status</th>
              <th className="p-4 whitespace-nowrap">Date Invited</th>
             
                <th className="p-4 whitespace-nowrap">Expires In</th>
              
              <th className="p-4 whitespace-nowrap">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-bordercolor text-textnormal">
  {[
    {
      email: 'john.doe@email.com',
      status: 'Pending',
      date: 'Jan 15, 2025',
      expiresIn: '7 Days',
    },
    {
      email: 'sarah.smith@email.com',
      status: 'Accepted',
      date: 'Jan 15, 2025',
      expiresIn: '7 Days',
    },
    {
      email: 'mike.wilson@email.com',
      status: 'Expired',
      date: 'Jan 15, 2025',
      expiresIn: '7 Days',
    },
  ].map((inv, idx) => (
    <tr
      key={idx}
      className="hover:bg-boxbg flex flex-col sm:table-row mb-4 sm:mb-0 transition"
    >
      {/* Email */}
      <td className="p-2 sm:p-4 md:text-sm text-xs">{inv.email}</td>

      {/* Status */}
      <td className="p-2 sm:p-4 md:text-sm text-xs">
        <span
          className={`px-2 py-0.5 rounded-full text-sm font-medium ${
            inv.status === 'Pending'
              ? 'text-status-pending-in-review-500 border border-status-pending-in-review-500'
              : inv.status === 'Accepted'
              ? 'text-green-500 border border-green-500'
              : 'text-red-500 border border-red-500'
          }`}
        >
          {inv.status}
        </span>
      </td>

      {/* Date Invited */}
      <td className="p-2 sm:p-4 md:text-sm text-xs">{inv.date}</td>

      {/* Expires In */}
      <td className="p-2 sm:p-4 md:text-sm text-xs">{inv.expiresIn || '-'}</td>

      {/* Actions */}
      <td className="p-2 sm:p-4 md:text-sm text-xs">
        <Dropdown overlay={menu} trigger={['click']}>
          <MoreOutlined className="cursor-pointer text-lg" />
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

export default InvitationsList
