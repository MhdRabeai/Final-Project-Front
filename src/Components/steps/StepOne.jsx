import React, { useState } from "react";

const StepOne = ({ nextStep, updateFormData }) => {
  const [doctor, setDoctor] = useState("");
  const [specialty, setSpecialty] = useState("");

  const handleNext = () => {
    updateFormData({ doctor, specialty });
    nextStep();
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        Select Doctor and Specialty
      </h2>
      <div className="mb-4">
        <label className="block text-gray-600 mb-2">Specialty</label>
        <select
          className="w-full border border-gray-300 rounded-lg p-2"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
        >
          <option value="">Choose a Specialty</option>
          <option value="cardiology">Cardiology</option>
          <option value="dermatology">Dermatology</option>
          <option value="pediatrics">Pediatrics</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 mb-2">Doctor</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded-lg p-2"
          placeholder="Enter Doctor's Name"
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
        />
      </div>
      <button
        onClick={handleNext}
        className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
      >
        Next
      </button>
    </div>
  );
};

export default StepOne;
