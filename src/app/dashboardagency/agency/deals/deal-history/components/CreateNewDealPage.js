import Commission_Deals from './Commission_Deals';
import Documents_SectionDeals from './Document_SectionDeals';
import InternalNotes_Deals from './InternalNotes_Deals';
import { ConfigProvider } from 'antd';
import DealContacts from './DealContacts';
import DealInformationForm from './DealInformationForm';


export default function CreateNewDealPage() {
  return (
     <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#EEB887', // custom theme color
          borderRadius: 12,
        },
        components: {
          Steps: {
            colorPrimary: '#EEB887',
            colorText: '#000',
            colorTextActive: '#EEB887',
          },
        },
      }}
    >
    <div className='p-2 md:p-6 space-y-6'>
      <DealContacts/>
      <DealInformationForm/>
      <Commission_Deals />
        <Documents_SectionDeals />
        <InternalNotes_Deals />
    </div>
    </ConfigProvider>
  );
}