import React from "react";
import { MdOutlineDownloadDone } from "react-icons/md";

const SessionTable = () => {
  const sessions = [
    { id: 1, sessionName: "Therapy Session 1", date: "2024-11-15", status: "Completed" },
    { id: 2, sessionName: "Therapy Session 2", date: "2024-11-22", status: "Upcoming" },
    { id: 3, sessionName: "Therapy Session 3", date: "2024-12-01", status: "Cancelled" },
  ];

  const statusColors = {
    Completed: "bg-green-100 text-green-600",
    Upcoming: "bg-green-100 text-green-600",
    Cancelled: "bg-green-100 text-green-600",
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Patient Session Status</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-[#4F9451]">
          <thead className="bg-[#4F9451]">
            <tr>
              <th className="px-4 py-2 text-left text-white">Session</th>
              <th className="px-4 py-2 text-left text-white">Date</th>
              <th className="px-4 py-2 text-left text-white">Status</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session) => (
              <tr key={session.id} className="border-b">
                <td className="px-4 py-2">{session.sessionName}</td>
                <td className="px-4 py-2">{session.date}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded ${statusColors[session.status]}`}
                  >
                    {session.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SessionTable;
