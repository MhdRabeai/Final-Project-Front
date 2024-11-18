import React, { useState } from "react";

const AddDrug = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Description: "",
    Price: "",
    Quantity: "",
  });
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, profileImage: file });
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Drug Added:", formData);
  };

  return (
    <div className="flex items-center justify-center my-section bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl lg:max-w-3xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Add New Drug
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 text-center">
            <label
              htmlFor="profileImage"
              className="block mb-2 font-medium text-gray-600"
            >
              Profile Image
            </label>
            <div
              className="flex justify-center mb-4 cursor-pointer"
              onClick={() =>
                document.getElementById("profileImageInput").click()
              }
            >
              {previewImage ? (
                <img
                  src={previewImage}
                  alt="Profile Preview"
                  className="w-24 h-24 rounded-full object-cover border-2 border-gray-300 shadow-md"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )}
            </div>
            <input
              type="file"
              id="profileImageInput"
              name="profileImage"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="Name"
              className="block mb-2 font-medium text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              id="Name"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              className="peer py-2 px-4 ps-11 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-[#4f9451] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Enter Drug Name..."
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="Description"
              className="block mb-2 font-medium text-gray-600"
            >
              Description
            </label>
            <textarea
              id="Description"
              name="Description"
              value={formData.Description}
              onChange={handleChange}
              className="peer py-2 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-[#4f9451] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Enter Drug Description..."
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="Price"
              className="block mb-2 font-medium text-gray-600"
            >
              Price
            </label>
            <input
              type="number"
              id="Price"
              name="Price"
              value={formData.Price}
              onChange={handleChange}
              className="peer py-2 px-4 ps-11 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-[#4f9451] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Enter Drug Price..."
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="Quantity"
              className="block mb-2 font-medium text-gray-600"
            >
              Quantity
            </label>
            <input
              type="number"
              id="Quantity"
              name="Quantity"
              value={formData.Quantity}
              onChange={handleChange}
              className="peer py-2 px-4 ps-11 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-[#4f9451] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Enter Quantity..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#4F9451] text-white py-2 rounded-lg hover:bg-[#4F9451] transition duration-300"
          >
            Add Drug
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDrug;
