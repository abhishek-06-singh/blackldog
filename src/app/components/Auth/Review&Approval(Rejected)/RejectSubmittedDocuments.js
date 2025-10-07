import React, { useState, useEffect } from "react";
import { Check, Clock, X, FileText } from "lucide-react";
import { getMyFiles } from '../../../../services/api';

export default function RejectSubmittedDocuments() {
  const [rejectedDocs, setRejectedDocs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRejectedDocs = async () => {
      try {
        const res = await getMyFiles();
        setRejectedDocs(res.data?.files || []); 
        console.log(res.data?.files);
      } catch (err) {
        console.error("Failed to fetch upload stats", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRejectedDocs();
  }, []);

  if (loading) {
    return <p className="text-center text-sm text-textheading">Loading Status...</p>;
  }

  // Helper to get icon, label, and color based on status
  const getStatusProps = (status) => {
    if (status === 'VALIDATED') {
      return { icon: <Check className="w-4 h-4 text-white" />, bg: 'bg-green-500', label: 'Validated' };
    } else if (status === 'PENDING') {
      return { icon: <Clock className="w-4 h-4 text-white" />, bg: 'bg-status-pending-in-review-500', label: 'Pending' };
    }
    // Default to REJECTED
    return { icon: <X className="w-4 h-4 text-white" />, bg: 'bg-red-500', label: 'Rejected' };
  };

  return (
    <div className="w-full max-w-xl md:max-w-2xl mx-auto my-6 space-y-4">
      <h2 className="text-md md:text-lg text-textheading">Submitted Documents</h2>

      {rejectedDocs.length === 0 ? (
        <p className="text-xs md:text-sm text-textheading">No documents found</p>
      ) : (
        rejectedDocs.map((file) => {
          const { icon, bg, label } = getStatusProps(file.user.status); // use file.status
          return (
            <div
              key={file.id}
              className="flex sm:items-center flex-col sm:flex-row sm:justify-between bg-cardbg py-2 px-4 rounded-xl border border-bordercolor"
            >
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4 md:w-6 md:h-6 text-text-primary" />
                <span className="text-xs md:text-sm text-textheading">{file.documentType}</span>
              </div>
              <span
                className={`flex items-center border px-2 py-1 rounded-full gap-1 ${
                  file.user.status === 'VALIDATED'
                    ? 'border-green-500 text-green-500'
                    : file.user.status === 'PENDING'
                    ? 'border-status-pending-in-review-500 text-status-pending-in-review-500'
                    : 'border-red-500 text-red-500'
                }`}
              >
                <div className={`w-4 h-4 rounded-full flex items-center justify-center ${bg}`}>
                  {icon}
                </div>
                <span className="text-xs md:text-sm font-medium whitespace-nowrap">{label}</span>
              </span>
            </div>
          );
        })
      )}
    </div>
  );
}

