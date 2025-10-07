import StatsCardContact from './StatsCardContact'
import ContactFilters from './ContactFilters'
import ContactTable from './ContactTable'

export default function ContactsData() {
  return (
    <div className='p-2  md:p-6 lg:p-10  '>
        <StatsCardContact/>
     <ContactFilters/>
     <ContactTable/>
     
    </div>
  )
}