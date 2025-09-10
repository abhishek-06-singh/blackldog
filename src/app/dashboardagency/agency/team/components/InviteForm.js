'use client'

import { useState } from 'react'
import { Input, Select } from 'antd'
import { Check, ChevronDown, Info } from 'lucide-react'

const { Option } = Select

const InviteForm = ({ activeTab }) => {
  const [email, setEmail] = useState('')
  const [inviteDays, setInviteDays] = useState('')
  const [property, setProperty] = useState('')
  const [role, setRole] = useState('')

  const isSimpleInvite = activeTab === 'agent' || activeTab === 'subAgent'

  return (
    <div className="mt-6 border rounded-xl p-6 relative">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-textheading font-semibold text-lg">
            {activeTab === 'subAgent'
              ? 'Invite a Sub-Agent'
              : activeTab === 'external'
              ? 'Invite an External Collaborator'
              : 'Invite an Agent'}
          </h3>
          <p className="text-sm text-textnormal mt-1">
            {activeTab === 'subAgent'
              ? 'Generate a unique referral link to invite a sub-agent to join your team.'
              : activeTab === 'external'
              ? 'Generate a unique referral link to invite an external collaborator to join your team. Each link is single-use and expires after 7 days.'
              : 'Generate a unique referral link to invite a full-time agent to join your agency team.'}
          </p>
        </div>

        {/* Expiry badge */}
        {activeTab !== '' && (
          <span className="text-xs bg-cardbg border border-bordercolor px-3 py-1 rounded-xl text-textnormal">
            Expires in 7 days
          </span>
        )}
      </div>

      {/* Form Fields */}
      {activeTab === 'external' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-textheading">
              Enter Email
            </label>
            <Input
              placeholder="Enter email to send directly"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-xl h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none"
            />
          </div>

          {/* Invite For */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-textheading">
              Invite For
            </label>
            <Select
              placeholder="Number of Days"
              value={inviteDays}
              onChange={setInviteDays}
              dropdownClassName="bg-cardbg border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
              className="w-full h-10 [&_.ant-select-selector]:!bg-cardbg [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
              suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />}
            >
              <Option value="7">7 Days</Option>
              <Option value="14">14 Days</Option>
              <Option value="30">30 Days</Option>
            </Select>
          </div>

          {/* Select Property */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-textheading">
              Select Property
            </label>
            <Select
              placeholder="All Properties"
              value={property}
              onChange={setProperty}
              dropdownClassName="bg-cardbg border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
              className="w-full h-10 [&_.ant-select-selector]:!bg-cardbg [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
              suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />}
            >
              <Option value="all">All Properties</Option>
              <Option value="villa">Luxury Villa</Option>
              <Option value="apartment">City Apartment</Option>
            </Select>
          </div>

          {/* Role / Purpose */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-textheading">
              Role/Purpose
            </label>
            <Select
              placeholder="Select Role"
              value={role}
              onChange={setRole}
              dropdownClassName="bg-cardbg border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
              className="w-full h-10 [&_.ant-select-selector]:!bg-cardbg [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
              suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />}
            >
              <Option value="lawyer">Lawyer</Option>
              <Option value="architect">Architect</Option>
              <Option value="marketing">Marketing Specialist</Option>
            </Select>
          </div>
        </div>
      ) : (
        // Simple form for Agent and Sub-Agent
        <div className="flex items-center gap-2 mt-4">
          <Input
            placeholder="Enter email to send directly"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-xl h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none"
          />
          <button className="bg-textheading text-background p-2 h-12 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform w-44">
            Send Invite
          </button>
        </div>
      )}

      {/* Send button only for external */}
      {activeTab === 'external' && (
        <button className="bg-buttonbg text-background p-2 h-12 rounded-lg flex text-sm justify-center items-center gap-2 hover:scale-95 transition-transform w-44 mt-6">
          Send Invite
        </button>
      )}

      {/* Info Box */}
      <div className="space-y-4 text-sm text-textnormal">
        {activeTab === 'subAgent' && (
          <>
          <div className="mt-6 bg-boxbg p-4 rounded-lg text-sm text-textnormal">
           <div className="flex items-center mb-2 text-textheading font-semibold text-sm">
        <Info className="w-4 h-4 mr-2" />
        Sub-agent Permissions
      </div>
            <p className='text-textnormal mt-2'>
             Limited read-only access to listings you explicitly share.You can revoke access anytime
            </p>
            </div>

            <div className="w-full md:w-1/2 flex flex-col gap-1">
  <label className="text-sm font-medium text-textheading">
    Assign SubAgent To
  </label>
  <Select
    placeholder="Assign subagent to"
    dropdownClassName="bg-cardbg border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
    className="w-full h-10 [&_.ant-select-selector]:!bg-cardbg [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
    suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />}
  >
    <Option value="agent1">Agent 1</Option>
    <Option value="agent2">Agent 2</Option>
    <Option value="agent3">Agent 3</Option>
  </Select>
</div>

          </>
        )}

        {activeTab === 'Agent' && (
          <>
            <div className="flex items-center mb-2 text-textheading font-semibold text-sm">
              <Info className="w-4 h-4 mr-2" />
              Agent Permissions & Access
            </div>
            <p className="text-sm text-textnormal mb-4">Invited agents will have:</p>
            <ul className="list-none space-y-2 text-sm text-textnormal">
              <li className="flex items-start gap-2">
                <div className="bg-green-500 w-5 h-5 flex items-center rounded-full justify-center">
                  <Check className="text-white w-4 h-4 mt-1" />
                </div>
                Ability to manage listings, view and edit CRM/Contacts
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-green-500 w-5 h-5 flex items-center rounded-full justify-center">
                  <Check className="text-white w-4 h-4 mt-1" />
                </div>
                Access to commissions, documents, and reports
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-green-500 w-5 h-5 flex items-center rounded-full justify-center">
                  <Check className="text-white w-4 h-4 mt-1" />
                </div>
                Ability to invite sub-agents or external collaborators
              </li>
            </ul>
          </>
        )}

        {activeTab === 'external' && (
          <>
            <p className="font-medium text-textheading flex "><Info className="w-4 h-4 mr-2 " /> Limited access:</p>
            <ul className="list-disc ml-5 mt-1">
              <li>Temporary specific invitations (lawyers, architects, marketing specialists)</li>
              <li>General access for all external collaborators</li>
              <li>View-only access to properties assigned by you</li>
              <li>Can join your chats or group discussions</li>
            </ul>
          </>
        )}
      </div>
    </div>
  )
}

export default InviteForm
