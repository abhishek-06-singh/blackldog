'use client'

import React from 'react'
import LeftColumn from './LeftColumn'
import RightColumn from './RightColumn'
import Heading from '../../../../../components/minicomponents/Heading'
import { EditIcon, Plus, Trash } from 'lucide-react'


const OpportunityContent = ({user}) => {
  return (
    <>
     <div className="ml-2 md:ml-6 lg:ml-10 my-8 md:h-10 flex pr-2 md:pr-6 lg:pr-10 flex-col justify-center md:flex-row md:justify-between">
                    <Heading title="Leads Details" />
    
                    <div className="flex flex-col my-4 md:my-0 md:flex-row gap-4">
                      <button className="bg-background text-textnormal border border-bordercolor font-medium p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform">
                        <EditIcon className="w-4 h-4" />
                        Edit Lead
                      </button>
                      <button className="whitespace-nowrap bg-buttonbg text-background p-2 rounded-lg font-medium flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform">
                       <Trash className="w-4 h-4" /> 
                       Delete Lead    
                      </button>
                    </div>
                  </div>
    <div className="flex flex-col lg:flex-row w-full gap-6 px-2 md:px-6 lg:px-10 py-4">
     <LeftColumn user={user}  />
      <RightColumn />

    </div>
    </>
  )
}

export default OpportunityContent
