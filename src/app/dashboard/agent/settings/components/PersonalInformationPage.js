'use client'
import React from 'react'
import { Row, Col, Form, Input, Button, Upload, Avatar } from 'antd'
import { EditIcon } from 'lucide-react'

export default function PersonalInformationForm() {
  return (
    <div className="bg-cardbg rounded-xl border border-bordercolor px-4 sm:px-6 pt-4 pb-2 shadow-sm w-full">
      <h2 className="text-base md:text-[18px] font-semibold text-textnormal mb-4">
        Personal Information
      </h2>

      {/* Profile Image + Upload */}
      <Row className="mb-4">
        <Col xs={24}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-3 sm:space-y-0 items-center justify-start">
            <Avatar
              size={100}
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Profile"
            />
            <Upload showUploadList={false}>
              <Button
                icon={<EditIcon className="w-4 h-4 text-textnormal" />}
                className="bg-buttonbg text-background !py-4 text-xs md:text-sm font-medium rounded-lg w-full sm:w-auto"
              >
                Update Photo
              </Button>
            </Upload>
          </div>
        </Col>
      </Row>

      {/* Form Fields */}
      <Row>
        <Col span={24}>
          <Form layout="vertical">
            <Row gutter={[16, 0]}>
              {/* First Name */}
              <Col xs={24} md={12}>
                <Form.Item
                  label={<span className="text-textnormal text-xs sm:text-sm font-medium">First Name *</span>}
                  name="firstName"
                  initialValue="Sarah"
                  rules={[{ message: 'Please input your first name!' }]}
                  style={{ marginBottom: 12 }}
                >
                  <Input className="rounded-xl h-10 w-full !text-xs !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none" />
                </Form.Item>
              </Col>

              {/* Last Name */}
              <Col xs={24} md={12}>
                <Form.Item
                  label={<span className="text-textnormal text-xs sm:text-sm font-medium">Last Name *</span>}
                  name="lastName"
                  initialValue="Johnson"
                  rules={[{ message: 'Please input your last name!' }]}
                  style={{ marginBottom: 12 }}
                >
                  <Input className="rounded-xl h-10 w-full !text-xs !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none" />
                </Form.Item>
              </Col>

              {/* Email */}
              <Col xs={24} md={12}>
                <Form.Item
                  label={<span className="text-textnormal text-xs sm:text-sm font-medium">Email</span>}
                  name="email"
                  initialValue="sarah.johnson@gmail.com"
                  style={{ marginBottom: 12 }}
                > 
                  <Input
                    disabled
                    className="rounded-xl h-10 w-full !text-xs !bg-shadow !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none"
                  />
                </Form.Item>
              </Col>

              {/* Phone Number */}
              <Col xs={24} md={12}>
                <Form.Item
                  label={<span className="text-textnormal text-xs sm:text-sm font-medium">Phone Number</span>}
                  name="phoneNumber"
                  initialValue="+1 (555) 123-4567"
                  style={{ marginBottom: 12 }}
                >
                  <Input className="rounded-xl h-10 w-full !text-xs !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none" />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  )
}
