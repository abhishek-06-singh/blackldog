'use client'
import React from "react"
import { Form, Input } from "antd"

const { TextArea } = Input

export default function NotesDescription() {
  return (<div className="w-full px-6">
    <div className="bg-cardbg w-full border border-bordercolor rounded-xl shadow-md p-4">
      <label className="block text-base font-semibold text-textnormal mb-2">
        Notes/Description{" "}
        <span className="text-sm text-textplaceholder font-normal">(Optional)</span>
      </label>
      <TextArea
        rows={4}
        placeholder="Enter here..."
        className="w-full border border-bordercolor rounded-lg p-3 bg-cardbg resize-none focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  </div>)
}
