import React from 'react';  

const ProfileCard = () => {  
    return (  
        <div className="max-w-lg mx-auto rounded-lg overflow-hidden shadow-lg">  
            <div className="relative">  
                <img   
                    className="w-full h-48 object-cover"   
                    src="https://your-background-image-url.jpg"   
                    alt="Background"   
                />  
                <img   
                    className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-4 border-white shadow-lg"   
                    src="https://your-profile-image-url.jpg"   
                    alt="Profile"   
                />  
            </div>  
            <div className="bg-white p-6 text-center">  
                <h1 className="text-2xl font-semibold">Danish Hebo</h1>  
                <h2 className="text-gray-500 mt-1">Professional Ui/Ux Designer</h2>  
                <p className="mt-2 text-gray-600">  
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque   
                    posuere fermentum urna, eu condimentum mauris tempus ut.  
                </p>  
                <div className="mt-4 space-x-4">  
                    <a href="#" className="text-blue-500 hover:underline">Facebook</a>  
                    <a href="#" className="text-blue-500 hover:underline">Twitter</a>  
                    <a href="#" className="text-blue-500 hover:underline">LinkedIn</a>  
                    <a href="#" className="text-blue-500 hover:underline">GitHub</a>  
                </div>  
            </div>  
        </div>  
    );  
};  

export default ProfileCard;