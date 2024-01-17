import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Layout from './Component/Layout/Layout.jsx'
import Home from './Component/Home.jsx'
import Register from './Component/Register.jsx'
import Login from './Component/Login.jsx'
import AuthProviders from './providers/AuthProviders.jsx'
import Order from './Component/Order.jsx'
import PrivateRoute from './Route/PrivateRoute.jsx'
import Profile from './Component/Profile.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },   
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      
      {
        path: "/order",
        element:<PrivateRoute><Order></Order></PrivateRoute>

      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProviders>
   <RouterProvider router={router}></RouterProvider>
   </AuthProviders>
  </React.StrictMode>,
)
