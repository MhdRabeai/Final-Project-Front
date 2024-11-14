import React, { useState } from 'react';

const DoctorPerspectiveForm = () => {
  const [patientId, setPatientId] = useState('');
  const [dateOfConsultation, setDateOfConsultation] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [treatmentPlan, setTreatmentPlan] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const perspectiveData = {
      patientId,
      dateOfConsultation,
      diagnosis,
      treatmentPlan,
      notes,
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
    })
    .catch(error => {
      console.error('Error submitting perspective:', error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="patientId">Patient ID:</label>
        <input type="text" id="patientId" value={patientId} onChange={(e) => setPatientId(e.target.value)} />
      </div>


      <button type="submit">Submit Perspective</button>
    </form>
  );
};

export default DoctorPerspectiveForm;