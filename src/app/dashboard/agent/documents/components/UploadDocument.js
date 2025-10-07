import { Upload } from 'lucide-react'
import Heading from '../../../components/minicomponents/Heading'
import UploadPage from './UploadPage'


export default function UploadDocument() {
  return (
   <>
   <div className="ml-2 md:ml-6 lg:ml-10 mt-6 md:h-10 flex pr-2 md:pr-6 lg:pr-10 flex-col md:flex-row md:justify-between">
                
                <Heading title="Add New Document" subtitle="Upload new documents, request signatures, and organize your files." />

                <div className="w-full md:w-fit flex flex-col md:flex-row gap-4">
                  <button className="bg-background mt-1 md:mt-0 text-textnormal border border-bordercolor p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform">
                   Cancel
                  </button>
                  <button
                    className="bg-buttonbg font-medium text-background p-2 rounded-lg flex text-xs sm:text-sm justify-center items-center gap-2 hover:scale-95 transition-transform"
                    onClick={() => setOpen(true)}
                  >
                     Save Contact
                  </button>
                </div>
              </div>
              <div className="my-4">
               <UploadPage/>
              
              </div>
   </>
  )
}