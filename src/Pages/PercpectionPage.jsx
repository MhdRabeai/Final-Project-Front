import React from "react";

const PrescriptionPage = () => {
  const patient = {
    name: "John Doe",
    age: 32,
    gender: "Male",
    diagnosis: "Hypertension",
    doctor: "Dr. Smith",
  };

  const prescriptions = [
    {
      id: 1,
      doctor: "Dr. Smith",
      date: "2024-11-17",
      receivedDate: "2024-11-18",
      pdfLink: "#", 
    },
    {
      id: 2,
      doctor: "Dr. Jane Doe",
      date: "2024-10-15",
      receivedDate: "2024-10-16",
      pdfLink: "#", 
    },
  ];

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
        <h2 className="text-2xl font-semibold mb-4 text-[#4F9451]">Prescriptions</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-[#4F9451]">
              <tr>
                <th className="px-4 py-2 text-left text-white">#</th>
                <th className="px-4 py-2 text-left text-white">Doctor</th>
                <th className="px-4 py-2 text-left text-white">PDF</th>
                <th className="px-4 py-2 text-left text-white">Download File</th>
                <th className="px-4 py-2 text-left text-white">Received Date</th>
              </tr>
            </thead>
            <tbody>
              {prescriptions.map((prescription, index) => (
                <tr key={prescription.id} className="border-b">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{prescription.doctor}</td>
                  <td className="px-4 py-2">
                    <img
                      src="/pdf-icon.svg" 
                      alt="PDF"
                      className="w-6 h-6"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => window.open(prescription.pdfLink, "_blank")}
                      className="flex items-center bg-[#4F9451] text-white px-4 py-2 rounded-lg hover:bg-[#3C7B41] transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 16.5v-9m0 9l-3.75-3.75M12 16.5l3.75-3.75M3.75 12h16.5M4.5 19.5h15"
                        />
                      </svg>
                      Download PDF
                    </button>
                  </td>
                  <td className="px-4 py-2">{prescription.receivedDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionPage;
