'use client';

import { Select, Button } from 'antd';
import { ChevronDown } from 'lucide-react';
const { Option } = Select;

const contacts = [
  {
    id: 1,
    name: 'Michael Chen',
    email: 'michaelchen@gmail.com',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    role: 'Agent',
  },
  {
    id: 2,
    name: 'Michael Chen',
    email: 'michaelchen@gmail.com',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    role: 'Contact',
  },
  {
    id: 3,
    name: 'Jane Smith',
    email: 'janesmith@gmail.com',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    role: 'Lead',
  },
];

export default function ContactAssociation() {
  return (
    <div className="bg-cardbg p-4 rounded-xl border border-bordercolor   shadow-sm w-full max-w-screen-xl mx-auto">
      <h3 className="text-base font-semibold mb-4 text-textnormal">Contact / Lead Association</h3>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
        {/* Contact Select */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="contact" className="text-sm font-medium mb-2 text-textheading">
            Link to Lead or Contact<span className="text-textheading">*</span>
          </label>

          <Select
            id="contact"
            placeholder="Search Contacts..."
            showSearch
            optionFilterProp="label"
            dropdownClassName="bg-cardbg border border-bordercolor 
      [&_.ant-select-item-option-selected]:!bg-buttonbg 
      [&_.ant-select-item-option-selected]:!text-background 
      [&_.ant-select-item-option-active]:!bg-buttonbg 
      [&_.ant-select-item-option-active]:!text-background"
    
    className="w-full h-10 
      [&_.ant-select-selection-item]:!text-xs md:[&_.ant-select-selection-item]:!text-sm 
      [&_.ant-select-selector]:!bg-cardbg 
      [&_.ant-select-selector]:!rounded-xl 
      [&_.ant-select-selector]:!border-bordercolor 
      [&_.ant-select-selection-item]:!text-textnormal
      [&_.ant-select-selector]:!focus:border-textnormal 
      [&_.ant-select-selector]:!ring-0
      placeholder:!text-textplaceholder"
    
    suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />}
            size="large"
          >
            {contacts.map((contact) => (
              <Option
                key={contact.id}
                value={contact.email}
                label={contact.name}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <img
                      src={contact.avatar}
                      alt={contact.name}
                      className="w-6 h-6 rounded-full"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm text-textheading font-medium">{contact.name}</span>
                      <span className="text-xs text-textnormal">{contact.email}</span>
                    </div>
                  </div>
                  <span className="text-xs text-textplaceholder bg-gray-200 px-2 py-0.5 rounded-full">
                    {contact.role}
                  </span>
                </div>
              </Option>
            ))}
          </Select>
        </div>
      </div>

      {/* Add Contact Button */}
      <div className="mt-4">
        <Button type="default" className='bg-textheading font-medium text-background'>+ Add Contact</Button>
      </div>
    </div>
  );
}
