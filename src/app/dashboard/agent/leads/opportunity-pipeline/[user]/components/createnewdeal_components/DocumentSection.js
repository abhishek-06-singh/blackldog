import { Table, Button, Space, Tag, Card } from "antd";
import { MoreOutlined } from "@ant-design/icons";

const DocumentsSection = () => {
  const documents = [
    {
      key: "1",
      name: "Purchase Agreement.pdf",
      type: "Purchase Agreement",
      status: "Draft",
      sentDate: "Jan 10, 2025",
    },
    {
      key: "2",
      name: "Purchase Agreement.pdf",
      type: "Purchase Agreement",
      status: "Draft",
      sentDate: "Jan 10, 2025",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
       render: (text) => <span className="font-medium text-textnormal">{text}</span>,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      render: (text) => <span className="text-subtext font-medium">{text}</span>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <div className="rounded-full text-textnormal font-medium text-center bg-shadow">
          {status}
        </div>
      ),
    },
    {
      title: "Sent Date",
      dataIndex: "sentDate",
      key: "sentDate",
      render: (text) => <span className="text-subtext ">{text}</span>,
    },
    {
      title: "Actions",
      key: "actions",
      render: () => (
        <Button
          type="text"
          icon={<MoreOutlined className="text-textnormal" />}
          style={{ border: "none", boxShadow: "none" }}
        />
      ),
    },
  ];

  return (

    <div className="bg-cardbg border border-bordercolor rounded-xl shadow-sm p-4">
      <div className="flex flex-col md:flex-row md:justify-between mb-6 items-center">
        <h3 className="text-sm md:text-lg mb-2 md:mb-0 font-semibold  text-textnormal">
          Documents for Signature
        </h3>
       <div className="space-y-4 md:space-x-2">
          <Button className=" md:mb-0 rounded-xl text-textnormal text-xs md:text-sm font-medium border-bordercolor bg-cardbg w-full md:w-fit">+ Add New Document</Button>
          <Button className="w-full  rounded-xl md:w-fit bg-textheading text-xs md:text-sm text-background font-medium" >
            Send For Signature
          </Button>
          </div>
      
      </div>
     
     <div className="w-full rounded-xl overflow-x-auto border border-bordercolor shadow-md">
  <table
    className="min-w-full table-auto text-left rounded-xl"
    style={{
      borderCollapse: "separate",
      borderSpacing: 0,
      tableLayout: "auto",
    }}
  >
    <thead className="bg-subcardbg text-textnormal text-sm font-medium">
      <tr>
        <th className="p-4 whitespace-nowrap">Name</th>
        <th className="p-4 whitespace-nowrap">Type</th>
        <th className="p-4 whitespace-nowrap">Status</th>
        <th className="p-4 whitespace-nowrap">Sent Date</th>
        <th className="p-4 whitespace-nowrap text-center">Actions</th>
      </tr>
    </thead>

    <tbody className="text-xs sm:text-sm">
      {documents.map((doc, index) => (
        <tr
          key={doc.key || index}
          className="border-b border-bordercolor last:border-none hover:bg-boxbg transition"
        >
          {/* Name */}
          <td className="p-4 whitespace-nowrap text-textnormal font-medium">
            {doc.name}
          </td>

          {/* Type */}
          <td className="p-4 whitespace-nowrap text-subtext">{doc.type}</td>

          {/* Status */}
          <td className="p-4 whitespace-nowrap">
            <span className="px-3 py-1 text-sm rounded-full font-medium bg-shadow text-textnormal">
              {doc.status}
            </span>
          </td>

          {/* Sent Date */}
          <td className="p-4 whitespace-nowrap text-subtext">
            {doc.sentDate}
          </td>

          {/* Actions */}
          <td className="p-4 text-center">
            <Button
              type="text"
              icon={<MoreOutlined className="text-textnormal" />}
              onClick={() => handleAction(doc)}
              size="small"
              style={{ padding: 0 }}
            />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

   </div>
  );
};

export default DocumentsSection;
