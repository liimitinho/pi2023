import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="home" element={ < Home />}/>
          <Route path="landing" element={ < Landing />}/>
          <Route path="login" element={ < Login />}/>
          <Route path="register" element={ < Register />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
