'use client';

import {
  Check,
  LucideMessageCircleMore,
  Mail,
  Phone,
} from 'lucide-react';
import React from 'react';
import Image from 'next/image';

const agentData = {
  name: 'Sarah Johnson',
  title: 'Agent',
  phone: '(555) 123-4567',
  email: 'sarah@prestigerealty.com',
  avatar:
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
  isVerified: true,
};

const ParentAgent = () => {
  return (
    <div className="w-full flex flex-col my-4">
      <h2 className="text-base font-semibold text-textheading mb-2">
        Your Parent Agent
      </h2>

      <div className="bg-cardbg shadow-md rounded-lg p-6 border border-bordercolor w-full">
        {/* Main container */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full gap-4">
          {/* LEFT: Agent Info */}
          <div className="flex flex-col md:flex-row items-start gap-4 w-full">
            <Image
              width={100}
              height={100}
              src={agentData.avatar}
              alt="Agent"
              className="w-16 h-16 rounded-full object-cover"
            />

            <div className="flex flex-col">
              {/* Name + Verified */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                <h4 className="font-semibold text-textheading text-lg">
                  {agentData.name}
                </h4>
                {agentData.isVerified && (
                  <span className="border border-green-500 text-green-700 text-xs font-medium px-2 py-0.5 rounded-full flex items-center gap-1">
                    <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </span>
                    Verified
                  </span>
                )}
              </div>

              {/* Title */}
              <p className="text-sm text-textnormal mt-1 font-medium mb-2">
                {agentData.title}
              </p>

              {/* Contact Info */}
              <div className="flex flex-col lg:flex-row lg:items-center gap-2 text-sm text-textnormal">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-textnormal" />
                  <span className="text-textnormal whitespace-nowrap">
                    {agentData.phone}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-textnormal" />
                  <span className="text-textnormal">{agentData.email}</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Message Button */}
          <div className="w-full lg:w-fit flex justify-start lg:justify-end">
            <button className="w-full lg:w-fit bg-buttonbg text-background text-sm px-4 py-2 rounded-md flex items-center justify-center lg:justify-start hover:bg-gray-800 transition">
              <LucideMessageCircleMore className="w-5 h-5 mr-2" />
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentAgent;
