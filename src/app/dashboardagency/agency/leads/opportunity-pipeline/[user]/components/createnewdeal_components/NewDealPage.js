import Heading from '../../../../../../components/minicomponents/Heading'
import NewDealCard from './NewDealCard'


export default function NewDealPage() { 
  return (
    <div className='w-full p-2 md:px-6 space-y-6'>
      
    <div className="md:ml-10 my-2 md:my-4 md:h-10 flex md:pr-10 flex-col justify-center md:flex-row md:justify-between">
                    <Heading title="Leads Details" />
    
                    <div className="flex mt-2 md:mt-0 flex-col md:flex-row gap-4">
                      <button className="w-full md:w-fit bg-background text-textnormal border border-bordercolor p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform">
                        Cancel
                      </button>
                      <button className="w-full md:w-fit bg-buttonbg text-background p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform">
                       Save & Send Documents
                      </button>
                        <button className="w-full md:w-fit bg-buttonbg text-background p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform">
                       Save Deal
                      </button>
                    </div>
                  </div>
            <NewDealCard/>

    </div>
  )
}