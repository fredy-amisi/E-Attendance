import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Index from './Pages/Index';
import Navbar from './Components/Navbar';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Footer from './Components/Footer';
import About from './Pages/About';
import Attendance from './Pages/Attendance';
import Courses from './Pages/Courses';
import Admin from './Pages/Users';
import AdminDashboard from './Pages/AdminDashboard';
import EnrollPage from './Pages/EnrollPage';

export default function App(){
  return(
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Index/>} />
      <Route path="/Index" element={<Index/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Admin" element={<Admin/>} />
      <Route path="/Attendance" element={<Attendance/>} />
      <Route path="/Courses" element={<Courses/>} />
      <Route path="/AdminDashboard/*" element={<AdminDashboard/>} />
      <Route path="/EnrollPage" element={<EnrollPage/>} />


    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

