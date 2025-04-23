import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StudentDashboard from './pages/StudentDashboard'
import LoginAsAdmin from './pages/LoginAsAdmin'
import LandingPage from './pages/LandingPage'
import AdminDashboard from './pages/AdminDashboard'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
