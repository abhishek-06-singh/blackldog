import React, { useEffect, useState } from "react";
import { FileText, File } from "lucide-react";
import { getMyFiles } from "../../../../services/api";

export default function SubmittedDocuments() {
  const [filesByStatus, setFilesByStatus] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await getMyFiles();
        setFilesByStatus(res.data?.files || []); 
        console.log(res.data?.files);
      } catch (err) {
        console.error("Failed to fetch upload stats", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return <p className="text-center text-sm text-textheading">Loading documents...</p>;
  }

  return (
    <div className="w-full max-w-xl md:max-w-2xl mx-auto my-6 space-y-4">
      <h2 className="text-md md:text-lg text-textheading">Submitted Documents</h2>

   {filesByStatus.length === 0 ? (
  <p className="text-xs md:text-sm text-textheading">No documents found</p>
) : (
  filesByStatus.map((file) => (
    <div
      key={file.id}
      className="flex sm:items-center flex-col sm:flex-row sm:justify-between bg-cardbg py-2 px-4 rounded-xl border border-bordercolor"
    >
      <div className="flex items-center space-x-2">
        <FileText className="w-4 h-4 md:w-6 md:h-6 text-text-primary" />
        <span className="text-xs md:text-sm text-textheading">
          {file.documentType}
        </span>
      </div>
      <span className="text-xs md:text-sm text-secondary-alt">
        {new Date(file.uploadedAt).toLocaleDateString()}
      </span>
    </div>
  ))
)}

</div>
  )}