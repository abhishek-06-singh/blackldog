'use client'
import React from 'react'
import { Card, Typography, List, Button, Space, Table } from 'antd'
import { FileTextOutlined, EditOutlined, MoreOutlined } from '@ant-design/icons'
import { ConfigProvider } from 'antd'
import Image from 'next/image'
import pdf_light from '../../../../../components/icons/Lightmode_icons/leads-light/pdf_black.svg'
import pdf_dark from '../../../../../components/icons/Darkmode_icons/leads-dark/white_pdf.svg'
import signature_dark from '../../../../../components/icons/Darkmode_icons/leads-dark/signature-dark.svg'
import signature_light from '../../../../../components/icons/Lightmode_icons/leads-light/signature-light.svg'

const { Text } = Typography

const documentsList = [
  { id: 1, title: 'Purchase Agreement', time: '2 days ago' },
  { id: 2, title: 'Purchase Agreement', time: '2 days ago' },
]

const DocumentSignature = () => {
  return (
    <div className="bg-cardbg dark:bg-cardbg border border-bordercolor rounded-xl p-4 w-full ">
      {/* Header */}
      <h3 className="text-lg font-semibold text-textheading mb-4">
        Document Signatures
      </h3>

      {/* Document List */}
      <div className="space-y-3 mb-4">
        {documentsList.map((doc) => (
          <div
            key={doc.id}
            className="flex items-center justify-between bg-cardbg border border-bordercolor p-3 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <Image
                src={pdf_light}
                alt="pdf"
                width={20}
                height={20}
                className='block dark:hidden'
              />
              <Image
                src={pdf_dark}
                alt="pdf"
                width={20}
                height={20}
                className='hidden dark:block'
              />
              <div>
                <p className="text-sm font-medium text-textheading mb-0">{doc.title}</p>
                <p className="text-xs text-subtext">{doc.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <Button
        type="primary"
        className="bg-buttonbg text-background w-full h-10 rounded-lg flex items-center justify-center gap-2 text-sm font-medium"
        icon={
          <>
          <Image
            src={signature_light}
            alt="signature"
            width={16}
            height={16}
            className='block dark:hidden'
          />
           <Image
            src={signature_dark}
            alt="signature"
            width={16}
            height={16}
            className='hidden dark:block'
          />
          </>
        }
      >
        Send For Signature
      </Button>
    </div>
  )
}

export default DocumentSignature