import React, { useState } from 'react';

function PrescriptionForm() {
  const [patientId, setPatientId] = useState('');
  const [medicine, setMedicine] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Patient ID:', patientId);
    console.log('Medicine:', medicine);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded px-8 py-8 mb-4">
      <h2 className="text-xl text-green-700 font-bold mb-4">Send a Prescription</h2>

      <div className="mb-4">
        <label htmlFor="patientId" className="block text-green-700 text-sm font-bold mb-2">
          Patient Name:
        </label>
        <div className="relative">
          <input
            type="text"
            id="patientId"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
            className="peer py-2 px-4 ps-11 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-[#4f9451] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder="Enter Patient Name..."
          />
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-gray-500"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="medicine" className="block text-green-700 text-sm font-bold mb-2">
          Medicine:
        </label>
        <textarea
          id="medicine"
          value={medicine}
          onChange={(e) => setMedicine(e.target.value)}
          className="peer py-2 px-4 block w-full border-2 border-gray-200 rounded-lg text-xs text-gray-500 focus:border-[#4f9451] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          placeholder="Enter Medicine Details..."
        />
      </div>

      <div className="flex justify-center">
        <button type="submit" className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">
          Submit Prescription
        </button>
      </div>
    </form>  
  );
}

export default PrescriptionForm;