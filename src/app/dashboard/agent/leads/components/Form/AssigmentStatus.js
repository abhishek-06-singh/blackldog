'use client'
import React, { useState } from 'react'
import { Form, Input, Select, Checkbox } from "antd";
import { ChevronDown } from "lucide-react";

const { Option } = Select;
const { TextArea } = Input;

export default function AssignmentStatus() {
  const [form] = Form.useForm();
  const [leadStatus, setLeadStatus] = useState('new');

  return (
    <div className="py-2 px-4 rounded-xl border border-bordercolor bg-cardbg shadow-md">
      <h1 className="text-md font-bold text-primary mb-4 mt-2">Assignment & Status</h1>

      <Form
        form={form}
        layout="vertical"
        requiredMark={false}
        className="space-y-4 mb-4"
      >
        {/* Lead Status */}
       
     <Form.Item
  label={<span className="text-textheading font-medium">Lead Status*</span>}
  name="leadStatus"
  className="text-textheading"
  rules={[{ required: true, message: "Please select lead status" }]}
>
  <Select
    value={leadStatus}
    onChange={(value) => setLeadStatus(value)}
    placeholder="Select Lead Status"
    dropdownClassName="bg-cardbg border border-bordercolor 
      [&_.ant-select-item-option-selected]:!bg-buttonbg 
      [&_.ant-select-item-option-selected]:!text-background 
      [&_.ant-select-item-option-active]:!bg-buttonbg 
      [&_.ant-select-item-option-active]:!text-background"
    
    className="w-full h-10 
      [&_.ant-select-selection-item]:!text-xs md:[&_.ant-select-selection-item]:!text-sm 
      [&_.ant-select-selector]:!bg-cardbg 
      [&_.ant-select-selector]:!rounded-xl 
      [&_.ant-select-selector]:!border-bordercolor 
      [&_.ant-select-selection-item]:!text-textnormal 
      [&_.ant-select-selector]:!focus:border-textnormal 
      [&_.ant-select-selector]:!ring-0
      placeholder:!text-textplaceholder"
    
    suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />}
  >
    <Option value="new" className="!text-xs md:!text-sm !text-textnormal">New</Option>
    <Option value="in_progress" className="!text-xs md:!text-sm !text-textnormal">In Progress</Option>
    <Option value="contacted" className="!text-xs md:!text-sm !text-textnormal">Contacted</Option>
    <Option value="converted" className="!text-xs md:!text-sm !text-textnormal">Converted</Option>
    <Option value="closed" className="!text-xs md:!text-sm !text-textnormal">Closed</Option>
  </Select>
</Form.Item>


        {/* High Priority Checkbox */}
        <Form.Item name="highPriority" valuePropName="checked">
          <Checkbox className="text-textnormal">Mark as High Priority</Checkbox>
        </Form.Item>

        {/* Notes/Internal Comments */}
        <Form.Item
          label={<span className="text-textheading font-medium ">Notes/Internal Comments</span>}
          name="notes"
          className="text-textheading "
        >
          <TextArea
            rows={4}
            placeholder="Enter here..."
            className="!text-xs md:!text-sm  rounded-xl placeholder:!text-textplaceholder h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none"
          />
        </Form.Item>

        {/* Tags */}
        <Form.Item
          label={<span className="text-textheading font-medium ">Tags</span>}
          name="tags"
          className="text-textheading "
        >
          <Input
            placeholder="Enter tags separated by commas"
           className="!text-xs md:!text-sm  rounded-xl placeholder:!text-textplaceholder h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none"
          />
        </Form.Item>
      </Form>
    </div>
  );
}
