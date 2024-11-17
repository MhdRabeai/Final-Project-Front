import React from "react";

const PrescriptionPage = () => {
  const patient = {
    name: "John Doe",
    age: 32,
    gender: "Male",
    diagnosis: "Hypertension",
    doctor: "Dr. Smith",
  };

  const prescription = {
    medications: [
      { name: "Lisinopril", dosage: "10mg", frequency: "Once daily", duration: "30 days" },
      { name: "Metoprolol", dosage: "50mg", frequency: "Twice daily", duration: "30 days" },
    ],
    notes: "Ensure regular blood pressure monitoring. Avoid high sodium intake.",
    date: "2024-11-17",
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Patient Prescription</h1>

      {/* Patient Details */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-[#4F9451]">Patient Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <p>
            <span className="font-semibold">Name:</span> {patient.name}
          </p>
          <p>
            <span className="font-semibold">Age:</span> {patient.age}
          </p>
          <p>
            <span className="font-semibold">Gender:</span> {patient.gender}
          </p>
          <p>
            <span className="font-semibold">Diagnosis:</span> {patient.diagnosis}
          </p>
          <p>
            <span className="font-semibold">Prescribing Doctor:</span> {patient.doctor}
          </p>
        </div>
      </div>

      {/* Prescription Details */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-[#4F9451]">Prescription</h2>
        <p className="text-gray-600 mb-4">
          <span className="font-semibold">Date:</span> {prescription.date}
        </p>

        {/* Medications */}
        <h3 className="text-xl font-semibold mb-2">Medications</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-[#4F9451]">
              <tr>
                <th className="px-4 py-2 text-left text-white">Name</th>
                <th className="px-4 py-2 text-left text-white">Dosage</th>
                <th className="px-4 py-2 text-left text-white">Frequency</th>
                <th className="px-4 py-2 text-left text-white">Duration</th>
              </tr>
            </thead>
            <tbody>
              {prescription.medications.map((medication, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">{medication.name}</td>
                  <td className="px-4 py-2">{medication.dosage}</td>
                  <td className="px-4 py-2">{medication.frequency}</td>
                  <td className="px-4 py-2">{medication.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Notes */}
        <h3 className="text-xl font-semibold mt-6 mb-2 text-[#4F9451]">Doctor's Notes</h3>
        <p className="text-gray-600">{prescription.notes}</p>
      </div>
    </div>
  );
};

export default PrescriptionPage;
