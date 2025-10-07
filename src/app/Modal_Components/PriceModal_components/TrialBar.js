"use client"
import React, { useState, useEffect } from "react";
import {useRouter} from "next/navigation";
import {TrialAssign} from "../../../services/api";
import { useAuth } from '../../../../context/AuthContext';

export default function TrialBar() {
     const { user } = useAuth();
  const [trial, setTrial] = useState('');
  const[loading, setLoading] = useState(false);
  const[mounted, setMounted] = useState(false);
  const router = useRouter();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleTrialClick = async () => {
    try {
      setLoading(true);
      const response = await TrialAssign();
      setTrial(response.data);
      router.push('/exploreproperties');
    } catch (error) {
      console.error('Trial Assign API Error:', error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

   if (!mounted) return null;

  return (
    <div className="w-full bg-background border rounded-md shadow-sm p-4 flex flex-col md:flex-row items-center justify-between">


      {/* Left Section */}
      <div className="text-center md:text-left mb-3 md:mb-0">
        <h2 className="text-sm font-medium text-subheading">
          Start your free trial – <span className="font-semibold">Enjoy full access to explore the product now</span>
        </h2>
        <p className="text-xs text-textnormal">

          You can explore all features right away. Choose a plan anytime to continue after your trial ends.
        </p>
      </div>

      {/* Right Section (Button) */}
      <div>
        <button onClick={handleTrialClick} className="bg-buttonbg text-background px-5 py-2 rounded-md text-sm font-medium  transition" disabled={loading}>

          Start Free Trial
        </button>
      </div>
    </div>
  );
}
