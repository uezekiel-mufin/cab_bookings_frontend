import React, { useRef, useEffect, useState } from 'react';

const AddCab = () => {
  const [imageUrl, setImageUrl] = useState('');
  const cloudinaryRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
  }, []);

  const handleAddCab = async (data) => {
    console.log(data);
    console.log(imageUrl);
  };

  const uploadToCloudinary = async () => {
    const widget = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: 'dk8oefaio',
        uploadPreset: 'firstmonie',
        resourceType: 'image',
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          setImageUrl(result.info.url);
        } else if (error) {
          console.log(error);
        }
      },
    );
    widget.open();
  };
  return (
    <div>
      <h1>Add Cab</h1>
      <form action="" onSubmit={handleAddCab}>
        <div>
          <label htmlFor="cab">
            Cab
            <input type="text" name="cab" id="cab" defaultValue="Honda Civic" />
          </label>
        </div>
        <button
          type="button"
          onClick={uploadToCloudinary}
          className="px-3 py-2 bg-gray-400 text-white hover:scale-105 customTransition rounded-lg w-full mb-8"
        >
          Upload Image
        </button>
      </form>
    </div>
  );
};

export default AddCab;
