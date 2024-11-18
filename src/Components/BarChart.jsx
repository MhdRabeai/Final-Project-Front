import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Website Visitors",
        data: [10000, 7000, 8000, 12000, 6000, 10000, 4000],
        backgroundColor: "#4F9451",
      },
      {
        label: "booked sessions",
        data: [5000, 3000, 4000, 8000, 5000, 2000, 3000],
        backgroundColor: "rgba(107, 114, 128, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Page views and downloads (Bar Chart)",
      },
    },
  };

  return (
    <div className="max-w-4xl mx-auto p-5 bg-white rounded-lg shadow-lg">
      <Bar data={data} options={options} />
      <div className="text-[rgba(107,114,128,0.6)]">
        <p className="text-[#1a1d1ac0]">
          Total: <span className="text-[#4F9451]">1.3M</span> (
          <span className="text-[rgba(107,114,128,0.6)]">-8%</span>)
        </p>
      </div>
    </div>
  );
};

export default BarChart;
