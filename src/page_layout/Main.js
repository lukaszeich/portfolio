import React from 'react'

import {Routes, Route} from 'react-router-dom'

import About from '../pages/About'
import MainPage from '../pages/MainPage'
import Project1 from '../pages/Project1'
import Project2 from '../pages/Project2'

const Main = () => {
    return (
        <Routes>
            <Route exact path="/" element={<MainPage/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/project1" element={<Project1/>} />
            <Route path="/project2" element={<Project2/>} />
            <Route path="*" element={<Project1/>} />
        </Routes>
    )
}

export default Main;