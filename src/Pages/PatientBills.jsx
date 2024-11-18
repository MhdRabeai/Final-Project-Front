import React from "react";

const PatientBills = () => {
  const bills = [
    {
      id: 1,
      date: "2024-11-10",
      service: "Consultation Fee",
      amount: "$100",
      status: "Paid",
    },
    {
      id: 2,
      date: "2024-11-12",
      service: "Blood Test",
      amount: "$50",
      status: "Pending",
    },
    {
      id: 3,
      date: "2024-11-15",
      service: "X-Ray",
      amount: "$200",
      status: "Overdue",
    },
  ];

  const statusColors = {
    Paid: "bg-green-100 text-green-600",
    Pending: "bg-green-100 text-green-600",
    Overdue: "bg-green-100 text-green-600",
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Patient Bills</h1>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-[#4F9451]">Billing Information</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-[#4F9451]">
              <tr>
                <th className="px-4 py-2 text-left text-white">Date</th>
                <th className="px-4 py-2 text-left text-white">Service</th>
                <th className="px-4 py-2 text-right text-white">Amount</th>
                <th className="px-4 py-2 text-left text-white">Status</th>
              </tr>
            </thead>
            <tbody>
              {bills.map((bill) => (
                <tr key={bill.id} className="border-b">
                  <td className="px-4 py-2">{bill.date}</td>
                  <td className="px-4 py-2">{bill.service}</td>
                  <td className="px-4 py-2 text-right">{bill.amount}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded ${statusColors[bill.status]}`}
                    >
                      {bill.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PatientBills;
