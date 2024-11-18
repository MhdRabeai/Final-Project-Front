import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

const DocProfile = () => {
  const [formData, setFormData] = useState({
    profileImage: "",
    fullName: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    startTime: "00",
    endTime: "01",
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
    console.log("Profile Updated:", formData);
  };

  const hours = [...Array(24).keys()].map((hour) => hour.toString().padStart(2, "0"));

  return (
    <div className="flex items-center justify-center flex-grow px-6 bg-gray-200" style={{ paddingTop: '60px' }}>
      <div className="bg-white rounded-lg shadow-md w-full max-w-2xl lg:max-w-3xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Doctor Profile</h2>
        
        {previewImage && (
          <div className="mb-4 text-center">
            <img src={previewImage} alt="Profile Preview" className="h-24 w-24 rounded-full border-2 border-indigo-600 object-cover mx-auto mb-2" />
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fullName" className="block mb-2 font-medium text-gray-600">
              Full Name
            </label>
            <div className="relative">
              <FontAwesomeIcon icon={faUser} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="peer py-2 pl-10 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-[#4f9451] focus:ring-0"
                placeholder="Enter Full Name"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium text-gray-600">
              Email
            </label>
            <div className="relative">
              <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="peer py-2 pl-10 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-[#4f9451] focus:ring-0"
                placeholder="Enter Email..."
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="currentPassword" className="block mb-2 font-medium text-gray-600">
              Current Password
            </label>
            <div className="relative">
              <FontAwesomeIcon icon={faLock} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                id="currentPassword"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                className="peer py-2 pl-10 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-[#4f9451] focus:ring-0"
                placeholder="Enter Current Password"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="newPassword" className="block mb-2 font-medium text-gray-600">
              New Password
            </label>
            <div className="relative">
              <FontAwesomeIcon icon={faLock} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                className="peer py-2 pl-10 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-[#4f9451] focus:ring-0"
                placeholder="Enter New Password"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block mb-2 font-medium text-gray-600">
              Confirm Password
            </label>
            <div className="relative">
              <FontAwesomeIcon icon={faLock} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="peer py-2 pl-10 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-[#4f9451] focus:ring-0"
                placeholder="Confirm Password"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="startTime" className="block mb-2 font-medium text-gray-600">
              Start Time
            </label>
            <select
              id="startTime"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
              className="peer py-2 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-[#4f9451] focus:ring-0"
            >
              {hours.map((hour) => (
                <option key={hour} value={hour}>
                  {hour}:00
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="endTime" className="block mb-2 font-medium text-gray-600">
              End Time
            </label>
            <select
              id="endTime"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
              className="peer py-2 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-[#4f9451] focus:ring-0"
            >
              {hours.map((hour) => (
                <option key={hour} value={hour}>
                  {hour}:00
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-[#4F9451] text-white py-2 rounded-lg hover:bg-[#4F9451] transition duration-300"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default DocProfile;