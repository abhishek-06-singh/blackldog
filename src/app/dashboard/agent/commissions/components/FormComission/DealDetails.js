'use client';

import { Input, DatePicker } from 'antd';
import dayjs from 'dayjs';
import {ChevronDown} from 'lucide-react'
export default function DealDetails() {
  return (
    <div className="bg-cardbg p-4 rounded-xl border border-bordercolor shadow-sm w-full max-w-screen-xl mx-auto">
      <h3 className="text-base font-semibold mb-4 text-textnormal">Deal Details</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Sale Value Input */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="saleValue" className="text-sm font-medium text-textheading">
            Sale Value<span className="text-red-500">*</span>
          </label>
          <Input
            id="saleValue"
            placeholder="Enter Sale Value"
            size="large"
            type="number"
            className="rounded-xl h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none"
          />
        </div>

        {/* Date Picker */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="saleDate" className="text-sm font-medium text-textheading">
            Date of Sale<span className="text-red-500">*</span>
          </label>
          <DatePicker
            id="saleDate"
            size="large"
            placeholder="Select Date"
               className="
             w-full h-10 rounded-xl
             [&_.ant-picker-input>input]:!text-textnormal
             [&_.ant-picker-input>input::placeholder]:!text-placeholder
             !bg-cardbg !border-bordercolor !focus:border-textnormal !ring-0
           "
          suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />}  
            format="YYYY-MM-DD"
            disabledDate={(current) => current && current > dayjs().endOf('day')}
          />
        </div>
      </div>
    </div>
  );
}
