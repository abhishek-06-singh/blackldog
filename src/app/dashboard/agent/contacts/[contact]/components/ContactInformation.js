"use client";

import { Card } from "antd";
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from "@ant-design/icons";

export default function ContactInformation() {
  return (
    <Card
      className="rounded-lg py-4 px-3 shadow-md border border-bordercolor w-full "
      bodyStyle={{ padding: "1.5rem" }}
    >
      {/* Header */}
      <p className="text-base font-semibold text-textheading mb-4">
        Contact Information
      </p>

      {/* Contact Details */}
      <div className="flex flex-col gap-3 text-sm sm:text-base text-textnormal">
        <div className="flex items-center gap-2 text-xs md:text-sm">
          <PhoneOutlined className=" text-textnormal" />
          <span>(555) 123-4567</span>
        </div>

        <div className="flex items-center gap-2 text-xs md:text-sm">
          <MailOutlined className="text-textnormal" />
          <span>sarah@prestigerealty.com</span>
        </div>

        <div className="flex items-center gap-2 text-xs md:text-sm">
          <EnvironmentOutlined className="text-textnormal" />
          <span>Austin, Texas</span>
        </div>
      </div>
    </Card>
  );
}
