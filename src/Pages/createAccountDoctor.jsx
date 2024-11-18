import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";

const CreateAccountPataint = () => {
  const [formData, setFormData] = useState({
    profileImage: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [socialLinks, setSocialLinks] = useState([""]);

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
    console.log("Profile Updated:", formData);
    console.log("Social Links:", socialLinks);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Create Doctor Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center gap-4">
            <img
              className="w-16 h-16 rounded-full ring-2 ring-gray-200 object-cover"
              src={previewImage || "https://via.placeholder.com/100"}
              alt="Profile"
            />
            <label className="cursor-pointer">
              <span className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700">
                Upload Photo
              </span>
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              onChange={handleChange}
            />
          </div>


          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              onChange={handleChange}
            />
          </div>


          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gender
            </label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="mr-2 shrink-0 mt-0.5 rounded-full border-gray-200 text-green-600 focus:ring-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:text-blue-300 dark:focus:ring-blue-400"
                  onChange={handleChange}
                />
                Male
              </label>
              <label className="flex items-center">
  <input
    type="radio"
    name="gender"
    value="female"
    className="mr-2 shrink-0 mt-0.5 rounded-full border-gray-200 text-green-600 focus:ring-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:text-blue-300 dark:focus:ring-blue-400"
    onChange={handleChange}
  />
  Female
</label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg shadow hover:bg-green-700"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccountPataint;
