import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Menu from "../src/components/menu/Menu.jsx"
import Form from "../src/components/form/Form.jsx"
import Home from "../src/components/home/Home"
import Image, { imageFromApi } from "./components/image/Image.jsx"
import User from "../src/components/user/User.jsx"

import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} path="/">
      <Route element={<Home />} path="/home" />
      <Route element={<Menu />} path="menu" />
      <Route element={<Form />} path="form" />
      <Route element={<Image />} path="image" loader={imageFromApi} />
      <Route element={<User />} path="user/:userid" />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
