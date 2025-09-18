import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Myprofile from './pages/Myprofile'
import MyApointments from './pages/MyApointments'
import About from './pages/About'
import Appointments from './pages/Appointments'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='container mx-auto px-4 md:px-12'>
      <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/doctors' element={<Doctors/>}/>
      <Route path='/doctors/:speciality' element={<Doctors/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
      <Route path='/my-profile' element={<Myprofile/>}/>
      <Route path='/my-appointments' element={<MyApointments/>}/>
      <Route path='/appointment/:docId' element={<Appointments/>}/>
     </Routes>
      <Footer/>
    </div>
  )
}

export default App