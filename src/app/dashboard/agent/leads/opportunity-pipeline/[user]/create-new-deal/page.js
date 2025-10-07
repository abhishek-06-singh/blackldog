'use client'
import { Breadcrumb } from 'antd'
import NewDealPage from '../components/createnewdeal_components/NewDealPage'
import Navbar from '../../../../../components/minicomponents/Navbar'

export default function CreateNewDeal({ params }) {
  const { user } = params
  const decodedUser = decodeURIComponent(user)

  return (
     <div className="mt-0 w-full flex flex-col overflow-x-hidden">
    <Navbar/>
    <div className="p-2 md:p-6 lg:p-10 flex flex-col space-y-6">
      
      {/* Breadcrumb */}
      <Breadcrumb
        separator={<span className='text-textnormal'>{">"}</span>}
        items={[
          { title: <a href="/dashboard/agent/leads"><span className='text-textnormal font-thin'>Leads</span></a> },
          {
            title: (
              <a href={`/dashboard/agent/leads/opportunity-pipeline/${decodedUser}`}>
                <span className='text-textnormal font-thin'>{decodedUser}</span>
              </a>
            ),
          },
          {
            title: (
              <a href={`/dashboard/agent/leads/opportunity-pipeline/${decodedUser}`}>
                 <span className='text-textheading'>Create New Deal</span>,
              </a>
            ),
          },
         
        ]}
      />
      <NewDealPage/>
    </div>
    </div>
  )
}