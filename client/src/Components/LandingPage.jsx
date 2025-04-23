import React from 'react';

function LandingPage() {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-md mx-auto p-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Faculty Feedback Automation System
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Simplify faculty feedback collection and analysis
        </p>
        <div className="flex justify-center mb-4">
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
            Login as Admin
          </button>
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded ml-4">
            Login as Student
          </button>
        </div>
        <div className="hero-section">
          <img
            src="illustration-hero.jpg"
            alt="Hero illustration"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;