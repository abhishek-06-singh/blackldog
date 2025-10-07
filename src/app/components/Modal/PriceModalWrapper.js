// Modals/PriceModalWrapper.tsx
import { Modal } from 'antd'
import React from 'react'
import Pricing_Modal from '../../Modal_Components/PriceModal_components/PriceModal'

export default function PriceModalWrapper({
  isModalOpen,
  showModal,
  onPlanSelect,
}) {
  return (
    <Modal
      open={isModalOpen}
      footer={null}
      centered
      width={850}
      closable={false}
      bodyStyle={{ background: 'transparent', boxShadow: 'none' }} 
       
    >
      <Pricing_Modal showModal={showModal} onPlanSelect={onPlanSelect} />
    </Modal>
  )
}
