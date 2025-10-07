'use client'
import React, { useState } from "react";
import { Form, Input, Select } from "antd";
import { ChevronDown } from "lucide-react";


const { Option } = Select;

export default function OpportunityPreferences() {
  const [form] = Form.useForm();
  const [propertyType, setPropertyType] = useState('apartment');

  return (
    <div className="py-2 px-4 rounded-xl border border-bordercolor bg-cardbg shadow-md">
      <h1 className="text-md font-bold text-primary mb-4 mt-2">Opportunity Preferences</h1>

      <Form
        form={form}
        layout="vertical"
        requiredMark={false}
        className="space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Property Type */}
          <Form.Item
  label={<span className="text-textheading font-medium">Property Type*</span>}
  name="propertyType"
  className="text-textheading"
  rules={[{ required: true, message: "Please select property type" }]}
>
  <Select
    value={propertyType}
    onChange={(value) => setPropertyType(value)}
    placeholder="Select Property Type"
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
    <Option value="apartment" className="!text-xs md:!text-sm !text-textnormal">Apartment</Option>
    <Option value="house" className="!text-xs md:!text-sm !text-textnormal">House</Option>
    <Option value="villa" className="!text-xs md:!text-sm !text-textnormal">Villa</Option>
    <Option value="commercial" className="!text-xs md:!text-sm !text-textnormal">Commercial</Option>
  </Select>
</Form.Item>


          {/* Preferred Location/Area */}
          <Form.Item
            label={<span className="font-medium text-textheading ">Preferred Location/Area*</span>}
            name="preferredLocation"
            className="text-textheading "
          >
          <Input
               className="!text-xs md:!text-sm  rounded-xl placeholder:!text-textplaceholder h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none" placeholder="Enter Location/Area" />
          </Form.Item>

          {/* Budget Range (Min) */}
          <Form.Item
            label={
              <>{<span className="text-textheading font-medium ">
                Budget Range <span>*</span> <span style={{ fontSize: "12px" }}>(Min)</span></span>}
              </>
            }
            name="budgetMin"
            className="text-textheading "
            rules={[{ required: true, message: "Please enter minimum budget" }]}
          >
          <Input
               className="!text-xs md:!text-sm  rounded-xl placeholder:!text-textplaceholder h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none" placeholder="Enter Amount" />

          </Form.Item>

          {/* Budget Range (Max) */}
          <Form.Item
            label={
              <>{<span className="text-textheading font-medium ">
                Budget Range <span>*</span> <span style={{ fontSize: "12px" }}>(Max)</span></span>}
              </>
            }
            name="budgetMax"
            className="text-textheading "
            rules={[{ required: true, message: "Please enter maximum budget" }]}
          >
          <Input
               className="!text-xs md:!text-sm  rounded-xl placeholder:!text-textplaceholder h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none" placeholder="Enter Amount" />

          </Form.Item>
        </div>
      </Form>
    </div>
  );
}
