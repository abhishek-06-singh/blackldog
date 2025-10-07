import React, { useState } from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

const AdditionalInfo = () => {
  const [notes, setNotes] = useState('');
  const [location, setLocation] = useState('');

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className="bg-cardbg p-4 sm:p-6 rounded-lg border border-bordercolor w-full  mx-auto">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-textheading">
          Additional Info 
          <span className="text-textnormal text-sm font-normal ml-1">(Optional)</span>
        </h2>
      </div>
      
      <div className="space-y-6">
        {/* Notes Section */}
        <div className="w-full">
          <label className="block text-sm font-medium text-textnormal mb-2">
            Notes
          </label>
          <TextArea
            placeholder="Add any additional notes about this contact"
            value={notes}
            onChange={handleNotesChange}
            rows={4}
         className="rounded-xl text-xs sm:!text-sm h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none"
            style={{
              fontSize: '14px',
              lineHeight: '1.5'
            }}
          />
        </div>

        {/* Location/Region Section */}
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="w-full">
              <label className="block text-sm font-medium text-textnormal mb-2">
                Location/Region
              </label>
              <Input
                placeholder="Enter Location/Region"
                value={location}
                onChange={handleLocationChange}
                size="large"
               className="rounded-xl text-xs sm:!text-sm h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none"/>
            </div>
            {/* Empty column for larger screens */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;