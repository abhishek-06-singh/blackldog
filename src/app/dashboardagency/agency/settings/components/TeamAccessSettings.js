'use client';
import React, { useState } from 'react';
import { Switch, Select } from 'antd';
import { ChevronDown } from 'lucide-react';

const { Option } = Select;

export default function TeamAccessSettings() {
  const [inviteSubAgents, setInviteSubAgents] = useState(true);
  const [analyticsView, setAnalyticsView] = useState(true);
  const [leadAccess, setLeadAccess] = useState('All Leads');
  const [listingAccess, setListingAccess] = useState('All Listings');

  return (
    <div className="bg-cardbg rounded-xl border border-bordercolor p-4 sm:p-6 w-full shadow-md">
      {/* Title */}
      <h2 className="text-base font-semibold text-textheading mb-1">
        Team & Access
      </h2>
      <p className="text-sm text-subtext mb-6">
        Manage default permissions for agents in your agency.
      </p>

      {/* Allow Agents to invite sub-agents */}
      <div className="flex justify-between items-start mb-6 flex-col sm:flex-row sm:items-center">
        <div className="flex flex-col space-y-1">
          <span className="text-sm font-medium text-textnormal">
            Allow Agents to invite sub-agents
          </span>
          <span className="text-xs text-subtext">
            Enable agents to expand their teams
          </span>
        </div>
        <Switch
          checked={inviteSubAgents}
          onChange={setInviteSubAgents}
          className="mt-2 sm:mt-0"
        />
      </div>

      {/* Default access to leads */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-textnormal mb-1">
          Default agent access to leads*
        </label>
        <Select
          value={leadAccess}
          onChange={setLeadAccess}
          dropdownClassName="bg-cardbg border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
            className="w-full h-10 [&_.ant-select-selector]:!bg-cardbg [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
            suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />}
        >
          <Option value="All Leads">All Leads</Option>
          <Option value="Assigned Leads">Assigned Leads</Option>
        </Select>
      </div>

      {/* Default access to listings */}
      <div className="mb-6">
        <label className=" block text-sm font-medium text-textnormal mb-1">
          Default agent access to listings
        </label>
        <Select
          value={listingAccess}
          onChange={setListingAccess}
          dropdownClassName="bg-cardbg border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
            className="w-full h-10 [&_.ant-select-selector]:!bg-cardbg [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
            suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />}
        >
          <Option value="All Listings">All Listings</Option>
          <Option value="Own Listings">Own Listings</Option>
        </Select>
      </div>

      {/* Agent-level analytics view */}
      <div className="flex justify-between items-start flex-col sm:flex-row sm:items-center">
        <div className="flex flex-col space-y-1">
          <span className="text-sm font-medium text-textnormal">
            Enable agent-level analytics view
          </span>
          <span className="text-xs text-subtext ">
            Allow agents to view their performance metrics
          </span>
        </div>
        <Switch
          checked={analyticsView}
          onChange={setAnalyticsView}
          className="mt-2 sm:mt-0"
        />
      </div>
    </div>
  );
}
