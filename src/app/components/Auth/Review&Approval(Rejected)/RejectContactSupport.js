'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { MdSupportAgent } from "react-icons/md";
import { Upload } from 'lucide-react';
import { getMyFiles } from "../../../../services/api";
import { useRouter } from 'next/navigation';

export default function RejectContactSupport() {
  const [loading, setLoading] = useState(false);
  const [rejectedDocs, setRejectedDocs] = useState([]);
  const router = useRouter();
  const handleReupload=async ()=>{
    setLoading(true);
     try {
            const res = await getMyFiles();
            setRejectedDocs(res.data?.files || []);
             const userRole = res.data?.user?.role || res.data?.files?.[0]?.user?.role;

    if (userRole === "AGENT") {
      router.push("/agentdocs"); // redirect to agent docs
    } else {
      router.push("/agencydocs"); // redirect to agency docs
    } 
           
          } catch (err) {
            console.error("Failed to fetch upload stats", err);
          } finally {
            setLoading(false);
          }
        };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-2 flex items-start justify-start gap-3 mb-20">
     <div className='flex flex-col items-start justify-start'>
        <p className="text-md px-2 md:px-4 md:text-lg text-textheading mb-2.5">Need Help?</p>
        <div className='w-full flex items-center flex-col md:flex-row gap-2'>
         <div className='px-4 md:px-0'>
        <Link href="#">
          <button className="w-48 md:w-auto flex items-center space-x-1 md:space-x-2 bg-primary text-background px-4 py-2 md:py-3  rounded-md text-xs md:text-sm hover:bg-hoveroverbutton transition">
            <MdSupportAgent className=" md:w-6 md:h-6" />
            <span>Contact Support</span>
          </button>
        </Link>
      </div>

      <div>
      
          <button onClick={handleReupload} className="w-48 md:w-auto flex items-center bg-cardbg border space-x-1 border-bordercolor md:space-x-2 text-subtext px-4  py-2 md:py-3  rounded-md text-xs md:text-sm  transition">
            <Upload className="w-4 h-4 md:w-6 md:h-6 text-subtext" />
            <span>Re-upload Documents</span>
          </button>
        
      </div>
      </div>
      </div>
    </div>
  )
}
