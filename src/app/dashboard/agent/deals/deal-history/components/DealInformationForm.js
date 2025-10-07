'use client'

import React from 'react'
import {  Input, Select, DatePicker, Form, Row, Col } from 'antd'
import {ChevronDown} from 'lucide-react'
import {CalendarOutlined } from '@ant-design/icons'

const { Option } = Select

export default function DealInformationForm() {
  return (
      <div className="bg-cardbg py-4 px-2 md:px-6 rounded-xl shadow-md w-full border border-bordercolor mx-auto">
        <h2 className="text-lg font-semibold mb-6 text-textnormal">Deal Information</h2>

        <Form layout="vertical">
          <Row gutter={[24, 2]}> 
            {/* Deal Title */}
            <Col xs={24} sm={12}>
              <Form.Item className='font-semibold no-label-margin' label={<span className='text-textnormal'>Deal Title*</span>} name="dealTitle" rules={[{  message: 'Please enter deal title' }]}>
                <Input  placeholder="Enter Deal Title" className="!text-xs md:!text-sm rounded-xl placeholder:!text-textplaceholder h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none" />
              </Form.Item>
            </Col>

            {/* Property */}
            <Col xs={24} sm={12}>
              <Form.Item className='font-semibold no-label-margin' label={<span className='text-textnormal'>Property*</span>} name="property">
                <Select   dropdownClassName="bg-cardbg border border-bordercolor 
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

            suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />}placeholder="Select property"  defaultValue="property1" >
             
                  <Option value="property1" className="!text-xs md:!text-sm !text-textnormal">Property 1</Option>
                  <Option value="property2" className="!text-xs md:!text-sm !text-textnormal">Property 2</Option>
                  <Option value="property3" className="!text-xs md:!text-sm !text-textnormal">Property 3</Option>
                </Select>
              </Form.Item>
            </Col>

            {/* Deal Value */}
            <Col xs={24} sm={12}>
              <Form.Item className='font-semibold no-label-margin' label={<span className='text-textnormal'>Deal Value*</span>} name="dealValue" rules={[{  message: 'Please enter deal value' }]}>
                <Input className="!text-xs md:!text-sm rounded-xl placeholder:!text-textplaceholder h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none" placeholder="Enter Deal Value" />
              </Form.Item>
            </Col>

            {/* Deal Stage */}
            <Col xs={24} sm={12}>
              <Form.Item className='font-semibold no-label-margin' label={<span className='text-textnormal'>Deal Stage*</span>} name="dealStage" rules={[{  message: 'Please select deal stage' }]}>
                <Select  dropdownClassName="bg-cardbg border border-bordercolor 
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
    defaultValue="New">
                  <Option value="New" className="!text-xs md:!text-sm !text-textnormal">New</Option>
                  <Option value="Negotiation" className="!text-xs md:!text-sm !text-textnormal">Negotiation</Option>
                  <Option value="Closed" className="!text-xs md:!text-sm !text-textnormal">Closed</Option>
                </Select>
              </Form.Item>
            </Col>

            {/* Expected Closing Date */}
            <Col xs={24} sm={12}>
              <Form.Item className='font-semibold no-label-margin' label={<span className='text-textnormal'>Expected Closing Date</span>} name="closingDate">
      <DatePicker
  className="
    w-full h-10 rounded-xl
      [&_.ant-picker-input>input]:!text-xs md:[&_.ant-picker-input>input]:!text-sm
    [&_.ant-picker-input>input]:!text-textnormal
    [&_.ant-picker-input>input::placeholder]:!text-placeholder
    !bg-cardbg !border-bordercolor !focus:border-textnormal !ring-0
  "
  placeholder="Select Date"
  suffixIcon={<CalendarOutlined className="w-4 h-4 text-placeholder" />}
/>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
  )
}
