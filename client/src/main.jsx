import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginAsAdmin from './pages/LoginAsAdmin.jsx'
import Hero_Section from './components/Hero_Section.jsx'
import Featured_section from './components/Featured_section.jsx'
import FeedbackBarChart from './pages/LandingPage.jsx'
import StudentDashboard from './pages/StudentDashboard.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element : <App/>,
    children : [
      {
        index : true , element : (
          <>
          
          <Hero_Section/>
          <Featured_section/>
          </>
        )
      },
      {path : "login" , element: <LoginAsAdmin/>},
      {path : "feedback-form", element : <StudentDashboard/>},
      {path : ""}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router}/>
  </StrictMode>,
)
