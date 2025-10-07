'use client'

import { Form, Input, Select, Row, Col } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { ChevronDown } from 'lucide-react'

export default function LocationStepTwo({ onNext, onBack }) {
  const [form] = Form.useForm()

  return (
    <>
      <div className="p-6 bg-cardbg rounded-xl shadow-sm border border-bordercolor w-full">
        <h2 className="text-lg text-textheading font-semibold mb-1">
          Location & Address
        </h2>
        <p className="text-textnormal mb-6 text-sm">
          Pinpoint the exact address to make your property easily discoverable.
        </p>

        <Form
          form={form}
          layout="vertical"
          requiredMark={false}
          className="space-y-4 text-textnormal "
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label={<span className="text-textheading font-semibold">Country</span>}
                name="country"
                className="text-textheading font-semibold"
              >
                <Select placeholder="Select Country" dropdownClassName="bg-cardbg border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
            className="w-full h-10 [&_.ant-select-selector]:!bg-cardbg [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
            suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />}/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={<span className="text-textheading font-semibold">City</span>}
                name="city"
                className="text-textheading font-semibold"
              >
                <Select placeholder="Select City" dropdownClassName="bg-cardbg border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
            className="w-full h-10 [&_.ant-select-selector]:!bg-cardbg [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
            suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal"/> } />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label={<span className="text-textheading font-semibold">Region/State</span>}
                name="region"
                className="text-textheading font-semibold"
              >
                <Select placeholder="Select Region/State" dropdownClassName="bg-cardbg border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
            className="w-full h-10 [&_.ant-select-selector]:!bg-cardbg [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
            suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={<span className="text-textheading font-semibold">City</span>}
                name="cityDuplicate"
                className="text-textheading font-semibold"
              >
                <Select placeholder="Select City" dropdownClassName="bg-cardbg border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
            className="w-full h-10 [&_.ant-select-selector]:!bg-cardbg [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
            suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />} />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            label={<span className="text-textheading font-semibold">Neighborhood</span>}
            name="neighborhood"
            className="text-textheading font-semibold"
          >
            <Input placeholder="Enter Neighborhood" className="rounded-xl h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none" />
          </Form.Item>

          <Form.Item
            label={<span className="text-textheading font-semibold">Address</span>}
            name="address"
            className="text-textheading font-semibold"
          >
            <TextArea rows={5} placeholder="Enter the address" className="rounded-xl h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none" />
          </Form.Item>

          <Form.Item
            label={<span className="text-textheading font-semibold">Postal Code</span>}
            name="postalCode"
            className="text-textheading font-semibold"
          >
            <Input placeholder="Enter Postal Code" className="rounded-xl h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none" />
          </Form.Item>

          <Form.Item
            label={<span className="text-textheading font-semibold">Location Pin</span>}
            name="locationPin"
            className="text-textheading font-semibold"
          >
            <div className="w-full h-40 bg-input rounded-xl flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <div className="text-black font-medium mb-1">
                  Interactive Map Preview
                </div>
                <div className="text-textnormal text-sm">
                  Click to set location pin
                </div>
              </div>
            </div>
          </Form.Item>
        </Form>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col md:flex-row md:justify-between mt-10 mb-20">
        <button
          className="border border-bordercolor text-textheading p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform h-12 px-6"
          onClick={onBack}
        >
          ← Go back
        </button>
        <button
          className="bg-buttonbg mt-2 md:mt-0 text-background p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform h-12 px-6"
          onClick={onNext}
        >
          Next : Property Features →
        </button>
      </div>
    </>
  )
}
