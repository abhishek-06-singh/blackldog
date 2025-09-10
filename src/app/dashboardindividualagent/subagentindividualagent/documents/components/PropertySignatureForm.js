'use client'
import React from "react"
import { Form, Select, Switch, Button } from "antd"
import { ChevronDown } from "lucide-react"

const { Option } = Select

export default function PropertySignatureForm() {
  return (
    <Form
      layout="vertical"
      className="w-full px-4 sm:px-6 md:px-6 space-y-6"
    >
      {/* Select Property */}
      <Form.Item
        label={
          <span className="text-sm text-textnormal sm:text-base font-medium">
            Select Property<span className="text-textnormal">*</span>
          </span>
        }
        name="property"
        rules={[{  message: "Please select a property" }]}
      >
        <Select
          placeholder="Select Property"
           dropdownClassName="bg-cardbg border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
            className="w-full h-10 [&_.ant-select-selector]:!bg-cardbg [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
            suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />} 
          size="large"
        >
          <Option value="property1">Property 1</Option>
          <Option value="property2">Property 2</Option>
        </Select>
      </Form.Item>

      {/* Request Signature */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
        <div>
          <p className="text-sm sm:text-base text-textnormal font-medium">Request Signature</p>
          <p className="text-xs sm:text-sm text-gray-500">
            Enable to request e-signatures from selected contact
          </p>
        </div>
        <Switch className="scale-95 sm:scale-100" />
      </div>

      {/* Leads/Contacts */}
      <Form.Item
        label={
          <span className="text-sm sm:text-base text-textnormal font-medium">
            Leads/Contacts linked to selected property
            <span className="text-textnormal">*</span>
          </span>
        }
        name="contacts"
        rules={[{ message: "Please select a contact" }]}
      >
        <Select
          placeholder="Search Leads / Contacts..."
          showSearch
           dropdownClassName="bg-cardbg border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
                      className="w-full h-10 [&_.ant-select-selector]:!bg-cardbg [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
                      suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />} 
          size="large"
        >
          <Option value="lead1">Lead 1</Option>
          <Option value="lead2">Lead 2</Option>
        </Select>
      </Form.Item>

      {/* Add Contact Button */}
      <Button
        type="default"
        className="bg-buttonbg text-background border border-bordercolor px-4 py-2 rounded-md text-sm sm:text-base hover:scale-95 transition-transform"
      >
        + Add Contact
      </Button>
    </Form>
  )
}
