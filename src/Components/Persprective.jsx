import React, { useState } from 'react';

const DoctorPerspectiveForm = () => {
  const [patientId, setPatientId] = useState('');
  const [dateOfConsultation, setDateOfConsultation] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [treatmentPlan, setTreatmentPlan] = useState('');
  const [notes, setNotes] = useState('');
  const [medicine, setMedicine] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const perspectiveData = {
      patientId,
      dateOfConsultation,
      diagnosis,
      treatmentPlan,
      notes,
      medicine,
    };

    fetch('/api/perspectives', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(perspectiveData)
    })
    .then(response => {
      console.log('Perspective submitted successfully:', response);

      setPatientId('');
      setDateOfConsultation('');
      setDiagnosis('');
      setTreatmentPlan('');
      setNotes('');
      setMedicine('');
    })
    .catch(error => {

      console.error('Error submitting perspective:', error);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label htmlFor="patientId" className="block text-gray-700 text-sm font-bold mb-2">Patient Name:</label>
        <input type="text" id="patientId" value={patientId} onChange={(e) => setPatientId(e.target.value)} 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>


      <div className="mb-4">
        <label htmlFor="medicine" className="block text-gray-700 text-sm font-bold mb-2">Medicine:</label>
        <textarea id="medicine" value={medicine} onChange={(e) => setMedicine(e.target.value)} 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline   
 h-24" />
      </div>

      <div className="flex justify-center">
        <button type="submit" className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">Submit Perspective</button>
      </div>
    </form>
  );
};

export default DoctorPerspectiveForm;