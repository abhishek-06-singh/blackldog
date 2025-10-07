'use client'
import { Breadcrumb } from 'antd'
import Navbar from '../../../../components/minicomponents/Navbar'
import OpportunityContent from './components/OppurtunityContent'


export default function UserPage_Opportunity({ params }) {
  const { user } = params // dynamic segment
  const decodedUser = decodeURIComponent(user)

  return (
    <div className="mt-0 w-full flex flex-col overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      {/* AntD Breadcrumb with custom separator */}
      <div className="ml-2 md:ml-6 lg:ml-10 mt-4 text-textheading">
        <Breadcrumb  

          separator={<span className='text-textnormal'>{">"}</span>}
          items={[
            {
              title: (
                <a className="text-textnormal" href="/dashboard/agent/leads/opportunity-pipeline">
                  <span className='text-textheading'>Opportunity Pipeline</span>
                </a>
              ),
            },
            {
              title: (
                <a
                  className="text-textnormal font-bold"
                  href="/dashboard/agent/leads/opportunity-pipeline"

                >
                 <span className='text-textheading'>{decodedUser} Profile</span>  
                </a>
              ),
            },
          ]}
        />
      </div>
      <OpportunityContent user={decodedUser} />



</div>
  )
}
