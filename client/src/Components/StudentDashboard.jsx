import React, { useState } from 'react';

function StudentDashboard() {
  const [faculty,_setFaculty] = useState('');
  const [subject,_setSubject] = useState('');

  const handleFacultyChange = (e) => {
    setFaculty(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  return (
    <div className="flex h-screen">
      <div className="sidebar w-64 bg-gray-200 p-4">
        <h2 className="text-lg font-bold mb-4">Select Faculty and Subject</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Faculty</label>
          <select
            value={faculty}
            onChange={handleFacultyChange}
            className="block w-full p-2 pl-10 text-sm text-gray-700"
          >
            <option value="">Select Faculty</option>
            <option value="Faculty 1">Faculty 1</option>
            <option value="Faculty 2">Faculty 2</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Subject</label>
          <select
            value={subject}
            onChange={handleSubjectChange}
            className="block w-full p-2 pl-10 text-sm text-gray-700"
          >
            <option value="">Select Subject</option>
            <option value="Subject 1">Subject 1</option>
            <option value="Subject 2">Subject 2</option>
          </select>
        </div>
      </div>
      <div className="flex-1 p-4">
        <h2 className="text-lg font-bold mb-4">Feedback Form</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Rating Scale</label>
            <div className="flex justify-between mb-2">
              <label>Subject Knowledge</label>
              <div className="rating-scale">
                <input
                  type="radio"
                  id="rating-1"
                  name="rating"
                  value="1"
                  className="mr-2"
                />
                <input
                  type="radio"
                  id="rating-2"
                  name="rating"
                  value="2"
                  className="mr-2"
                />
                <input
                  type="radio"
                  id="rating-3"
                  name="rating"
                  value="3"
                  className="mr-2"
                />
                <input
                  type="radio"
                  id="rating-4"
                  name="rating"
                  value="4"
                  className="mr-2"
                />
                <input
                  type="radio"
                  id="rating-5"
                  name="rating"
                  value="5"
                  className="mr-2"
                />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Optional Comments</label>
            <textarea
              className="block w-full p-2 pl-10 text-sm text-gray-700"
              rows="4"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default StudentDashboard;