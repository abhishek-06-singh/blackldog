import React from 'react';
import { Form, Input, Select, DatePicker } from 'antd';
import { ChevronDown } from 'lucide-react';

const { Option } = Select;

const DealInformationForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form Submitted:', values);
  };

  return (
    <div className="bg-cardbg border border-bordercolor rounded-xl p-4 sm:p-6">
      <h3 className="text-lg font-semibold text-textnormal mb-6">
        Deal Information
      </h3>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 lg:grid-cols-2 xl:grid-cols-2"
      >
        {/* Deal Title */}
        <Form.Item
          label={<span className='text-textnormal'>Deal Title</span>}
          name="dealTitle"
          rules={[{ message: 'Please enter the deal title' }]}
        >
          <Input  className="rounded-xl h-10 !bg-input !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none" placeholder="Enter Deal Title" />
        </Form.Item>

        {/* Property */}
        <Form.Item label={<span className='text-textnormal'>Property</span>} name="property">
          <Select
            dropdownClassName="bg-input border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
            className="w-full h-10 [&_.ant-select-selector]:!bg-input [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
            suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />} placeholder="Select property">
            <Option value="property1">Property 1</Option>
            <Option value="property2">Property 2</Option>
          </Select>
        </Form.Item>

        {/* Deal Value */}
        <Form.Item
          label={<span className='text-textnormal'>Deal Value</span>}
          name="dealValue"
          rules={[{  message: 'Please enter the deal value' }]}
        >
          <Input  className="rounded-xl h-10 !bg-input !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none" placeholder="Enter Deal Value" />
        </Form.Item>

        {/* Deal Stage */}
        <Form.Item
          label={<span className='text-textnormal'>Deal Stage</span>}
          name="dealStage"
          rules={[{ message: 'Please select deal stage' }]}
          initialValue="new"
        >
          <Select
            dropdownClassName="bg-input border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
                      className="w-full h-10 [&_.ant-select-selector]:!bg-input [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
                      suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />}>
            <Option value="new">New</Option>
            <Option value="in-progress">In Progress</Option>
            <Option value="closed">Closed</Option>
          </Select>
        </Form.Item>

        {/* Expected Closing Date */}
        <Form.Item
          label={<span className='text-textnormal'>Expected Closing Date</span>}
          name="closingDate"
          className="sm:col-span-2 lg:col-span-1"
        >
          <DatePicker className='h-10 bg-input border border-bordercolor' style={{ width: '100%' }} placeholder="Select Date" />
        </Form.Item>
      </Form>
    </div>
  );
};

export default DealInformationForm;
