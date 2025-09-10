import StatsCardContact from './StatsCardContact'
import ContactFilters from './ContactFilters'
import ContactTable from './ContactTable'

export default function ContactsData() {
  return (
    <div className='p-6 md:p-10  '>
        <StatsCardContact/>
     <ContactFilters/>
     <ContactTable/>
     
    </div>
  )
}