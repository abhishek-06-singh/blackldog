"use client";

import { Card, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Image from "next/image";
import handshake from '../../../../components/icons/Lightmode_icons/contact/handshake.svg'

export default function DealOpportunity() {
  return (
    <Card
      className="rounded-xl shadow-md border border-bordercolor w-full p-4"
      bodyStyle={{ padding: "1.5rem" }}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <p className="text-base font-semibold text-textheading">
          Deal & Opportunity
        </p>

        <Button
          type="primary"
          icon={<PlusOutlined />}
          className="w-full md:w-fit bg-buttonbg font-medium text-background rounded-xl px-4 py-2 flex items-center justify-center "
        >
          Create New Deal
        </Button>
      </div>

      {/* Empty State */}
      <div className="flex flex-col items-center justify-center text-center py-10">
        <div className="bg-orange-100 rounded-full p-4 flex items-center justify-center mb-4">
          <Image src={handshake} alt="handshake" className="w-10 h-10 text-black" />
        </div>
        <p className="text-textnormal text-sm sm:text-base max-w-sm">
          No active deals. Create one to convert this contact into a lead.
        </p>
      </div>
    </Card>
  );
}
