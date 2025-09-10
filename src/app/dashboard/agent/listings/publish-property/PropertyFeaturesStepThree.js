'use client'

import { Form, Select, Row, Col, Switch } from 'antd'
import { ChevronDown } from 'lucide-react'
import shieldDark from '../../../components/icons/Darkmode_icons/listing_dark/shield_white.svg'
import shirtDark from '../../../components/icons/Darkmode_icons/listing_dark/shirt_white.svg'
import snowflakeDark from '../../../components/icons/Darkmode_icons/listing_dark/snowflake_white.svg'
import poolDark from '../../../components/icons/Darkmode_icons/listing_dark/pool_white.svg'
import shieldlight from '../../../components/icons/Lightmode_icons/listing/shield_black.svg'
import shirtLight from '../../../components/icons/Lightmode_icons/listing/shirt.svg'
import snowflakeLight from '../../../components/icons/Lightmode_icons/listing/AirConditioning.svg'
import poolLight from '../../../components/icons/Lightmode_icons/listing/pool.svg'
import Image from 'next/image'

export default function PropertyFeaturesStepThree({ onNext, onBack }) {
  const [form] = Form.useForm()

  return (
    <>
      <div className="p-2 md:p-6 bg-cardbg rounded-xl shadow-sm border border-bordercolor w-full">
        <h2 className="text-lg text-textheading font-semibold mb-1">
          Property Features
        </h2>
        <p className="text-textnormal mb-6 text-sm">
          Highlight property features and amenities to showcase its value.
        </p>

        <Form
          form={form}
          layout="vertical"
          requiredMark={false}
          className="space-y-4 text-textnormal"
        >
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                label={<span className="text-textheading font-semibold">Bedrooms</span>}
                name="bedrooms"
              >
                <Select
                  placeholder="Select"
                  className="w-full h-10 [&_.ant-select-selector]:!bg-cardbg [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
                  dropdownClassName="bg-cardbg border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
                  suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />}
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <Select.Option key={num} value={num}>
                      {num}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label={<span className="text-textheading font-semibold">Bathrooms</span>}
                name="bathrooms"
              >
                <Select
                  placeholder="Select"
                  className="w-full h-10 [&_.ant-select-selector]:!bg-cardbg [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
                  dropdownClassName="bg-cardbg border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
                  suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />}
                >
                  {[1, 2, 3, 4].map((num) => (
                    <Select.Option key={num} value={num}>
                      {num}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label={<span className="text-textheading whitespace-nowrap font-semibold">Area (sq ft)</span>}
                name="area"
              >
                <Select
                  placeholder="Select Area"
                  className="w-full h-10 [&_.ant-select-selector]:!bg-cardbg [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
                  dropdownClassName="bg-cardbg border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
                  suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />}
                >
                  {[500, 1000, 1500, 2000, 2500, 3000].map((value) => (
                    <Select.Option key={value} value={value}>
                      {value.toLocaleString()} sq ft
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label={<span className="text-textheading font-semibold">Parking Spaces</span>}
                name="parkingSpaces"
              >
                <Select
                  placeholder="Enter Number"
                  className="w-full h-10 [&_.ant-select-selector]:!bg-cardbg [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
                 dropdownClassName="bg-cardbg border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
                  suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />}
                >
                  {[0, 1, 2, 3, 4].map((num) => (
                    <Select.Option key={num} value={num}>
                      {num}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={<span className="text-textheading font-semibold">Year Built</span>}
                name="yearBuilt"
              >
                <Select
                  placeholder="Select Year"
                  dropdownClassName="bg-cardbg border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"className="w-full h-10 [&_.ant-select-selector]:!bg-cardbg [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
                  suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />}
                >
                  {Array.from({ length: 50 }, (_, i) => {
                    const year = new Date().getFullYear() - i
                    return (
                      <Select.Option key={year} value={year}>
                        {year}
                      </Select.Option>
                    )
                  })}
                </Select>
              </Form.Item>
            </Col>
          </Row>

          {/* Amenities */}
          <div className="mt-4">
  <p className="text-textheading font-semibold mb-2">Amenities</p>
  <Row gutter={[16, 16]}>
    {[
      {
        name: 'airConditioning',
        label: (
          <div className="flex items-center gap-2">
            <Image src={snowflakeLight} alt="Air Conditioning" className="w-5 h-5 block dark:hidden" />
            <Image src={snowflakeDark} alt="Air Conditioning" className="w-5 h-5 hidden dark:block" />
            <span>Air Conditioning</span>
          </div>
        ),
      },
      {
        name: 'pool',
        label: (
          <div className="flex items-center gap-2">
            <Image src={poolLight} alt="Pool" className="w-5 h-5 block dark:hidden" />
            <Image src={poolDark} alt="Pool" className="w-5 h-5 hidden dark:block" />
            <span>Pool</span>
          </div>
        ),
      },
      {
        name: 'laundryRoom',
        label: (
          <div className="flex items-center gap-2">
            <Image src={shirtLight} alt="Laundry Room" className="w-5 h-5 block dark:hidden" />
            <Image src={shirtDark} alt="Laundry Room" className="w-5 h-5 hidden dark:block" />
            <span>Laundry Room</span>
          </div>
        ),
      },
      {
        name: 'gatedCommunity',
        label: (
          <div className="flex items-center gap-2">
            <Image src={shieldlight} alt="Gated Community" className="w-5 h-5 block dark:hidden" />
            <Image src={shieldDark} alt="Gated Community" className="w-5 h-5 hidden dark:block" />
            <span>Gated Community</span>
          </div>
        ),
      },
    ].map((amenity) => (
      <Col
        key={amenity.name}
        xs={24}
        sm={24}
        md={12}
        className="text-textnormal w-full"
      >
        <Form.Item name={amenity.name} valuePropName="checked" className="m-0">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border border-bordercolor bg-cardbg text-textnormal rounded-lg p-3 w-full gap-2">
            {amenity.label}
            <Switch />
          </div>
        </Form.Item>
      </Col>
    ))}
  </Row>
</div>
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
          className="bg-buttonbg mt-2 md:mt-0 text-background font-medium p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform h-12 px-6"
          onClick={onNext}
        >
          Next : Media →
        </button>
      </div>
    </>
  )
}
