'use client'

import { useState } from 'react'
import { Input, Select } from 'antd'
import { ChevronDown, Clock } from 'lucide-react'
const { Option } = Select

const InviteForm = ({ activeTab }) => {
  const [email, setEmail] = useState('')
  const [inviteDays, setInviteDays] = useState('')
  const [property, setProperty] = useState('')
  const [role, setRole] = useState('')

  return (
    <div className="mt-6 bg-cardbg border border-bordercolor rounded-lg p-6 relative">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-textheading font-semibold text-lg">
            Invite a Sub-Agent
          </h3>
          <p className="text-sm text-textnormal mt-1">
            Generate a unique referral link to invite a sub-agent to join your
            team. Each link is single-use and expires after 7 days.
          </p>
        </div>

        <span className="text-xs bg-cardbg whitespace-nowrap border px-3 py-1 rounded-lg text-textnormal">
          Expires in 7 days
        </span>
      </div>

      {/* Form Fields */}

      <div className="flex items-center gap-2 mt-4">
        <Input
          placeholder="Enter email to send directly"
          className="placeholder:text-textplaceholder rounded-xl h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none"
        />
        <button className="bg-buttonbg text-background p-2 h-12 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform w-44">
          Send Invite
        </button>
      </div>

      <div className="mt-6 bg-shadow p-4 rounded-lg text-sm text-textnormal flex items-start gap-2">
  {/* Icon */}
  <Clock className="w-4 h-4 mt-1 rounded-full text-textnormal flex-shrink-0" />
  
  {/* Text */}
  <p className="text-sm text-textnormal">
    <span className="font-semibold">Sub-agent permissions:</span> Limited read-only access to listings you explicitly share. You can revoke access anytime.
  </p>
</div>

    </div>
  )
}

export default InviteForm
