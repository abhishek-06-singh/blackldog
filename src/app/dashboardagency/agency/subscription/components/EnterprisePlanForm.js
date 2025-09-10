'use client';

import React from 'react';
import { Form, Input, Button, ConfigProvider } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { Clock } from 'lucide-react';

export default function EnterprisePlanForm() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form Data:', values);
    // You can handle API submission here
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#EEB887',
        },
      }}
    >
      <div className=" bg-cardbg rounded-xl border border-bordercolor shadow-md  p-2 md:p-6">
        
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className="space-y-4"
        >
          <Form.Item
            name="agencyName"
            label={<span className='font-medium text-textheading'>Agency name*</span>}
            rules={[{  message: 'Please enter your agency name' }]}
          >
            <Input placeholder="Enter Agency name" className="placeholder:text-textplaceholder rounded-xl h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none" />
          </Form.Item>

          <Form.Item
            name="contactName"
            label={<span className='font-medium text-textheading'>Contact Person Name*</span>}
            rules={[{  message: 'Please enter the contact person’s name' }]}
          >
            <Input placeholder="Enter Name of the Person" className="placeholder:text-textplaceholder rounded-xl h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none" />
          </Form.Item>

          <Form.Item
            name="email"
            label={<span className='font-medium text-textheading'>Email*</span>}
            rules={[
              {  message: 'Please enter a valid email address' },
              { type: 'email', message: 'Invalid email format' },
            ]}
          >
            <Input
              placeholder="Enter Email" 
              prefix={<MailOutlined />}
              className="placeholder:text-textplaceholder rounded-xl h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none"
            />
          </Form.Item>

          <Form.Item
            name="users"
            label={<span className='font-medium text-textheading'>Number of Users*</span>}
            rules={[{  message: 'Please enter number of users' }]}
          >
            <Input type="number" placeholder="Enter Number of Users" className="placeholder:text-textplaceholderrounded-xl h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none" />
          </Form.Item>

          <Form.Item
            name="listings"
            label={<span className='font-medium text-textheading'>Expected Number of Listings*</span>}
            rules={[{  message: 'Please enter number of listings' }]}
          >
            <Input type="number" placeholder="Enter expected number of listings" className="placeholder:text-textplaceholderrounded-xl h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none" />
          </Form.Item>

          <Form.Item
            name="requirements"
            label={<span className='font-medium text-textheading'>Additional Requirements*</span>}
            rules={[{ message: 'Please provide additional requirements' }]}
          >
            <Input.TextArea
              rows={4}
              placeholder="Describe any specific features, integrations, or requirements you need" className="placeholder:text-textplaceholder !bg-cardbg !text-textnormal !border-bordercolor !shadow-none !rounded-xl"
            />
          </Form.Item>

      
        </Form>

      </div>
          <Form.Item className="!mt-6">
            <Button
              htmlType="submit"
              className="bg-buttonbg font-medium text-background px-6 py-4 rounded-xl hover:bg-shadow"
            >
              Submit Enquiry
            </Button>
          </Form.Item>

          
        <div className="w-fit mt-6 bg-orange-100 dark:bg-[#EEB88726] text-sm text-textnormal p-4 rounded-md border border-orange-100 dark:border-[#EEB88726] flex items-start gap-2">
          <span className="text-xl"><Clock className="h-5 w-5"/></span>
          <span className='font-medium'>Our team will contact you within 1-2 business days to discuss your custom plan.</span>
        </div>
    </ConfigProvider>
  );
}
