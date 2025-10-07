
import DocumentFilters from './DocumentFilters'
import DocumentTable from './DocumentTable'

export default function DocumentsData() {
  return (
    <div className='p-2 md:p-6 lg:p-10  '>
    
     <DocumentFilters/>
     <DocumentTable/>

    </div>
  )
}