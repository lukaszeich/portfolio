import React from 'react'
import {NavLink} from 'react-router-dom'

import '../css/Menu.css'

const Menu = () => {
    return (
        <ul>
            <li><NavLink to="/">Strona główna</NavLink></li>
            <li><NavLink to="/about">O mnie</NavLink></li>
            <li><NavLink to="/project1">To-Do App</NavLink></li>
            <li><NavLink to="/project2">Kalkulator</NavLink></li>
        </ul>
    )
}

export default Menu;