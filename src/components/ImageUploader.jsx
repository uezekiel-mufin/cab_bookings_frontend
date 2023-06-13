/* eslint-disable no-nested-ternary */
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

const ImageUploader = ({ setImageUrl }) => {
  const [loading, setLoading] = useState(false);
  const [uploadStarted, setUploadStarted] = useState(false);
  const cloudinaryRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
  }, []);

  const uploadToCloudinary = async () => {
    setLoading(true);
    setUploadStarted(true);
    const widget = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
        uploadPreset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
        resourceType: 'image',
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          setImageUrl(result.info.url);
          toast.success('Image uploaded successfully');
          setLoading(false);
          setUploadStarted(true);
        } else if (error) {
          toast.error('Image upload failed, try again');
        }
      },
    );
    widget.open();
  };

  return (
    <div className="">
      <button
        type="button"
        onClick={uploadToCloudinary}
        className="px-3 py-2 bg-transparent border border-gray-600  hover:scale-105 customTransition rounded-lg"
      >
        {uploadStarted ? (
          loading ? (
            <h1>Loading</h1>
          ) : (
            <h2>Uploaded</h2>
          )
        ) : (
          <h2>Upload Image</h2>
        )}
      </button>
    </div>
  );
};

export default ImageUploader;

ImageUploader.propTypes = {
  setImageUrl: PropTypes.func.isRequired,
};
