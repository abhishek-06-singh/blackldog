'use client'

import { Form, Input, Upload, Button } from 'antd'
import { UploadOutlined, InboxOutlined } from '@ant-design/icons'
import { ChevronLeft, Plus } from 'lucide-react'
import Image from 'next/image'
import cloudupload from '../../../components/icons/Lightmode_icons/listing/cloudupload_orange.svg'
const { Dragger } = Upload

export default function MediaStepFour({ onBack }) {
  const [form] = Form.useForm()

  const uploadProps = {
    name: 'file',
    multiple: true,
    maxCount: 7,
    accept: '.jpg,.png,.pdf',
    beforeUpload: (file) => {
      const isAllowed = ['image/jpeg', 'image/png', 'application/pdf'].includes(
        file.type
      )
      if (!isAllowed) {
        alert('Only JPG, PNG, or PDF files are allowed!')
        return Upload.LIST_IGNORE
      }
      if (file.size / 1024 / 1024 > 5) {
        alert('File must be smaller than 5MB!')
        return Upload.LIST_IGNORE
      }
      return true
    },
  }

  return (
    <>
      <div className="p-6 bg-background rounded-xl shadow-sm border w-full">
        <h2 className="text-lg text-textheading font-semibold mb-1">
          Images & Media
        </h2>
        <p className="text-textnormal mb-6 text-sm">
          Upload images or videos to give a visual impression of the property.
        </p>

        <Form
          form={form}
          layout="vertical"
          requiredMark={false}
          className="space-y-4"
        >
          <Form.Item
            label={<span className='text-textheading font-semibold'>Property Title</span>}
            name="propertyTitle"
            className="text-textheading font-semibold"
          >
            <p className="text-textnormal mb-2 md:mb-1 text-xs  md:text-sm font-thin">
              Upload your RUN – Front and Back (JPG, PNG, PDF | Max 5MB per
              file)
            </p>
            <Dragger {...uploadProps} className="rounded-xl text-textnormal">
              <p className="flex flex-row items-center justify-center">
                <Image src={cloudupload} alt='cloudupload' className="w-auto" />
              </p>
              <p className="text-xs font-normal text-textnormal">
                Drag and drop your files here, or
              </p>
              <p className=" text-xs font-normal text-textnormal">
                JPG, PNG, PDF only. Max 5MB per file. Up to 7 images.
              </p>
              <button className=" mt-2 text-textheading text-xs font-medium border-2 border-bordercolor rounded-lg h-10 gap-3 px-3 ">
               <span className='flex flex-row gap-2 items-center justify-center'>
               <Plus className="w-4 h-4 text-textnormal" /> Upload Images
               </span> 
              </button>
            </Dragger>
          </Form.Item>

          <Form.Item
            label={<span className='text-textheading font-medium'>Video Link (Optional)</span>}
            name="videoLink"
            className="text-textheading "
          >
            <Input placeholder="Enter YouTube video URL"className="rounded-xl h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none" />
            <p className="text-textnormal text-sm mt-1 font-thin">
              Add a virtual tour or property video
            </p>
          </Form.Item>
        </Form>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-10 mb-20">
        <button
          className="font-medium border border-bordercolor text-textheading  rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform h-12 px-4"
          onClick={onBack}
        >
          <ChevronLeft className="w-5 h-5 text-textnormal" />
          Go back
        </button>
      </div>
    </>
  )
}
