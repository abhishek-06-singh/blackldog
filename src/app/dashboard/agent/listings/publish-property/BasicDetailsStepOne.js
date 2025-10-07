'use client'

import { Form, Input, Select, Row, Col, Button } from 'antd'
import { ChevronDown } from 'lucide-react'

const { TextArea } = Input

export default function BasicDetailsStepOne({ onNext }) {
  const [form] = Form.useForm()

  return (
    <>
      <div className="p-6 bg-cardbg rounded-xl shadow-md border border-bordercolor w-full">
        <h2 className="text-lg text-textheading  mb-1">
          Basic Details
        </h2>
        <p className="text-textnormal mb-6 text-sm">
          Provide a clear, marketable title and detailed description to attract
          buyers.
        </p>

        <Form
          form={form}
          layout="vertical"
          requiredMark={false}
          className="space-y-4"
        >
          <Form.Item
            label={<span className="text-textnormal font-medium">Property Title </span>}
            name="title"
            className="text-textheading "
          >
            <Input
              placeholder="Enter Property Title"
              className="rounded-xl h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none"
            />
          </Form.Item>

          <Form.Item
            label={<span className="text-textnormal font-medium">Description </span>}
            name="description"
            className="text-textheading "
          >
            <TextArea
              rows={5}
              placeholder="Describe the property features and highlights"
              className="rounded-xl h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none"
            />
          </Form.Item>

          <Form.Item
            label={<span className="text-textnormal font-medium">Property Type </span>}
            name="propertyType"
            className="text-textheading "
          >
            <Select
              placeholder="Select Property Type"
              dropdownClassName="bg-cardbg border border-bordercolor 
    [&_.ant-select-item-option-selected]:!bg-buttonbg 
    [&_.ant-select-item-option-selected]:!text-background 
    [&_.ant-select-item-option-active]:!bg-buttonbg 
    [&_.ant-select-item-option-active]:!text-background"
              className="w-full h-10 
    [&_.ant-select-selector]:!bg-cardbg 
    [&_.ant-select-selector]:!rounded-xl 
    [&_.ant-select-selector]:!border-bordercolor 
    [&_.ant-select-selection-item]:!text-textnormal 
    [&_.ant-select-selection-placeholder]:!text-placeholder 
    [&_.ant-select-selector]:!focus:border-textnormal 
    [&_.ant-select-selector]:!ring-0"
              suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />}
            >
              <Select.Option value="house" className="!text-textnormal">
                House
              </Select.Option>
              <Select.Option value="apartment" className="!text-textnormal">
                Apartment
              </Select.Option>
              <Select.Option value="land" className="!text-textnormal">
                Land
              </Select.Option>
            </Select>
          </Form.Item>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label={<span className="text-textnormal font-medium">Price </span>}
                name="price"
                className="text-textheading "
              >
                <Input
                  placeholder="Enter Price"
                  className="rounded-xl h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={<span className="text-textnormal font-medium">Currency </span>}
                name="currency"
                className="text-textheading "
              >
                <Select
                  placeholder="Select Currency"
                  dropdownClassName="bg-cardbg border border-bordercolor 
    [&_.ant-select-item-option-selected]:!bg-buttonbg 
    [&_.ant-select-item-option-selected]:!text-background 
    [&_.ant-select-item-option-active]:!bg-buttonbg 
    [&_.ant-select-item-option-active]:!text-background"
                  className="w-full h-10 
    [&_.ant-select-selector]:!bg-cardbg 
    [&_.ant-select-selector]:!rounded-xl 
    [&_.ant-select-selector]:!border-bordercolor 
    [&_.ant-select-selection-item]:!text-textnormal 
    [&_.ant-select-selection-placeholder]:!text-placeholder 
    [&_.ant-select-selector]:!focus:border-textnormal 
    [&_.ant-select-selector]:!ring-0"
                  suffixIcon={
                    <ChevronDown className="w-4 h-4 text-textnormal" />
                  }
                >
                  <Select.Option value="inr" className="!text-textnormal">
                    INR
                  </Select.Option>
                  <Select.Option value="usd" className="!text-textnormal">
                    USD
                  </Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>

        {/* Next Button */}
      </div>
      <div className="flex justify-end mt-10 mb-20">
        <button
          className="bg-buttonbg text-background p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform h-12 px-6"
          onClick={onNext}
        >
          Next : Location →
        </button>
      </div>
    </>
  )
}
