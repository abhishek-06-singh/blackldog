'use client'
import React, { useState } from 'react';
import { Breadcrumb } from 'antd';
import Heading from '../../../../components/minicomponents/Heading';
import AddDealScreen from './AddDealScreen';
import CreateNewDealPage from './CreateNewDealPage';

export default function CreateNewDeal() {
    const [open, setOpen] = useState(false)
  return (
    <div> 
      <div className="ml-10 mt-4 text-textheading">
        <Breadcrumb  

          separator=">"
          items={[
            {
              title: (
                <a className="text-textnormal" href="/dashboard/agent/deals/deal-history">
                  <span className="text-textnormal">Deal History</span>
                </a>
              ),
            },
            {
              title: (
                <a
                  className="text-primary font-bold"
                  href="/dashboard/agent/deals/deal-history"
                >
                  <span className="text-primary">Create New Deal</span>
                </a>
              ),
            },
          ]}
        />
      </div>
      <div className="ml-5 md:ml-10 mt-6 md:h-10 flex pr-5 flex-col justify-center md:pr-10 md:flex-row md:justify-between">
        <Heading title="Create New Deal" />

        <div className="flex flex-col md:flex-row gap-4">
          <button className="w-full mt-4 md:mt-0 md:w-fit bg-background  text-textnormal border border-bordercolor p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform">
            Cancel
          </button>
          <button
            className="w-full md:w-fit bg-buttonbg text-background p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform"
            onClick={() => setOpen(true)}
          >
            Save & Send Documents
          </button>
           <button
            className="w-full md:w-fit bg-buttonbg text-background p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform"
            onClick={() => setOpen(true)}
          >
            Save Lead
          </button>
        </div>
      </div>
      <div className="md:my-4">
        <CreateNewDealPage />
        
      </div>
      <AddDealScreen open={open} setOpen={setOpen} />
    </div>
  )
}