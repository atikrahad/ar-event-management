import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Root from './Pages/Root.jsx'
import Home from './Pages/Home.jsx'
import Services from './Pages/Services.jsx'
import About from './Pages/About'
import Login from './Pages/Login'
import Authprovider from './Sharedcomponent/Authprovider'
import Register from './Pages/Register'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/services',
        element: <Services></Services>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
    <RouterProvider router={router}/>
    </Authprovider>
  </React.StrictMode>,
)
