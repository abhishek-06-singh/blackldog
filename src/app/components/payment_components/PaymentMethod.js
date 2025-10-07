"use client";
import React from 'react'
import { useState } from "react";
import { Eye, Lock } from "lucide-react";
import BillingAddressForm from "./BillingAddressForm";
import CreditCardForm from "./CreditCardForm";
import CheckboxWithLabel from "./CheckboxWithLabel";
import SecureButton from "./SecureButton";
import {Subscribe} from '../../../services/api'

export default function PaymentMethod({plan,billingPeriod}) {
const [cardNumber, setCardNumber] = useState("");
    const [nameOnCard, setNameOnCard] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");
    const [fullName, setFullName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");
    const [saveCard, setSaveCard] = useState(false);
    const[loading, setLoading] = useState(false);

     const handlePaymentMethodChange =async () => {
      setLoading(true);
      try {
        const planId = plan?.featureLimits?.planId;
        const billingCycle = billingPeriod === "Monthly" ? "MONTHLY" : "ANNUAL";
        const paymentMethodId = saveCard ? "SAVE_CARD" : "ONE_TIME_PAYMENT";
       const response = await Subscribe({
         planId,
      billingCycle,
      paymentMethodId
        });
      
      }
      catch (error) {
        console.error('Subscribe API Error:', error.response?.data || error.message)
        throw error
      }
      finally {
        setLoading(false);
      }
      };
      const price =
  billingPeriod === "Monthly"
    ? plan.pricing?.monthly
    : billingPeriod === "Anually"
    
  const subtotal = price ?? 0;
  const tax = (subtotal * 0.18).toFixed(2); // 18% GST/VAT
  const total = (subtotal * 1.18).toFixed(2);

  return (
    <div className="w-full mx-auto bg-cardbg rounded-2xl border border-bordercolor p-6 space-y-6">
      <h2 className="text-lg text-primary font-semibold">Payment Method</h2>

      {/* Card Information */}
      <div>
        <p className="text-xs text-subtext font-medium mb-2">
          CARD INFORMATION
        </p>
        <CreditCardForm
        cardNumber={cardNumber}
        nameOnCard={nameOnCard}
        expiry={expiry}
        cvv={cvv}
        setCardNumber={setCardNumber}
        setNameOnCard={setNameOnCard}
        setExpiry={setExpiry}
        setCvv={setCvv}
        />
      </div>

      {/* Billing Address */}
      <div>
          <BillingAddressForm
        fullName={fullName}
        setFullName={setFullName}
        address={address}
        setAddress={setAddress}
        city={city}
        setCity={setCity}
        zip={zip}
        setZip={setZip}
      />
        </div>

      {/* Save Method */}
      <CheckboxWithLabel checked={saveCard} setChecked={setSaveCard} label="Save payment method for future use" />

      {/* CTA */}
     <SecureButton 
      text="Activate Your Plan" 
      amount={total} 
      onClick={handlePaymentMethodChange} 
      
    />
    </div>
  );
}
