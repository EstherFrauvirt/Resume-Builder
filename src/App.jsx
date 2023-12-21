import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormResume from './components/FormResume'
import { DataProvider } from './context/data'
import Resume from './pages/resume'
import {
  BrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import UploadImage from './components/upImage'
import LoginIn from './components/login'
import Login from './components/login/Login'
import Home from './components/home'
import { UserProvider } from './context/users'
import ResponsiveAppBar from './components/navbar'

function App() {


  return (
    <>
      <UserProvider>
        <DataProvider>
          <BrowserRouter>
<ResponsiveAppBar/>

            <Routes>
              <Route path='/resume' element={<Resume />}></Route>
              <Route path='/home' element={<Home />}></Route>
              <Route path='/form' element={<FormResume />}></Route>
              <Route path='/uploadImage' element={<UploadImage />}></Route>
              <Route path='/' element={<LoginIn />}></Route>
              <Route path='/login' element={<Login />}></Route>
              

            </Routes>

          </BrowserRouter>
        </DataProvider>
      </UserProvider>
    </>
  )
}

export default App
