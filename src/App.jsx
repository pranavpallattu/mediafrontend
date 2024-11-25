import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Landingpage from './pages/Landingpage'
import Home from './pages/Home'
import Watchhistory from './pages/Watchhistory'
import Header from './components/Header'


function App(){
  return (
    <>
    <Header/>
    <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/home/watchhistory' element={<Watchhistory/>}/>


    </Routes>
    <Footer/>
    </>
  )
}

export default App
