//1. Import Area
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'

//2. Defination Area
export default function Layout() {
  return (
    <>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
  )
}

//3. Export Area
