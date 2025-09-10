import React from 'react'
import Navbar from '../../../components/minicomponents/Navbar'
import Heading from '../../../components/minicomponents/Heading'
import EnterprisePlanForm from '../components/EnterprisePlanForm'

export default function SubscriptionPage() {
  return (
 <div className="mt-0 w-full flex flex-col overflow-x-hidden">
         <Navbar />
   <div className='ml-10'>
     <Heading className='mt-6' title="Enterprise Plan Inquiry" subtitle={' Let’s create a custom plan that fits your agency’s unique needs.'}/>
   </div>
   <div className='p-10'>
   <EnterprisePlanForm />
   </div>
   </div>
  )
}