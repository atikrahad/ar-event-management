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
import EventDetails from './Pages/EventDetails'
import Privateroute from './Sharedcomponent/Privateroute'
import Profile from './Pages/Profile'
import Selectedevent from './Pages/Selectedevent'
import Errorpage from './Pages/Errorpage'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/services',
        element: <Privateroute><Services></Services></Privateroute>
      },
      {
        path: '/selectedevent',
        element: <Privateroute><Selectedevent></Selectedevent></Privateroute>
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
      },
      {
        path: '/eventdetails',
        element: <Privateroute><EventDetails></EventDetails></Privateroute>
      },
      {
        path: '/profile',
        element: <Privateroute><Profile></Profile></Privateroute>
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
