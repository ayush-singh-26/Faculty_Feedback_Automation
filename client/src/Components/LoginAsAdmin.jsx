import React, { useState } from 'react';

function LoginAsAdmin() {
  const [username,_setUsername] = useState('');
  const [password,_setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-md mx-auto p-4">
        <h2 className="text-lg font-bold mb-4">Login as Admin</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              className="block w-full p-2 pl-10 text-sm text-gray-700"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="block w-full p-2 pl-10 text-sm text-gray-700"
            />
          </div>
          <div className="flex justify-between mb-4">
            <button
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </button>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition duration-300"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginAsAdmin;