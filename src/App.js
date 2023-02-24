//1. Import Area
// import someDefaultImport from somelocation/somelibrary
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import { routes } from './routes/Routes'

//2. Defination Area
// Function Defination Area
export default function App() {
    // Every function return something
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {/*array.map(currentValue,index,arr)*/}
                {
                    routes .map((cv,idx,arr)=>{
                        return <Route path={cv.path} element={cv.element}></Route>
                    })
                }
                </Route> 
                <Route path='/register' element={<Register />}></Route>
                <Route path='*' element={<NotFound />}></Route>              
            </Routes>
        </BrowserRouter>
  )
}

//3. Export Area
