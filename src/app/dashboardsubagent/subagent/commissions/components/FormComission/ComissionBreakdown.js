'use client';

import { useState } from "react";
import { Input, Select, Button, Avatar, Radio } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import {ChevronDown} from 'lucide-react'

const { Option } = Select;

export default function CommissionDistribution() {
  const [rows, setRows] = useState([
    {
      name: "Michael Chen",
      role: "You",
      split: 60,
      amount: 9000,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sarah Johnson",
      role: "Lead Agent",
      split: 30,
      amount: 4000,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    { name: "", role: "", split: "", amount: "" },
  ]);

  const [commissionType, setCommissionType] = useState("fixed");

  const handleChange = (index, field, value) => {
    const updated = [...rows];
    updated[index][field] = value;
    if (field === "split") {
      const totalAmount = 15000;
      updated[index].amount = ((value / 100) * totalAmount).toFixed(0);
    }
    setRows(updated);
  };

  const handleAddRow = () => {
    setRows([...rows, { name: "", role: "", split: "", amount: "" }]);
  };

  const handleDelete = (index) => {
    const updated = rows.filter((_, i) => i !== index);
    setRows(updated);
  };

  const totalPercentage = rows.reduce(
    (sum, row) => sum + Number(row.split || 0),
    0
  );

  const totalAmount = rows.reduce(
    (sum, row) => sum + Number(row.amount || 0),
    0
  );

  return (
    <div className="bg-cardbg px-4 pt-4 pb-6 rounded-xl border border-bordercolor shadow-md w-full mx-auto max-w-screen-xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
        <h3 className="text-lg font-semibold text-textnormal">Commission Breakdown</h3>
        <div className="flex flex-wrap gap-2">
          <Button type="default" icon={<PlusOutlined />}>
            Add New Contact
          </Button>
          <Button type="primary" onClick={handleAddRow}>+ Add Agent</Button>
        </div>
      </div>

      {/* Commission Type */}
      <div className="mb-6 text-textnormal">
        <Radio.Group
          value={commissionType}
          onChange={(e) => setCommissionType(e.target.value)}
          className="space-x-4 text-textnormal"
        >
          <Radio className="text-textnormal" value="fixed">Fixed Amount</Radio>
          <Radio className="text-textnormal" value="percentage">Percentage of Property Value</Radio>
        </Radio.Group>
      </div>

      {/* Table */}
           <div className="w-full rounded-xl overflow-x-auto">
  <table
    className="min-w-full table-auto text-left border border-bordercolor rounded-xl"
    style={{
      borderCollapse: "separate",
      borderSpacing: 0,
      tableLayout: "auto",
    }}
  >
    <thead className="bg-subcardbg text-textnormal text-sm font-medium">
      <tr>
        <th className="p-4 whitespace-nowrap">Name</th>
        <th className="p-4 whitespace-nowrap">Role</th>
        <th className="p-4 whitespace-nowrap">Split (%)</th>
        <th className="p-4 whitespace-nowrap">Amount</th>
        <th className="p-4"></th>
      </tr>
    </thead>
    <tbody>
      {rows.map((row, index) => (
        <tr key={index} className="border-b border-bordercolor last:border-none">
          {/* Name */}
          <td className="p-4 whitespace-nowrap">
            <div className="flex items-center space-x-3 min-w-[220px]">
              {row.avatar && <Avatar size={32} src={row.avatar} />}
              <Select
                placeholder="Search for Agent/Contact"
                value={row.name || undefined}
                onChange={(val) => handleChange(index, "name", val)}
                className="w-full h-10 min-w-[160px] [&_.ant-select-selector]:!bg-input [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
                dropdownClassName="bg-input border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
                suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />}
              >
                <Option value="Michael Chen">Michael Chen</Option>
                <Option value="Sarah Johnson">Sarah Johnson</Option>
              </Select>
            </div>
          </td>

          {/* Role */}
          <td className="p-4 whitespace-nowrap min-w-[150px]">
            <Select
              placeholder="Select Role"
              value={row.role || undefined}
              onChange={(val) => handleChange(index, "role", val)}
              className="w-full h-10 [&_.ant-select-selector]:!bg-input [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
              dropdownClassName="bg-input border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
              suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />}
            >
              <Option value="You">You</Option>
              <Option value="Lead Agent">Lead Agent</Option>
            </Select>
          </td>

          {/* Split */}
          <td className="p-4 whitespace-nowrap min-w-[120px]">
            <Input
              type="number"
              placeholder="Enter Commission"
              value={row.split}
              onChange={(e) => handleChange(index, "split", e.target.value)}
              className="rounded-xl h-10 !bg-input !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none"
            />
          </td>

          {/* Amount */}
          <td className="p-4 whitespace-nowrap min-w-[140px]">
            <Input
              placeholder="Enter Amount"
              value={row.amount ? `$${Number(row.amount).toLocaleString()}` : ""}
              readOnly
              className="rounded-xl h-10 !bg-input !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none"
            />
          </td>

          {/* Delete */}
          <td className="p-4 text-center">
            <Button
              type="text"
              icon={<DeleteOutlined className="text-textnormal" />}
              onClick={() => handleDelete(index)}
              size="small"
              style={{ padding: 0 }}
            />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      {/* Footer */}
      <div className="mt-6">
        <div className="flex justify-between mb-2 text-sm text-textnormal">
          <span>Total Percentage</span>
          <span>{totalPercentage}%</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full mb-3">
          <div
            className="h-2 bg-buttonbg rounded-full"
            style={{ width: `${totalPercentage}%` }}
          />
        </div>
        <div className="flex justify-between font-semibold text-textheading">
          <span>Total Amount</span>
          <span>${totalAmount.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
