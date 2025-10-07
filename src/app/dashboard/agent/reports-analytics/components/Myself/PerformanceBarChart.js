import React from 'react';
import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Bar } from 'recharts';

export default function PerformanceBarChart({ performanceData }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={performanceData}
        margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
      >
        {/* X-Axis with line visible */}
        <XAxis
          dataKey="name" 
          tick={{ fill: 'var(--color-textnormal)', fontSize: 12 }}
          axisLine={true}  // Show X-axis line
          tickLine={false}
        />

        {/* Y-Axis with custom ticks */}
        <YAxis 
          axisLine={false}
          tickLine={false}
          ticks={[0, 200, 400, 600, 800]}  // Custom ticks here
          tick={{ fill: 'var(--color-textnormal)', fontSize: 12 }}
        />

        {/* Tooltip with subtle style & no extra bar rendering */}
         <Tooltip
                cursor={{ fill: 'transparent' }}
                contentStyle={{
                  backgroundColor: 'var(--color-cardbg)', 
                  border: "1px solid var(--color-bordercolor)",
                  color: 'var(--color-textnormal)',
                }}/>

        {/* Bar Style */}
        <Bar
          dataKey="value"
          fill="#E4A267"
          barSize={40}
          radius={[6, 6, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
