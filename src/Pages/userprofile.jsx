import React, { useState } from 'react';  

const ProfilePage = () => {  
  const [firstName, setFirstName] = useState('John');  
  const [lastName, setLastName] = useState('Doe');  
  const [email, setEmail] = useState('john.doe@example.com');  
  const [password, setPassword] = useState('password123');  
  const [profilePhoto, setProfilePhoto] = useState(null);  

  const handlePhotoChange = (e) => {  
    const file = e.target.files[0];  
    if (file) {  
      const reader = new FileReader();  
      reader.onloadend = () => {  
        setProfilePhoto(reader.result);  
      };  
      reader.readAsDataURL(file);  
    }  
  };  

  const handleSubmit = (e) => {  
    e.preventDefault();  
    console.log('Form submitted:', { firstName, lastName, email, password, profilePhoto });  
  };  

  return (  
    <div className=" min-h-screen flex items-center justify-center">  
      <form onSubmit={handleSubmit} className=" p-6  w-96">  
        <h2 className="text-xl font-bold mb-4">Profile Settings</h2>  

        <div className="mb-4">  
          <label className="block text-sm font-medium text-gray-700">Profile Photo</label>  
          <input  
            type="file"  
            accept="image/*"  
            onChange={handlePhotoChange}  
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-300"  
          />  
        </div>  

        {profilePhoto && (  
          <div className="mb-4 text-center">  
            <img  
              src={profilePhoto}  
              alt="Profile Preview"  
              className="h-24 w-24 rounded-full border-2 border-indigo-600 object-cover mx-auto mb-2"  
            />  
          </div>  
        )}  

        <div className="mb-4">  
          <label className="block text-sm font-medium text-gray-700">First Name</label>  
          <input  
            type="text"  
            value={firstName}  
            onChange={(e) => setFirstName(e.target.value)}  
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-300"  
            placeholder="First Name"  
          />  
        </div>  
        <div className="mb-4">  
          <label className="block text-sm font-medium text-gray-700">Last Name</label>  
          <input  
            type="text"  
            value={lastName}  
            onChange={(e) => setLastName(e.target.value)}  
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-300"  
            placeholder="Last Name"  
          />  
        </div>  
        <div className="mb-4">  
          <label className="block text-sm font-medium text-gray-700">Email</label>  
          <input  
            type="email"  
            value={email}  
            onChange={(e) => setEmail(e.target.value)}  
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-300"  
            placeholder="Email"  
          />  
        </div>  
        <div className="mb-4">  
          <label className="block text-sm font-medium text-gray-700">Password</label>  
          <input  
            type="password"  
            value={password}  
            onChange={(e) => setPassword(e.target.value)}  
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-300"  
            placeholder="Password"  
          />  
        </div>  
        <button type="submit" className="w-full py-2 px-4 bg-[#4F9451] text-white font-semibold rounded-md hover:bg-green-500">  
          Update Profile  
        </button>  
      </form>  
    </div>  
  );  
};  

export default ProfilePage;