import React, { useState, useEffect } from 'react';
import { Check, Clock } from 'lucide-react';
import { getMyFiles } from '../../../../services/api';

export default function DocumentReview() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await getMyFiles();
        setFiles(res.data?.files || []); 
        console.log(res.data?.files);
      } catch (err) {
        console.error("Failed to fetch upload stats", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
  }, []);

  if (loading) {
    return <p className="text-center text-sm text-textheading">Loading Status...</p>;
  }

  // Helper to get icon, label, and color based on status
  const getStatusProps = (status) => {
    if (status === 'VALIDATED') {
      return { icon: <Check className="w-4 h-4 text-white" />, bg: 'bg-green-500', label: 'Validated' };
    }
    // Default to PENDING
    return { icon: <Clock className="w-4 h-4 text-white" />, bg: 'bg-status-pending-in-review-500', label: 'Pending' };
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-2 md:p-4 space-y-4">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="w-14 h-10 md:w-16 md:h-12 bg-orange-50 flex items-center justify-center rounded-full p-4">
          <Clock className="text-orange-500 w-5 h-5" />
        </div>
        <div className="flex flex-col">
          <h2 className="text-sm md:text-lg font-medium text-textheading lg:mb-1">Documents Under Review</h2>
          <p className="text-xs md:text-md lg:text-lg text-textnormal">
            Your documents are being reviewed by our team. You will receive an email notification once verification is complete.
          </p>
        </div>
      </div>

      {/* Progress Box */}
      <div className="md:ml-12 border border-bordercolor bg-cardbg rounded-xl p-2 md:p-4 space-y-3">
        <h3 className="text-sm md:text-base font-medium text-textheading my-1">Verification Progress</h3>

        {files.length === 0 ? (
          <p className="text-xs md:text-sm text-textheading">No documents found</p>
        ) : (
         files.map((file) => {
  const { icon, bg, label } = getStatusProps(file.user.status); // pass file.status
  return (
    <div
      key={file.id}
      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mt-2"
    >
      <span className="text-xs md:text-sm text-subtext">{file.documentType}</span>
      <span
        className={`flex items-center border px-2 py-1 rounded-full gap-1 ${
          file.user.status === 'UPLOADED'
            ? 'border-green-500 text-green-500'
            : 'border-status-pending-in-review-500 text-status-pending-in-review-500'
        }`}
      >
        <div
          className={`w-4 h-4 rounded-full flex items-center justify-center ${
            file.user.status === 'UPLOADED' ? 'bg-green-500' : 'bg-status-pending-in-review-500'
          }`}
        >
          {icon}
        </div>
        <span className="text-xs md:text-sm font-medium whitespace-nowrap">{label}</span>
      </span>
    </div>
  );
})

        )}
      </div>
    </div>
  );
}
