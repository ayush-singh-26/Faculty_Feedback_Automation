import React from 'react';
// at the top of AdminDashboard.jsx or a separate ChartComponent.jsx
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js';
  
  import { Bar } from 'react-chartjs-2';
  
  // Register chart components
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  

function AdminDashboard() {
  return (
    <div className="flex h-screen">
      <div className="sidebar w-64 bg-gray-200 p-4">
        <h2 className="text-lg font-bold mb-4">Admin Dashboard</h2>
        <ul className="mb-4">
          <li>
            <a
              href="#"
              className="block text-gray-700 hover:text-gray-900 transition duration-300"
            >
              View Feedback
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-gray-700 hover:text-gray-900 transition duration-300"
            >
              Manage Faculty
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-gray-700 hover:text-gray-900 transition duration-300"
            >
              Manage Subjects
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-gray-700 hover:text-gray-900 transition duration-300"
            >
              Export Reports
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-4">
        <h2 className="text-lg font-bold mb-4">Feedback Data</h2>
        <table className="w-full mb-4">
          <thead>
            <tr>
              <th className="text-gray-700">Faculty</th>
              <th className="text-gray-700">Subject</th>
              <th className="text-gray-700">Average Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Faculty 1</td>
              <td>Subject 1</td>
              <td>4.2</td>
            </tr>
            <tr>
              <td>Faculty 2</td>
              <td>Subject 2</td>
              <td>4.5</td>
            </tr>
          </tbody>
        </table>
        <Bar
  data={{
    labels: ['Faculty_1', 'Faculty_2', 'Faculty_3'],
    datasets: [
      {
        label: 'Average Rating',
        data: [4.2, 4.5, 4.1],
        backgroundColor: ['#4CAF50', '#8BC34A', '#455A64'],
      },
    ],
  }}
  options={{
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Faculty Feedback Overview',
      },
    },
  }}
/>

        <div className="flex justify-end mb-4">
          <button
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          >
            Export to PDF
          </button>
          <button
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded ml-4"
          >
            Export to Excel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;