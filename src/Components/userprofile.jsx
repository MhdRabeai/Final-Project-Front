// import React, { useState } from 'react';  

// const ProfilePage = () => {  
//   const [firstName, setFirstName] = useState('John');  
//   const [lastName, setLastName] = useState('Doe');  
//   const [email, setEmail] = useState('john.doe@example.com');  
//   const [password, setPassword] = useState('password123');  
//   const [profilePhoto, setProfilePhoto] = useState(null);  

//   const handlePhotoChange = (e) => {  
//     const file = e.target.files[0];  
//     if (file) {  
//       const reader = new FileReader();  
//       reader.onloadend = () => {  
//         setProfilePhoto(reader.result);  
//       };  
//       reader.readAsDataURL(file);  
//     }  
//   };  

//   const handleSubmit = (e) => {  
//     e.preventDefault();  
//     console.log('Form submitted:', { firstName, lastName, email, password, profilePhoto });  
//   };  

//   return (  
//     <div className=" min-h-screen flex items-center justify-center">  
//       <form onSubmit={handleSubmit} className=" p-6  w-96">  
//         <h2 className="text-xl font-bold mb-4">Profile Settings</h2>  

//         <div className="mb-4">  
//           <label className="block text-sm font-medium text-gray-700">Profile Photo</label>  
//           <input  
//             type="file"  
//             accept="image/*"  
//             onChange={handlePhotoChange}  
//             className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-300"  
//           />  
//         </div>  

//         {profilePhoto && (  
//           <div className="mb-4 text-center">  
//             <img  
//               src={profilePhoto}  
//               alt="Profile Preview"  
//               className="h-24 w-24 rounded-full border-2 border-indigo-600 object-cover mx-auto mb-2"  
//             />  
//           </div>  
//         )}  

//         <div className="mb-4">  
//           <label className="block text-sm font-medium text-gray-700">First Name</label>  
//           <input  
//             type="text"  
//             value={firstName}  
//             onChange={(e) => setFirstName(e.target.value)}  
//             className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-300"  
//             placeholder="First Name"  
//           />  
//         </div>  
//         <div className="mb-4">  
//           <label className="block text-sm font-medium text-gray-700">Last Name</label>  
//           <input  
//             type="text"  
//             value={lastName}  
//             onChange={(e) => setLastName(e.target.value)}  
//             className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-300"  
//             placeholder="Last Name"  
//           />  
//         </div>  
//         <div className="mb-4">  
//           <label className="block text-sm font-medium text-gray-700">Email</label>  
//           <input  
//             type="email"  
//             value={email}  
//             onChange={(e) => setEmail(e.target.value)}  
//             className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-300"  
//             placeholder="Email"  
//           />  
//         </div>  
//         <div className="mb-4">  
//           <label className="block text-sm font-medium text-gray-700">Password</label>  
//           <input  
//             type="password"  
//             value={password}  
//             onChange={(e) => setPassword(e.target.value)}  
//             className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-300"  
//             placeholder="Password"  
//           />  
//         </div>  
//         <button type="submit" className="w-full py-2 px-4 bg-[#4F9451] text-white font-semibold rounded-md hover:bg-green-500">  
//           Update Profile  
//         </button>  
//       </form>  
//     </div>  
//   );  
// };  

// export default ProfilePage;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";

const ProfilePage = () => {
    const [formData, setFormData] = useState({
        profileImage: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
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

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl lg:max-w-3xl">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                    Doctor Profile
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
                            className="peer py-2 px-4 ps-11 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-[#4f9451] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            placeholder="Enter Name..."
                            required
                        />
                    </div>
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
                            className="peer py-2 px-4 ps-11 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-[#4f9451] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            placeholder="Enter Name..."
                            required
                        />
                    </div>
                    <div className="mb-4 relative">
                        <label
                            htmlFor="email"
                            className="block mb-2 font-medium text-gray-600"
                        >
                            Email
                        </label>
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <i className="fa fa-envelope"></i>
                        </span>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="peer py-2 px-4 pl-10 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-[#4f9451] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            placeholder="Enter Email..."
                            required
                        />
                    </div>
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
                            className="peer py-2 px-4 pl-10 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-[#4f9451] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            placeholder="Enter password"
                            required
                        />
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

export default ProfilePage;
