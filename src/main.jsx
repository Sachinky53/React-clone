import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {path:"",
        element:<Home />
      },{
        path:"about",
        element:<About />
      },
      {
        path:"contact",
        element:<Contact />
      },
      {
        path:"user/:userid",
        element:<User />
      }

    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
