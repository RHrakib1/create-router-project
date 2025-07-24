import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Home() {
  return (
    <div>
      <div className='max-w-6xl mx-auto'>
        <Navbar></Navbar>
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}
