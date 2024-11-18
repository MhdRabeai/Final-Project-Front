import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// استيراد مكون BarChart الذي قمت بإنشائه
import BarChart from '../Components/BarChart'; // تأكد من أنك قد أضفت BarChart في نفس المجلد أو المسار الصحيح

// تسجيل المكونات اللازمة من Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, LineElement, Title, Tooltip, Legend, ArcElement);

const HomeAdminPage = () => {
  const chartDataLine = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Number of Visits',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const chartDataPie = {
    labels: ['Visits', 'Sales', 'New Users'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#ff5733', '#33ff57', '#3357ff'],
        hoverOffset: 4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Visit Statistics (Pie Chart)',
      },
    },
  };

  return (
    <div className="bg-gray-100 p-4 flex flex-col">
      <h1 className="text-2xl font-bold text-center mb-6 md:mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-6">
        <div className="bg-blue-500 text-white p-4 sm:p-6 rounded-lg shadow-md">
          <h3 className="text-lg sm:text-xl font-semibold">Visits</h3>
          <p className="text-xl sm:text-2xl">12,345</p>
        </div>
        <div className="bg-green-500 text-white p-4 sm:p-6 rounded-lg shadow-md">
          <h3 className="text-lg sm:text-xl font-semibold">New Patients</h3>
          <p className="text-xl sm:text-2xl">1,200</p>
        </div>
        <div className="bg-yellow-500 text-white p-4 sm:p-6 rounded-lg shadow-md">
          <h3 className="text-lg sm:text-xl font-semibold">Sales</h3>
          <p className="text-xl sm:text-2xl">320</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-6">
        {/* المخطط الخطي */}
        <div className="bg-white p-4 sm:p-6 lg:p-4 xl:p-6 rounded-lg shadow-md w-full flex flex-col items-center justify-center">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center">Patient Visits (Line Chart)</h3>
          <div className="lg:h-[350px] xl:h-[400px] h-full min-h-[250px] w-full flex items-center justify-center">
            <Line data={chartDataLine} options={chartOptions} />
          </div>
        </div>

        {/* المخطط الدائري */}
        <div className="bg-white p-4 sm:p-6 lg:p-4 xl:p-6 rounded-lg shadow-md w-full flex flex-col items-center justify-center">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center">Statistics Breakdown (Pie Chart)</h3>
          <div className="lg:h-[350px] xl:h-[400px] w-full flex items-center justify-center">
            <Pie data={chartDataPie} options={chartOptions} />
          </div>
        </div>
      </div>

      {/* إضافة المخطط البياني الشريطي */}
      <div className="mb-6 ">
        <BarChart /> {/* هنا يتم إضافة مكون BarChart */}
      </div>
    </div>
  );
};

export default HomeAdminPage;
