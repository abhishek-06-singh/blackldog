'use client'
import React from 'react'
import { Row, Col, Form, Input, Button, Upload, Avatar, Tag } from 'antd'
import { UploadOutlined, InfoCircleOutlined } from '@ant-design/icons'
import { Clock } from 'lucide-react'

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
              src="https://randomuser.me/api/portraits/women/44.jpg"
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
      <Row>
        <Col span={24}>
          <Form layout="vertical">
            <Row gutter={[16, 16]}>
              {/* First Name */}
              <Col xs={24} sm={24} md={12}>
                <Form.Item
                  label={<span className="text-textnormal">First Name *</span>}
                  name="firstName"
                  initialValue="Sarah"
                  rules={[{ message: 'Please input your first name!' }]}
                >
                  <Input className="rounded-xl h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none" />
                </Form.Item>
              </Col>

              {/* Last Name */}
              <Col xs={24} sm={24} md={12}>
                <Form.Item
                  label={<span className="text-textnormal">Last Name *</span>}
                  name="lastName"
                  initialValue="Sarah"
                  rules={[{ message: 'Please input your last name!' }]}
                >
                  <Input className="rounded-xl h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none" />
                </Form.Item>
              </Col>

              {/* Email */}
              <Col xs={24} sm={24} md={12}>
                <Form.Item
                  label={<span className="text-textnormal">Email</span>}
                  name="email"
                  initialValue="sarah.johnson@email.com"
                >
                  <Input
                    disabled
                    className="rounded-xl h-10 !bg-shadow !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none"
                  />
                </Form.Item>
              </Col>

              {/* Phone Number */}
              <Col xs={24} sm={24} md={12}>
                <Form.Item
                  label={<span className="text-textnormal">Phone Number</span>}
                  name="phoneNumber"
                  initialValue="+1 (555) 123-4567"
                >
                  <Input className="rounded-xl h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none" />
                </Form.Item>
              </Col>

              {/* Invited By */}
              <Col xs={24} sm={24} md={12}>
                <Form.Item
                  label={<span className="text-textnormal">Invited By</span>}
                  name="invitedBy"
                >
                  <div className="flex items-center gap-2 bg-shadow rounded-xl px-3 py-2 h-10">
                    <Avatar
                      size="small"
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="Invited By"
                    />
                    <span className="text-sm text-textnormal font-medium">SilverOak</span>
                    <Tag className="!bg-boxbg !text-textnormal !rounded-full px-2 py-0.5 text-xs border-none">
                      Agency
                    </Tag>
                  </div>
                </Form.Item>
              </Col>

              {/* Access Type */}
              <Col xs={24} sm={24} md={12}>
                <Form.Item
                  label={<span className="text-textnormal">Access Type</span>}
                  name="accessType"
                >
                  <div className="w-fit px-3 flex items-center gap-2 bg-shadow rounded-xl ">
                     <Clock className='w-4 h-4 text-textnormal'/>
                                <p className="text-textnormal font-medium text-xs md:text-sm ">Temporary Access ends in 3 days</p>
                  </div>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  )
}
