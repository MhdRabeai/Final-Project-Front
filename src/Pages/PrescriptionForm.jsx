import React, { useState } from 'react';

function PrescriptionForm() {
  const [patientId, setPatientId] = useState('');
  const [medicine, setMedicine] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const prescriptionData = {
      patientId,
      medicine,
    };

    console.log('Prescription Data:', prescriptionData);

    setPatientId('');
    setMedicine('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl md:p-8 lg:p-10">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-center text-green-700">
          Send a Prescription
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="patientId"
              className="block text-sm md:text-base font-medium text-gray-700 mb-2"
            >
              Patient Name
            </label>
            <input
              type="text"
              id="patientId"
              value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
              placeholder="Enter Patient Name..."
              className="w-full px-3 py-2 md:px-4 md:py-3 border rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>

          <div>
            <label
              htmlFor="medicine"
              className="block text-sm md:text-base font-medium text-gray-700 mb-2"
            >
              Medicine
            </label>
            <textarea
              id="medicine"
              value={medicine}
              onChange={(e) => setMedicine(e.target.value)}
              placeholder="Enter Medicine Details..."
              className="w-full px-3 py-2 md:px-4 md:py-3 border rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-green-600"
              rows="6"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 md:py-3 rounded-lg shadow hover:bg-green-700"
            >
              Submit Prescription
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PrescriptionForm;
