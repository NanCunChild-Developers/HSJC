import React from 'react'
import Login from './pages/login'
import Home from './pages/home'
import Minecraft from './pages/minecraft'
import OpenAI from './pages/openai'
import CloudDrive from './pages/cloud-drive'
import RifleRange from './pages/rifle-range'
import WS_Test from './pages/WS_Test'
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/minecraft" element={<Minecraft />} />
        <Route path="/openai" element={<OpenAI />} />
        <Route path="/cloud-drive" element={<CloudDrive />} />
        <Route path="/rifle-range" element={<RifleRange />} />
        <Route path="/WS_Test" element={<WS_Test />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App