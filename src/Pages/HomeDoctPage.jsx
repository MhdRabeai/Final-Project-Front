import React from "react";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { GlobeAltIcon, UserAddIcon, CashIcon } from "@heroicons/react/outline";
import BarChart from "../Components/BarChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const HomeDoctPage = () => {
  const chartDataLine = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Number of Visits",
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: "#4F9451",
        tension: 0.1,
      },
    ],
  };

  const chartDataPie = {
    labels: ["Meal", "famel"],
    datasets: [
      {
        data: [50, 100],
        backgroundColor: ["#007BFF", "#4F9451"],
        hoverOffset: 4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Visit Statistics (Pie Chart)",
      },
    },
  };

  return (
    <div className="bg-gray-100 p-4 flex flex-col">
      <h1 className="text-2xl font-bold text-center mb-6 md:mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-6">
  {/* Visits Card */}
  <div className="bg-blue-500 text-white p-4 sm:p-6 rounded-lg shadow-md hover:bg-blue-600 hover:scale-105 transition-all duration-300">
    <div className="flex items-center space-x-4">
      <GlobeAltIcon className="h-9 w-10 text-white" />
      <div>
        <h3 className="text-lg sm:text-xl font-semibold">Visits</h3>
        <p className="text-xl sm:text-2xl">12,345</p>
      </div>
    </div>
  </div>

  {/* New Patients Card */}
  <div className="bg-[#4F9451] text-white p-4 sm:p-6 rounded-lg shadow-md hover:bg-[#66A862] hover:scale-105 transition-all duration-300">
    <div className="flex items-center space-x-4">
      <UserAddIcon className="h-9 w-10 text-white" />
      <div>
        <h3 className="text-lg sm:text-xl font-semibold">New Patients</h3>
        <p className="text-xl sm:text-2xl">1,200</p>
      </div>
    </div>
  </div>

  {/* Sales Card */}
  <div className="bg-yellow-500 text-white p-4 sm:p-6 rounded-lg shadow-md hover:bg-yellow-600 hover:scale-105 transition-all duration-300">
    <div className="flex items-center space-x-4">
      <CashIcon className="h-9 w-10 text-white" />
      <div>
        <h3 className="text-lg sm:text-xl font-semibold">Sales</h3>
        <p className="text-xl sm:text-2xl">320</p>
      </div>
    </div>
  </div>
</div>


      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-6">
        <div className="bg-white p-4 sm:p-6 lg:p-4 xl:p-6 rounded-lg shadow-md w-full flex flex-col items-center justify-center">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center">
            Patient Visits
          </h3>
          <div className="lg:h-[350px] xl:h-[400px] h-full min-h-[250px] w-full flex items-center justify-center">
            <Line data={chartDataLine} options={chartOptions} />
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 lg:p-4 xl:p-6 rounded-lg shadow-md w-full flex flex-col items-center justify-center">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center">
            Statistics Breakdown
          </h3>
          <div className="lg:h-[350px] xl:h-[400px] w-full flex items-center justify-center">
            <Pie data={chartDataPie} options={chartOptions} />
          </div>
        </div>
      </div>

      <div className="mb-6 ">
        <BarChart />
      </div>
    </div>
  );
};

export default HomeDoctPage;
