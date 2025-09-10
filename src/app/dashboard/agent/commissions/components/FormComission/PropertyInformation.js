'use client';

import { Select, Input, Button } from 'antd';

const { Option } = Select;

export default function PropertyInformation() {
  return (
    <div className="bg-cardbg p-4 rounded-xl border border-bordercolor shadow-sm w-full ">
      <h3 className="text-base font-semibold mb-4 text-textnormal">Property Information</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Select Property */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="property" className="text-sm font-medium text-textheading">
            Select Property<span className="text-red-500">*</span>
          </label>
          <Select
            id="property"
            placeholder="Enter Full Name"
             dropdownClassName="bg-cardbg border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
            className="w-full h-10 [&_.ant-select-selector]:!bg-cardbg [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
          
            size="large"
          >
            <Option value="property1">Property One</Option>
            <Option value="property2">Property Two</Option>
          </Select>
        </div>

        {/* Property Value */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="propertyValue" className="text-sm font-medium text-gray-700">
            Property Value<span className="text-red-500">*</span>
          </label>
          <Input
            id="propertyValue"
            placeholder="Enter Value"
            size="large"
           className="rounded-xl h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none"
            type="number"
          />
        </div>
      </div>

      {/* Button */}
      <div className="mt-4 ">
        <Button className='bg-buttonbg text-background' type="default">+ Post A Property</Button>
      </div>
    </div>
  );
}
