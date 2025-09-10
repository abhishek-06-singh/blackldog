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
    <div className="p-6 flex flex-col space-y-6">
      
      {/* Breadcrumb */}
      <Breadcrumb
        separator=">"
        items={[
          { title: <a href="/dashboardindividualagent/subagentindividualagent/leads"><span className='text-textnormal'>Leads</span></a> },
          {
            title: (
              <a href={`/dashboardindividualagent/subagentindividualagent/leads/opportunity-pipeline/${decodedUser}`}>
                <span className='text-textheading'>{decodedUser}</span>
              </a>
            ),
          },
          <span className='text-textnormal'>Create New Deal</span>,
        ]}
      />
      <NewDealPage/>
    </div>
    </div>
  )
}