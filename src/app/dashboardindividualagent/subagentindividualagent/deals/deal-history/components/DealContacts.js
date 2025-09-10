import React from 'react';
import { UserOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import { Select, Button, Avatar } from 'antd';
import { ChevronDown } from 'lucide-react';

const contacts = [
  {
    id: 1,
    name: 'Michael Chen',
    role: 'Sub-Agent',
    phone: '(555) 123-4567',
    email: 'sarah@prestigerealty.com',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Sub-Agent',
    phone: '(555) 123-4567',
    email: 'sarah@prestigerealty.com',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
];

const DealContacts = () => {
  return (
    <div className="bg-cardbg rounded-xl border border-bordercolor p-4 sm:p-6 space-y-6">
      <h3 className="text-lg font-semibold text-primary mb-6">Who is this deal with?</h3>

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        <div className='w-full lg:w-7/12'>
        <label className="block text-sm font-medium text-primary mb-1">
    Select Lead / Contact
  </label>
        <Select placeholder="Select Lead / Contact"   dropdownClassName="bg-cardbg border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
            className=" w-full sm:w-1/2 md:w-full h-12 [&_.ant-select-selector]:!bg-cardbg [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
            suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />}>
          <Select.Option value="contact1">Michael Chen</Select.Option>
          <Select.Option value="contact2">Sarah Lin</Select.Option>
        </Select>
        </div>

        <Button className="w-full sm:w-auto border border-bordercolor"
         style={{ paddingTop: '20px', paddingBottom: '20px',borderRadius: '0.75rem'  }} >
          + Add New Contact
        </Button>
      </div>

      <div>
        {contacts.map((contact, index) => {
          // Determine classes for first and last contact items
          const roundedClasses = 
            index === 0
              ? 'rounded-t-xl'
              : index === contacts.length - 1
              ? 'rounded-b-xl'
              : '';

          return (
            <div
              key={contact.id}
              className={`flex flex-col lg:flex-row sm:items-center justify-between border border-bordercolor p-4 ${roundedClasses}`}
            >
              <div className="flex items-center flex-col md:flex-row md:items-start gap-4">
                <Avatar src={contact.avatar} size={48} icon={<UserOutlined />} />
                <div>
                  <p className="font-semibold text-sm md:text-lg text-primary">{contact.name}</p>
                  <p className="text-xs md:text-sm text-textnormal">{contact.role}</p>
                  <div className="text-xs md:text-sm text-textnormal mt-1 flex flex-col gap-1">
                    <div className="flex items-center gap-1">
                      <PhoneOutlined className="text-xs text-textnormal" /> {contact.phone}
                    </div>
                    <div className="flex items-center gap-1">
                      <MailOutlined className="text-xs text-textnormal" /> {contact.email}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 sm:mt-0">
                <Button className= 'bg-cardbg border-none hover:text-buttonbg text-textnormal'>View Full Details</Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DealContacts;
