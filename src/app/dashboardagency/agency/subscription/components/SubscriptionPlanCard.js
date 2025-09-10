'use client';

import React from 'react';
import { Check } from 'lucide-react';
import { Button, ConfigProvider } from 'antd';

export default function SubscriptionPlanCard() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#EEB887', // custom theme color
          borderRadius: 12,
        },
        components: {
          Steps: {
            colorPrimary: '#EEB887',
            colorText: '#000',
            colorTextActive: '#EEB887',
          },
        },
      }}
    >
      <div className="bg-cardbg border border-bordercolor rounded-xl p-6 shadow-md w-full ">
        {/* Header */}
        <div className="flex flex-col justify-center md:flex-row md:justify-between items-start mb-4">
          <div>
            <h2 className="text-lg font-semibold text-textheading">Agency Plan</h2>
            <div className="text-2xl font-bold text-textnormal mt-1">
              $199
              <span className="text-sm font-normal text-textnormal"> / Month</span>
            </div>
            <p className="text-sm text-textnormal mt-1">
              Renews on <span className="font-medium text-textnormal">August 10, 2025</span>
            </p>
          </div>
          <div className="w-full flex flex-col-reverse md:flex-col md:items-end gap-2">
            <Button className="bg-buttonbg text-background px-4 py-3.5 text-sm rounded-md border-none">
              Upgrade Plan
            </Button>
            <div className="w-fit bg-green-500 text-white text-xs mt-2 font-medium px-2 py-0.5 rounded-full">
              ● Active
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-bordercolor my-6" />

        {/* Features */}
        <div>
          <h3 className="font-semibold text-textheading text-base mb-3">Key Features</h3>
          <ul className="space-y-2 text-sm text-textnormal">
            {[
              'Up to 10 users',
              'Access to all features',
              'Limited property listings (5 per user)',
              'Additional cost per extra user',
            ].map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                  <Check className="w-4 text-white" />
                </div>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ConfigProvider>
  );
}
