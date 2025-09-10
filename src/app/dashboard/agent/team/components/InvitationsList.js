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
    <div className="mt-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h3 className="text-textheading font-medium">Your Invitations</h3>
        {activeTab === 'external' ? (
          <span className="text-xs border rounded-full px-3 py-1 text-textnormal">
            {invitations.length} Active Invites
          </span>
        ) : (
          <p className="text-sm text-textnormal">
            {invitations.length} Active Invites
          </p>
        )}
      </div>

      {/* Table Container */}
      <div className="mt-3 overflow-x-auto rounded-xl border border-bordercolor bg-cardbg shadow-md">
        <table className="min-w-full text-left table-auto">
          <thead className="bg-cardbg text-textplaceholder text-sm font-thin">
            <tr>
              <th className="p-4 whitespace-nowrap">Invited Email</th>
              <th className="p-4 whitespace-nowrap">Status</th>
              <th className="p-4 whitespace-nowrap">Date Invited</th>
              {activeTab === 'external' && (
                <th className="p-4 whitespace-nowrap">Expires In</th>
              )}
              <th className="p-4 whitespace-nowrap">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-bordercolor text-textnormal">
            {invitations.map((inv, idx) => (
              <tr
                key={idx}
                className="hover:bg-boxbg flex flex-col sm:table-row mb-4 sm:mb-0 transition"
              >
                {/* Email */}
                <td className="p-2 sm:p-4">{inv.email}</td>

                {/* Status */}
                <td className="p-2 sm:p-4">
                  <span
                    className={`${
                      inv.status === 'Pending'
                        ? 'text-yellow-500'
                        : inv.status === 'Accepted'
                        ? 'text-green-500'
                        : 'text-red-500'
                    }`}
                  >
                    {inv.status}
                  </span>
                </td>

                {/* Date Invited */}
                <td className="p-2 sm:p-4">{inv.date}</td>

                {/* Expires In (only if external) */}
                {activeTab === 'external' && (
                  <td className="p-2 sm:p-4">{inv.expiresIn || '-'}</td>
                )}

                {/* Actions */}
                <td className="p-2 sm:p-4">
                  <Dropdown overlay={menu} trigger={['click']}>
                    <MoreOutlined className="cursor-pointer text-lg" />
                  </Dropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom Note (only for external) */}
      {activeTab === 'external' && (
        <div className="mt-4 bg-cardbg rounded-lg p-3 text-xs text-textnormal">
          ⚠️ Temporary Access <br />
          External collaborators can be invited for 3, 5, or 7 days. Upgrade
          your plan for longer or permanent access.
        </div>
      )}
    </div>
  )
}

export default InvitationsList
