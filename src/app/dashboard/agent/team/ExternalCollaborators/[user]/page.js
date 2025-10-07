'use client'
import { Breadcrumb } from 'antd'
import Navbar from '../../../../components/minicomponents/Navbar'
import ExternalCollaboratorsTabs from './ExternalCollaboratorsTabs'
import AgentCardExternal from './components/AgentCardExternal'
export default function ExternalCollaboratorPage({ params }) {
  const { user } = params 
  const decodedUser = decodeURIComponent(user)

  return (
    <div className="mt-0 w-full flex flex-col overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      {/* AntD Breadcrumb with custom separator */}
      <div className="ml-10 mt-4">
        <Breadcrumb
          separator={<span className='text-textnormal'>{'>'}</span>}
          items={[
            {
              title: (
                <a className="text-textnormal" href="/dashboard/agent/team">
                  <span className='text-textnormal'>Team</span>
                </a>
              ),
            },
            {
              title: (
                <a
                  className="text-textnormal font-bold"
                  href="/dashboard/agent/team"
                >
                  <span className='text-textnormal'>{decodedUser}</span>
                </a>
              ),
            },
          ]}
        />
      </div>

      <div className="ml-2 md:ml-6 lg:ml-10 mt-4 ">
        <AgentCardExternal />
      </div>
      <div className="ml-2 md:ml-6 lg:ml-10 mr-2 md:mr-6 lg:mr-10 my-4 ">
        <ExternalCollaboratorsTabs decodedUser={decodedUser} />
      </div>
    </div>
  )
}
