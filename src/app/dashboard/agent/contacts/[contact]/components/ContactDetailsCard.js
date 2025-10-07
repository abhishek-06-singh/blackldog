"use client";

import { Card, Avatar, Tag, Button } from "antd";
import { MailOutlined } from "@ant-design/icons";

export default function ContactCard({ contact }) {
  return (
    <Card
      className="rounded-2xl shadow-md border border-bordercolor py-6 px-4 w-full"
      bodyStyle={{ padding: "1rem" }}
    >
      <div className="flex flex-col md:flex-row md:justify-between gap-6">
        {/* Left section: Avatar + Info */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 md:gap-6 w-full">
          {/* Avatar */}
          <div className="flex justify-center sm:justify-start">
            <Avatar
              size={70}
              src="https://randomuser.me/api/portraits/women/44.jpg" // Example image URL
            />
          </div>

          {/* Info */}
          <div className="flex flex-col space-y-1 text-center sm:text-left w-full">
            <span className="text-xl font-bold text-textheading">
              {contact || "Sarah Johnson"}
            </span>
            <span className="text-sm text-textnormal">External Contact</span>

            {/* Tags */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 pt-1">
              <Tag className="bg-cardbg rounded-md px-2 py-0.5 text-textnormal font-medium border border-bordercolor">
                VIP
              </Tag>
              <Tag className="bg-cardbg rounded-md px-2 py-0.5 text-textnormal font-medium border border-bordercolor">
                Potential Collaborator
              </Tag>
            </div>

            {/* Last Interaction */}
            <span className="text-xs text-textnormal pt-2">
              Last Interaction :{" "}
              <span className="text-primary font-medium">
                Jan 12, 2020 at 2:30 PM
              </span>
            </span>
          </div>
        </div>

        {/* Right section: Button */}
        <div className="flex justify-center md:justify-end mt-4 md:mt-0">
          <Button
            type="primary"
            icon={<MailOutlined className="text-background" />}
            className="w-full font-medium md:w-fit bg-buttonbg rounded-xl flex items-center px-5 py-2 text-sm text-background"
          >
            Email
          </Button>
        </div>
      </div>
    </Card>
  );
}
