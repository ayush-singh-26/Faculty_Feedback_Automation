import React, { useState } from 'react';
import { motion } from 'framer-motion';

function StudentDashboard() {
  const [faculty, setFaculty] = useState('');
  const [subject, setSubject] = useState('');
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState('');

  const handleFacultyChange = (e) => {
    setFaculty(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleCommentsChange = (e) => {
    setComments(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    alert(`Feedback submitted!\nFaculty: ${faculty}\nSubject: ${subject}\nRating: ${rating}\nComments: ${comments}`);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50"
    >
      <div className="flex flex-col lg:flex-row h-full">
        {/* Sidebar */}
        <motion.div 
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 50 }}
          className="w-full lg:w-64 bg-gradient-to-b from-indigo-600 to-purple-600 p-6 text-white shadow-xl"
        >
          <motion.h2 
            whileHover={{ scale: 1.02 }}
            className="text-2xl font-bold mb-6 text-center"
          >
            Feedback Portal
          </motion.h2>
          
          <div className="space-y-6">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Faculty</label>
              <motion.select
                whileFocus={{ scale: 1.02 }}
                value={faculty}
                onChange={handleFacultyChange}
                className="block w-full p-3 rounded-lg bg-indigo-500 text-white border border-indigo-400 focus:ring-2 focus:ring-purple-300 focus:outline-none"
              >
                <option value="">Select Faculty</option>
                <option value="Faculty 1">Faculty 1</option>
                <option value="Faculty 2">Faculty 2</option>
                <option value="Faculty 3">Faculty 3</option>
              </motion.select>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Subject</label>
              <motion.select
                whileFocus={{ scale: 1.02 }}
                value={subject}
                onChange={handleSubjectChange}
                className="block w-full p-3 rounded-lg bg-indigo-500 text-white border border-indigo-400 focus:ring-2 focus:ring-purple-300 focus:outline-none"
              >
                <option value="">Select Subject</option>
                <option value="Subject 1">Subject 1</option>
                <option value="Subject 2">Subject 2</option>
                <option value="Subject 3">Subject 3</option>
              </motion.select>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="p-4 bg-indigo-500 bg-opacity-30 rounded-lg border border-indigo-400"
            >
              <h3 className="text-sm font-medium mb-2">Selected:</h3>
              <p className="text-xs">{faculty || '—'} / {subject || '—'}</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex-1 p-6 lg:p-10"
        >
          <motion.div 
            whileHover={{ y: -2 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
          >
            <div className="p-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
              <h2 className="text-2xl font-bold">Feedback Form</h2>
              <p className="text-purple-100">Share your valuable feedback</p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-4">Rating Scale</h3>
                
                <div className="space-y-6">
                  {/* Rating Question 1 */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <label className="block text-sm font-medium text-gray-700 mb-3">Subject Knowledge</label>
                    <div className="flex items-center justify-between">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <motion.div
                          key={star}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          className="flex flex-col items-center"
                        >
                          <input
                            type="radio"
                            id={`knowledge-${star}`}
                            name="knowledge"
                            value={star}
                            checked={rating === star}
                            onChange={() => handleRatingChange(star)}
                            className="hidden"
                          />
                          <label 
                            htmlFor={`knowledge-${star}`}
                            className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer transition-all 
                              ${rating >= star ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'}`}
                          >
                            {star}
                          </label>
                          <span className="text-xs mt-1 text-gray-500">
                            {star === 1 ? 'Poor' : star === 5 ? 'Excellent' : ''}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Rating Question 2 */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <label className="block text-sm font-medium text-gray-700 mb-3">Teaching Methodology</label>
                    <div className="flex items-center justify-between">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <motion.div
                          key={star}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          className="flex flex-col items-center"
                        >
                          <input
                            type="radio"
                            id={`methodology-${star}`}
                            name="methodology"
                            value={star}
                            className="hidden"
                          />
                          <label 
                            htmlFor={`methodology-${star}`}
                            className="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer transition-all bg-gray-200 text-gray-600 hover:bg-purple-400 hover:text-white"
                          >
                            {star}
                          </label>
                          <span className="text-xs mt-1 text-gray-500">
                            {star === 1 ? 'Poor' : star === 5 ? 'Excellent' : ''}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Comments</label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  value={comments}
                  onChange={handleCommentsChange}
                  className="block w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-300 focus:border-purple-500 focus:outline-none transition-all"
                  rows="4"
                  placeholder="Share any additional feedback..."
                />
              </div>
              
              <div className="flex justify-end">
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: "0px 5px 15px rgba(124, 58, 237, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg shadow-md transition-all"
                >
                  Submit Feedback
                </motion.button>
              </div>
            </form>
          </motion.div>
          
          {/* Status Card */}
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Feedback Status</h3>
              <p className="text-gray-600">Your feedback helps us improve the learning experience.</p>
              
              <motion.div 
                whileHover={{ y: -3 }}
                className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200 flex items-start"
              >
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-green-800">Feedback Received</h4>
                  <p className="text-sm text-green-600">Thank you for your valuable input!</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default StudentDashboard;