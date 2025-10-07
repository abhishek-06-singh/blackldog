"use client"
import { Dropdown, Button } from "antd"
import { MoreOutlined } from "@ant-design/icons"

export default function DesktopDealsTable({
  currentItems,
  selected,
  allChecked,
  toggleSelectAll,
  toggleRow,
  getMenu,
  statusStyles,
}) {
  return (
    <table className="min-w-full text-left table-auto">
      <thead className="bg-cardbg text-textplaceholder text-sm font-thin">
        <tr>
          <th className="p-4">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-bordercolor"
              checked={allChecked}
              onChange={(e) => toggleSelectAll(e.target.checked)}
            />
          </th>
          <th className="p-4">Property</th>
          {/* Removed Sub-Agent and Lead columns */}
          <th className="p-4 whitespace-nowrap">Total Commission</th>
          <th className="p-4">Status</th>
          <th className="p-4 whitespace-nowrap">Last Updated</th>
          <th className="p-4 whitespace-nowrap">Source</th> 
        </tr>
      </thead>

      <tbody className="divide-y divide-bordercolor">
        {currentItems.map((item) => (
          <tr key={item.id} className="hover:bg-boxbg transition">
            {/* Checkbox */}
            <td className="p-4">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-bordercolor"
                checked={selected.includes(item.id)}
                onChange={() => toggleRow(item.id)}
              />
            </td>

            {/* Property */}
            <td className="pr-20 py-4 md:pr-16 md:p-4 whitespace-nowrap">
              <div className="flex items-center gap-3">
                <img
                  src={item.property.image}
                  className="w-14 h-10 rounded-md text-textnormal object-cover"
                  alt={item.property.name}
                />
                <div className="min-w-0 text-sm">
                  <div className="font-medium text-textnormal">{item.property.name}</div>
                  <div className="text-xs text-textplaceholder">
                    {item.property.priceRange}
                  </div>
                </div>
              </div>
            </td>

            {/* Total Commission */}
            <td className="p-4 text-sm font-medium text-textnormal">{item.totalCommission}</td>

            {/* Status */}
            <td className="p-4">
              <span
                className={`px-3 py-1 text-xs rounded-full font-medium ${statusStyles[item.status]}`}
              >
                {item.status}
              </span>
            </td>

            {/* Last Updated */}
            <td className="p-4 text-textnormal text-sm">{item.lastUpdated}</td>

            {/* Source */}
            <td className="p-4 text-textnormal  text-sm whitespace-nowrap"><span className="rounded-full border border-bordercolor p-1 px-2">{item.source}</span></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
