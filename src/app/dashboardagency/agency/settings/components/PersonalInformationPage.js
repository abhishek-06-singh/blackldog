'use client';

import React from 'react';
import { Row, Col, Form, Input, Button, Upload, Avatar } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;

export default function PersonalInformationForm() {
  return (
    <div className="bg-cardbg rounded-xl border border-bordercolor px-4 sm:px-6 pt-4 pb-2 shadow-sm w-full">
      <h2 className="text-base font-semibold text-textnormal mb-6">
        Personal Information
      </h2>

      {/* Profile Image + Upload */}
      <Row className="mb-6">
        <Col xs={24}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-4 sm:space-y-0 items-center justify-start">
            <Avatar
              size={100}
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
              alt="Profile"
            />
            <Upload showUploadList={false}>
              <Button
                icon={<UploadOutlined />}
                className="bg-buttonbg text-background font-medium rounded-xl"
              >
                Update Photo
              </Button>
            </Upload>
          </div>
        </Col>
      </Row>

      {/* Form Fields */}
      <Form layout="vertical">
        <Row gutter={[16, 16]}>
          {/* Agency Name */}
          <Col xs={24} md={12}>
            <Form.Item
              label={<span className="text-textnormal">Agency Name *</span>}
              name="agencyName"
              initialValue="Silver Oak"
              rules={[{  message: 'Please input your agency name!' }]}
            >
              <Input className="rounded-xl h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none" />
            </Form.Item>
          </Col>

          {/* Agency Email */}
          <Col xs={24} md={12}>
            <Form.Item
              label={<span className="text-textnormal">Agency Email *</span>}
              name="agencyEmail"
              initialValue="silveroak@example.com"
              rules={[{ message: 'Please input your agency email!' }]}
            >
              <Input className="rounded-xl h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none" />
            </Form.Item>
          </Col>

          {/* Phone Number */}
          <Col xs={24} md={12}>
            <Form.Item
              label={<span className="text-textnormal">Phone Number</span>}
              name="phoneNumber"
              initialValue="+1 (555) 123-4567"
            >
              <Input className="rounded-xl h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none" />
            </Form.Item>
          </Col>

          {/* Website URL */}
          <Col xs={24} md={12}>
            <Form.Item
              label={<span className="text-textnormal">Website URL *</span>}
              name="websiteURL"
              initialValue="www.silveroak.com"
            >
              <Input
                disabled
                className="rounded-xl h-10 !bg-shadow !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none"
              />
            </Form.Item>
          </Col>

          {/* Address */}
          <Col xs={24}>
            <Form.Item
              label={<span className="text-textnormal">Address</span>}
              name="address"
              initialValue="123 Main Street, Suite 100 New York, NY 10001"
            >
              <TextArea
                rows={4}
                placeholder="Enter address..."
                className="!bg-cardbg !text-textnormal !border-bordercolor !shadow-none !rounded-xl"
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
