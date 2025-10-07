import { Card, Input } from "antd";

const { TextArea } = Input;

const InternalNotes = () => {
  return (
    <div className="bg-cardbg rounded-xl shadow-md">
    <Card
      className=" p-4"
      bordered={false}
    >
      <p className="text-lg mb-4 text-primary font-semibold">Internal Notes</p>
      <TextArea className="!text-xs md:!text-sm rounded-xl placeholder:!text-textplaceholder h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none" rows={4} placeholder="Enter here..." />
    </Card></div>
  );
};

export default InternalNotes;
