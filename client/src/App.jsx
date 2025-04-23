import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StudentDashboard from './pages/StudentDashboard'
import LoginAsAdmin from './pages/LoginAsAdmin'
import LandingPage from './pages/LandingPage'
import AdminDashboard from './pages/AdminDashboard'
import Homepage from './pages/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Homepage />
      <StudentDashboard />
      <LoginAsAdmin />
      <LandingPage />
      <AdminDashboard />
    </>
  )
}

export default App
