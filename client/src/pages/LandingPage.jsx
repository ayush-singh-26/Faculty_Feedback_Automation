import React, { useEffect, useState } from 'react';
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
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion'; // Custom animation variants

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const FeedbackBarChart = () => {
  const [activeFaculty, setActiveFaculty] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const data = {
    labels: ['Dr. Sarah Johnson', 'Prof. Michael Chen', 'Dr. Emily Wilson'],
    datasets: [
      {
        label: 'Average Rating',
        data: [4.2, 4.5, 4.1],
        backgroundColor: (context) => {
          const index = context.dataIndex;
          return activeFaculty === index 
            ? 'rgba(124, 58, 237, 0.9)' 
            : [
                'rgba(99, 102, 241, 0.7)',
                'rgba(139, 92, 246, 0.7)',
                'rgba(168, 85, 247, 0.7)'
              ][index];
        },
        hoverBackgroundColor: 'rgba(124, 58, 237, 1)',
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#fff',
        barThickness: 50,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2000,
      easing: 'easeOutElastic',
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#4B5563',
          font: {
            size: 14,
            weight: 'bold',
            family: "'Inter', sans-serif",
          },
          padding: 20,
          usePointStyle: true,
        },
      },
      title: {
        display: true,
        text: 'Faculty Performance Metrics',
        color: '#111827',
        font: {
          size: 24,
          weight: 'bold',
          family: "'Inter', sans-serif",
        },
        padding: {
          top: 10,
          bottom: 30,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(17, 24, 39, 0.9)',
        titleFont: {
          size: 16,
          weight: 'bold',
          family: "'Inter', sans-serif",
        },
        bodyFont: {
          size: 14,
          family: "'Inter', sans-serif",
        },
        padding: 12,
        cornerRadius: 12,
        displayColors: false,
        callbacks: {
          label: (context) => {
            return `Average Rating: ${context.raw}/5`;
          },
          title: (context) => {
            return context[0].label;
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#374151',
          font: { 
            weight: '600',
            family: "'Inter', sans-serif",
            size: 14,
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 5,
        ticks: {
          color: '#374151',
          font: { 
            weight: '600',
            family: "'Inter', sans-serif",
          },
          stepSize: 0.5,
          callback: (value) => {
            if (value % 1 === 0) return value;
          },
        },
        grid: {
          color: '#E5E7EB',
          drawBorder: false,
        },
      },
    },
    onClick: (event, elements) => {
      if (elements.length > 0) {
        setActiveFaculty(elements[0].index);
      }
    },
  };

  const facultyDetails = [
    {
      name: 'Dr. Sarah Johnson',
      subject: 'Computer Science',
      courses: ['Data Structures', 'Algorithms'],
      rating: 4.2,
      feedback: "Excellent course structure and clear explanations."
    },
    {
      name: 'Prof. Michael Chen',
      subject: 'Mathematics',
      courses: ['Calculus', 'Linear Algebra'],
      rating: 4.5,
      feedback: "Makes complex topics approachable and engaging."
    },
    {
      name: 'Dr. Emily Wilson',
      subject: 'Physics',
      courses: ['Quantum Mechanics', 'Thermodynamics'],
      rating: 4.1,
      feedback: "Knowledgeable with great real-world examples."
    }
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <motion.div 
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="w-full max-w-6xl"
      >
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-center">
            <motion.h2 
              whileHover={{ scale: 1.02 }}
              className="text-3xl md:text-4xl font-bold text-white tracking-tight"
            >
              Faculty Feedback Analytics
            </motion.h2>
            <motion.p 
              whileHover={{ scale: 1.01 }}
              className="text-indigo-100 mt-3 text-lg"
            >
              Interactive visualization of faculty performance metrics
            </motion.p>
          </div>

          {/* Chart Area */}
          <div className="p-6 md:p-10">
            {isLoading ? (
              <div className="h-[400px] flex items-center justify-center">
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full"
                />
              </div>
            ) : (
              <div className="h-[400px] w-full relative">
                <Bar 
                  data={data} 
                  options={options} 
                  redraw={activeFaculty !== null}
                />
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute -bottom-8 left-0 right-0 text-center text-sm text-gray-500"
                >
                  Click on bars for detailed information
                </motion.div>
              </div>
            )}
          </div>

          {/* Faculty Details */}
          {activeFaculty !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-50 border-t border-gray-200 p-6 md:p-8"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">
                  {facultyDetails[activeFaculty].name}
                </h3>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFaculty(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Department</h4>
                  <p className="text-lg font-semibold text-indigo-600">
                    {facultyDetails[activeFaculty].subject}
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Average Rating</h4>
                  <div className="flex items-center">
                    <div className="text-lg font-semibold text-indigo-600 mr-2">
                      {facultyDetails[activeFaculty].rating}
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < Math.floor(facultyDetails[activeFaculty].rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Courses Taught</h4>
                  <div className="flex flex-wrap gap-1">
                    {facultyDetails[activeFaculty].courses.map((course, index) => (
                      <motion.span
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full"
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-white p-4 rounded-xl shadow-sm">
                <h4 className="text-sm font-medium text-gray-500 mb-2">Recent Feedback</h4>
                <motion.p 
                  whileHover={{ x: 5 }}
                  className="text-gray-700 italic"
                >
                  "{facultyDetails[activeFaculty].feedback}"
                </motion.p>
              </div>

              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="mt-6 flex justify-end"
              >
                <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors">
                  View Full Profile
                </button>
              </motion.div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FeedbackBarChart;