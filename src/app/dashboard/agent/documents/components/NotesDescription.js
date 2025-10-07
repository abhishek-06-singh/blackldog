'use client'
import React from "react"
import { Form, Input } from "antd"

const { TextArea } = Input

export default function NotesDescription() {
  return (
    <Form
      layout="vertical"
      className="w-full px-2 md:px-6"
    >
      {/* Notes/Description */}
      <Form.Item
        label={
          <span className="text-sm sm:text-base text-textnormal font-medium">
            Notes/Description{" "}
            <span className="text-gray-400 text-xs sm:text-sm">(Optional)</span>
          </span>
        }
        name="notes"
      >
        <TextArea
          placeholder="Enter here..."
          rows={4}
           className="rounded-xl text-xs sm:!text-sm h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none"
        />
      </Form.Item>
    </Form>
  )
}
