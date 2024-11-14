import React, { useState, useEffect } from 'react';
const Input = ({ onChange, placeholder, defaultValue }) => {
  const [value, setValue] = useState(defaultValue || '');
  useEffect(() => {
    setValue(defaultValue); 
  }, [defaultValue]);
  
  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}      
      onChange={handleChange}    
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out shadow-sm placeholder-gray-400"
    />
  );
};

export default Input;
