'use client'
import React, { useState } from 'react'
import Progressbar from '../Shared_AuthComponents/Progressbar'
import SetupHeading from '../Shared_AuthComponents/SignupSetupHeading'
import BackSubmit from '../Shared_AuthComponents/BackSubmit'
import AgencyUploadDoc from './AgencyUploadDoc'
import { motion } from 'framer-motion'
import { uploadMultipleFiles } from '../../../../services/api'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export default function AgencyDocForm() {
  const [files, setFiles] = useState({})
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const router = useRouter()

  const documentTypeMapping = {
  'Company Registration Certificate': 'COMPANY_REGISTRATION',
  "Legal Representative's National ID (RUN)": 'NATIONAL_ID',
  'Company Tax ID (RUT)': 'RUT_DOCUMENT',
  'Proof of Tax Compliance': 'TAX_COMPLIANCE',
  'Proof of Office Address': 'ADDRESS_PROOF',
};

  const handleSubmit = async () => {
    const allFiles = Object.values(files).flat()
    if (allFiles.length === 0) {
      alert('Please upload at least one file')
      return
    }

    setLoading(true)

    const filesInfo = []
    Object.keys(files).forEach((sectionTitle) => {
      const documentType = documentTypeMapping[sectionTitle] || 'UNKNOWN'
      files[sectionTitle].forEach((file) => {
        filesInfo.push({
          documentType,
          category: 'DOCUMENT',
          description: `Uploaded ${file.name}`,
          relatedEntityId: 1,
        })
      })
    })

    try {
      const res = await uploadMultipleFiles(allFiles, filesInfo)
      if (res.success) {
        alert('Files uploaded successfully')
        router.push('/approvalform')
      } else {
        alert('Failed to upload files')
      }
    } catch (error) {
      const apiMessage =
        error?.response?.data?.message ||
        error?.message ||
        'An error occurred while uploading files'

      console.error('Error uploading files:', error)
      toast.error(apiMessage)
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div
      className="  space-y-6 flex-1"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="max-w-4xl mx-auto my-10 p-1 md:p-2 lg:p-6  ">
        <div className="w-full mb-6">
          <Progressbar no={2} progress={66.66} desc={'Document Submission'} />
        </div>
        <div className="w-full flex items-center p-1 md:p-2 lg:p-6  border justify-center rounded-xl">
          <div className="w-full flex flex-col">
            <div className="w-full flex items-center justify-center my-4  md:px-20">
              <SetupHeading
                title={'Upload Agency Verification Documents'}
                desc={
                  'Please upload the required documents below to verify your real estate brokerage. This ensures your agency is authorized to operate on the platform and receive commissions.'
                }
              />
            </div>
            <AgencyUploadDoc files={files} setFiles={setFiles} errors={errors} setErrors={setErrors} />
            <BackSubmit
              back_link={'/agentagencysignup'}
              submitlink={handleSubmit}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
