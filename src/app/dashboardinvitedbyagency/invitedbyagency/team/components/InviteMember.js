'use client'

import { useState } from 'react'
import { Input, Button, Dropdown, Menu } from 'antd'
import { MoreOutlined } from '@ant-design/icons'
import InviteForm from './InviteForm'
import Heading from '../../../components/minicomponents/Heading'
import InvitationsList from './InvitationsList'
const InviteMember = () => {
  const [activeTab, setActiveTab] = useState('subAgent')

  const invitations = [
    { email: 'john.doe@email.com', status: 'Pending', date: 'Jan 15, 2025' },
    {
      email: 'sarah.smith@email.com',
      status: 'Accepted',
      date: 'Jan 15, 2025',
    },
    { email: 'mike.wilson@email.com', status: 'Expired', date: 'Jan 15, 2025' },
  ]

  return (<>
     <div className="ml-5 md:ml-10 mt-4 md:h-10 flex flex-col md:flex-row pr-5 md:pr-10 md:justify-between">
                    <Heading
                      title="Invite Sub-Agent"
                      subtitle="Invite sub-agents to join your team with limited access"
                    />
                    </div>
    <div className="p-6 bg-background rounded-2xl">
      {/* Invite Form */}
      <InviteForm  />

      {/* Invitations List */}
      <InvitationsList invitations={invitations} />
    </div>
    </>
  )
}

export default InviteMember
