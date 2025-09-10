import React, { useState } from 'react';
import { Upload, Button, message } from 'antd';
import { CloudUploadOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

const DocumentUpload = () => {
  const [imageUrl, setImageUrl] = useState(null);

  const handleImageChange = (info) => {
    if (info.file.status === 'uploading') return;

    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, (url) => {
        setImageUrl(url);
      });
    }
  };

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file) => {
    const isJpgOrPng =
      file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG files!');
    }
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      message.error('Image must be smaller than 5MB!');
    }
    return isJpgOrPng && isLt5M;
  };

  const uploadButton = (
    <div className="flex flex-col items-center justify-center p-6  space-y-2">
      <CloudUploadOutlined className="text-3xl text-primary" />
      <div className="text-sm text-textnormal font-medium text-center">
        Drag and drop your files here or
      </div>
      <div className="text-xs text-textnormal text-center">
        JPG, PNG only. Max 5MB per image. Up to 7 images.
      </div>
      <Button
        type="default"
        className="bg-buttonbg p-2 text-background border-none mt-2"
        
      >
        Browse Files
      </Button>
    </div>
  );

  return (
    <div className="w-full px-6 space-y-6">
      <div>
        <label className="block text-sm font-medium text-textheading mb-2">
          Upload Document*
        </label>

        <Dragger
          name="file"
          multiple={false}
          showUploadList={false}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          beforeUpload={beforeUpload}
          onChange={handleImageChange}
          className="w-full rounded-lg  bg-transparent"
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="uploaded"
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            uploadButton
          )}
        </Dragger>
      </div>
    </div>
  );
};

export default DocumentUpload;
