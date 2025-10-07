import { Form, DatePicker, Upload, Button } from "antd";
import { UploadOutlined, InboxOutlined, CalendarOutlined } from "@ant-design/icons";
import Image from "next/image";
import upload from '../../../../components/icons/Lightmode_icons/listing/cloudupload_orange.svg'

const { Dragger } = Upload;

export default function TrackingDocuments() {
  const [form] = Form.useForm();

  // Upload props (restrictions: JPG/PNG, max 5MB, max 7 files)
  const uploadProps = {
    name: "file",
    multiple: true,
    maxCount: 7,
    accept: ".jpg,.jpeg,.png",
    beforeUpload: (file) => {
      const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
        return Upload.LIST_IGNORE; // reject invalid files
      }
      const isLt5M = file.size / 1024 / 1024 < 5;
      if (!isLt5M) {
        return Upload.LIST_IGNORE; // reject large files
      }
      return true;
    },
  };

  return (
    <div className="py-2 px-4 rounded-xl border border-bordercolor bg-cardbg shadow-md">
      <h1 className="text-md font-bold text-primary mb-4 mt-2">
        Tracking & Documents
      </h1>

      <Form
        form={form}
        layout="vertical"
        requiredMark={false}
        className="space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Date Lead Added */}
          <Form.Item
            label={
              <span className="text-textheading font-medium">
                Date Lead Added*
              </span>
            }
            name="dateLeadAdded"
            rules={[{ required: true, message: "Please select date" }]}
          >
           <DatePicker
  className="
    w-full h-10 rounded-xl
    [&_.ant-picker-input>input]:!text-textnormal
    [&_.ant-picker-input>input::placeholder]:!text-placeholder
    !bg-cardbg !border-bordercolor !focus:border-textnormal !ring-0
  "
  placeholder="Select Date"
  suffixIcon={<CalendarOutlined className="w-4 h-4 text-placeholder" />}
/>

          </Form.Item>

          {/* Follow-Up Reminder */}
          <Form.Item
            label={
              <span className="text-textheading font-medium">
                Follow-Up Reminder*
              </span>
            }
            name="followUpReminder"
            rules={[{ required: true, message: "Please select follow-up date" }]}
          >
            <DatePicker
  className="
    w-full h-10 rounded-xl
    [&_.ant-picker-input>input]:!text-textnormal
    [&_.ant-picker-input>input::placeholder]:!text-placeholder
    !bg-cardbg !border-bordercolor !focus:border-textnormal !ring-0
  "
  placeholder="Select Date"
  suffixIcon={<CalendarOutlined className="w-4 h-4 text-placeholder" />}
/>

          </Form.Item>
        </div>

        {/* Upload Documents */}
        <Form.Item
          label={
            <span className="text-textheading font-medium">
              Upload Documents
            </span>
          }
          name="documents"
        >
          <Dragger
            {...uploadProps}
            className="!bg-input !border-bordercolor !rounded-xl"
          >
            <p className="flex items-center justify-center gap-2">
              <Image src={upload} alt="upload icon" width={20} height={20} className="w-8 h-8"/>
            </p>
            <p className="text-sm md:text-base !text-textnormal">
              Drag and drop your files here, or
            </p>
            <p className="text-xs md:text-sm !text-textnormal mb-3">
              JPG, PNG only. Max 5MB per image. Up to 7 images.
            </p>
            <Button
             
              className="!bg-buttonbg !text-background border border-bordercolor font-medium !rounded-lg"
            >
              Browse Files
            </Button>
          </Dragger>
        </Form.Item>
      </Form>
    </div>
  );
}
