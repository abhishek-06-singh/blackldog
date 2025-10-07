'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Progressbar from '../Shared_AuthComponents/Progressbar'
import SetupHeading from '../Shared_AuthComponents/SignupSetupHeading'
import BackSubmit from '../Shared_AuthComponents/BackSubmit'
import UploadDoc from './UploadDoc'
import { uploadMultipleFiles } from '../../../../services/api'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export default function AgentDocForm() {
  const [files, setFiles] = useState({})
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const router = useRouter()
const documentTypeMapping = {
  'National ID (RUN)': 'NATIONAL_ID',
  'Real Estate License / Certification': 'REAL_ESTATE_LICENSE',
  'Proof of Address': 'ADDRESS_PROOF',
  'RUT (Tax Identification Number)': 'RUT_DOCUMENT',
  'Professional Liability Insurance': 'INSURANCE_CERTIFICATE',
};


const handleSubmit = async () => {
  const allFiles = Object.values(files).flat();
  if (allFiles.length === 0) {
    alert('Please upload at least one file');
    return;
  }
 setLoading(true);
  const filesInfo = [];
  Object.keys(files).forEach((sectionTitle) => {
    const documentType = documentTypeMapping[sectionTitle] || 'UNKNOWN';
    files[sectionTitle].forEach((file) => {
      filesInfo.push({
        documentType,
        category: 'DOCUMENT',
        description: `Uploaded ${file.name}`,
        relatedEntityId: 1,
      });
    });
  });

  try {
    const res = await uploadMultipleFiles(allFiles, filesInfo);
    if (res.success) {
      toast.success('Files uploaded successfully');
      router.push('/approvalform')
    } else {
      toast.error('Failed to upload files');
    }
  }catch (error) {
  const apiMessage =
    error?.response?.data?.message || 
    error?.message ||                 
    'An error occurred while uploading files'; 

  console.error('Error uploading files:', error);
  toast.error(apiMessage);
  router.push('/rejectform')
}
  finally{
    setLoading(false);
  }
};


  return (
    <motion.div
      className="flex-1 flex flex-col justify-center"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="max-w-4xl mx-auto my-10 p-1 md:p-2 lg:p-6  ">
        <div className="w-full  mb-6">
          <Progressbar no={2} progress={66.66} desc={'Document Submission'} />
        </div>
        <div className="w-full flex items-center  p-6  bg-cardbg border justify-center rounded-xl">
          <div className="w-full flex flex-col">
            <div className="w-full flex items-center justify-center my-4">
              <SetupHeading
                title={'Upload Your Verification Documents'}
                desc={
                  <>
                    Please upload the required documents below to verify your
                    professional identity. <br />
                     <span>
      This helps ensure platform credibility and regulatory
      compliance.
    </span>
                  </>
                }
              />
            </div>
            <UploadDoc files={files} errors={errors} setFiles={setFiles} setErrors={setErrors} />
            <BackSubmit
              back_link={'/agentsignup'}
              submitlink={handleSubmit}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
