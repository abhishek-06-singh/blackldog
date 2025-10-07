import React, { useState } from 'react';
import { Upload, DatePicker, Button, message } from 'antd';
import { CalendarOutlined, CloudUploadOutlined } from '@ant-design/icons';
import upload from '../../../components/icons/Lightmode_icons/contact/upload_grey.svg'
import Image from 'next/image';

const { Dragger } = Upload;

const ProfileRole = () => {
  const [startDate, setStartDate] = useState(null);

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      message.error('Image must smaller than 5MB!');
    }
    return isJpgOrPng && isLt5M;
  };

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const uploadProps = {
    name: 'avatar',
    multiple: false,
    showUploadList: false,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    beforeUpload,
    onChange(info) {
      if (info.file.status === 'done') {
        message.success(`${info.file.name} uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} upload failed.`);
      }
    },
  };

  return (
    <div className="bg-cardbg p-6 rounded-lg shadow-sm border border-bordercolor">
      <h2 className="text-lg font-semibold text-textheading mb-6">Profile & Role</h2>
      
      <div className="space-y-6">
        {/* Profile Image Section */}
        <div>
          <label className="block text-sm font-medium text-textnormal mb-4">
            Profile Image
          </label>

          <Dragger
            {...uploadProps}
            className="!bg-input !border-bordercolor !rounded-xl"
          >
            <p className="flex items-center justify-center gap-1 mb-1">
              <Image src={upload} className="w-9 h-9 text-textnormal" />
            </p>
            <p className="text-sm md:text-base !text-textnormal">
              Drag and drop your files here, or
            </p>
            <p className="text-xs md:text-sm !text-textnormal mb-3">
              JPG, PNG only. Max 5MB.
            </p>
            <Button
              className="!bg-buttonbg !text-background border border-bordercolor font-medium !rounded-lg"
            >
              Browse Files
            </Button>
          </Dragger>
        </div>

        {/* Start Date Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-textnormal mb-2">
              Start Date
            </label>
            <DatePicker
              placeholder="Select Date"
              size="large"
               className="
                           w-full h-10 rounded-xl
                           [&_.ant-picker-input>input]:!text-xs md:!text-sm
                           [&_.ant-picker-input>input]:!text-textnormal
                           [&_.ant-picker-input>input::placeholder]:!text-placeholder
                           !bg-cardbg !border-bordercolor !focus:border-textnormal !ring-0
                         "
                         suffixIcon={<CalendarOutlined className="w-4 h-4 text-placeholder" />}
              onChange={handleDateChange}
              format="MM/DD/YYYY"
            />
          </div>
          {/* Empty space for responsive layout */}
          <div className="hidden sm:block"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileRole;
