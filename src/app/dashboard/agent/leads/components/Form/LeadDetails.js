import { useState } from "react";
import { Form, Input, Select } from "antd";
import { MailOutlined } from "@ant-design/icons";

const { Option } = Select;

export default function LeadDetails() {
  const [countryCode, setCountryCode] = useState("+1");
  const [form] = Form.useForm();

  return (
    <div className="py-2 px-4 rounded-xl border border-bordercolor bg-cardbg shadow-md">
      <h1 className="text-md font-bold text-primary mb-4 mt-2">Lead Details</h1>

      <Form
        form={form}
        layout="vertical"
        requiredMark={false}
        className="space-y-4"
        initialValues={{ countryCode: "+1" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Lead Name */}
          <Form.Item
            label={<span className="text-sm font-medium text-textheading ">Lead Name / Contact Name*</span>}
            name="leadName"
            className="!text-textheading "
            rules={[{ message: "Please enter lead/contact name" }]}
          >
            <Input  className="!text-xs md:!text-sm rounded-xl placeholder:!text-textplaceholder h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none" placeholder="Enter Lead Name / Contact name" />
          </Form.Item>

          {/* Company Name */}
          <Form.Item
            label={
              <>
                <span className="text-sm  font-medium text-textheading ">
                  Company Name{" "}
                  <span style={{ color: "#999" }}>(Optional)</span>
                </span>
              </>
            }
            name="companyName"
            className="text-textheading "
          >
            <Input  className="!text-xs md:!text-sm  rounded-xl placeholder:!text-textplaceholder h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none" placeholder="Enter Company Name" />
          </Form.Item>

          {/* Email */}
          <Form.Item
            label={<span className="text-sm font-medium text-textheading ">Email*</span>}
            name="email"
            className="text-textheading "
            rules={[{ message: "Please enter email" }]}
          >
            <Input
               className="!text-xs md:!text-sm  rounded-xl placeholder:!text-textplaceholder h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none"
              placeholder="Enter Email"
              prefix={<MailOutlined className="mr-2" />}
              type="email"
            />
          </Form.Item>

          {/* Phone Number */}
          <Form.Item
            label={<span className="text-sm font-medium text-textheading ">Phone Number</span>}
            name="phone"
            className="text-textheading "
          >
            <Input
               className="!text-xs md:!text-sm  rounded-xl placeholder:!text-textplaceholder h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none"
            //   addonBefore={
            //     <Select
            //       value={countryCode}
            //       onChange={(val) => setCountryCode(val)}
            //       style={{ width: 100 }}
            //     >
            //       <Option value="+1">🇺🇸 +1</Option>
            //       <Option value="+44">🇬🇧 +44</Option>
            //       <Option value="+91">🇮🇳 +91</Option>
            //     </Select>
            //   }
              placeholder="(555) 000-0000"
            />
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}
