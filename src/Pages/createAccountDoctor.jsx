import React, { useState } from "react";

const CreateAccountDoctor = () => {
    const [formData, setFormData] = useState({
        profileImage: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    const [previewImage, setPreviewImage] = useState(null);
    const [socialLinks, setSocialLinks] = useState([""]); // روابط السوشيال ميديا

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

    const handleSocialLinkChange = (index, value) => {
        const updatedLinks = [...socialLinks];
        updatedLinks[index] = value;
        setSocialLinks(updatedLinks);
    };

    const addSocialLink = () => {
        setSocialLinks([...socialLinks, ""]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Profile Updated:", formData);
        console.log("Social Links:", socialLinks);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl lg:max-w-3xl">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                    Doctor Profile
                </h2>
                <form onSubmit={handleSubmit}>
                    {/* Profile Image */}
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

                    {/* First Name */}
                    <div className="mb-4">
                        <label
                            htmlFor="firstName"
                            className="block mb-2 font-medium text-gray-600"
                        >
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter first name"
                            required
                        />
                    </div>

                    {/* Last Name */}
                    <div className="mb-4">
                        <label
                            htmlFor="lastName"
                            className="block mb-2 font-medium text-gray-600"
                        >
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter last name"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block mb-2 font-medium text-gray-600"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter email"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block mb-2 font-medium text-gray-600"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter password"
                            required
                        />
                    </div>

                    {/* Social Media Links */}
                    <div className="mb-4">
                        <label className="block mb-2 font-medium text-gray-600">
                            Social Media Links
                        </label>
                        {socialLinks.map((link, index) => (
                            <input
                                key={index}
                                type="url"
                                value={link}
                                onChange={(e) =>
                                    handleSocialLinkChange(index, e.target.value)
                                }
                                className="w-full px-3 py-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder={`Social Link ${index + 1}`}
                                required
                            />
                        ))}
                        <button
                            type="button"
                            onClick={addSocialLink}
                            className="w-full  bg-[#4F9451]  text-white py-2 rounded-lg hover:bg-[#4F9451]  transition duration-300 mt-2"
                        >
                            Add Social Link
                        </button>
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

export default CreateAccountDoctor;
