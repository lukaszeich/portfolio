import React from 'react'
import {NavLink} from 'react-router-dom'

import '../css/Menu.css'

const Menu = ({click}) => {
    return (
        <ul>
            <li><NavLink to="/" onClick={click}>Home Page</NavLink></li>
            <li><NavLink to="/about" onClick={click}>About me</NavLink></li>
            <li><NavLink to="/project1" onClick={click}>To-Do App</NavLink></li>
            <li><NavLink to="/project2" onClick={click}>Calculator App</NavLink></li>
            <li><NavLink to="/project3" onClick={click}>Currencies Table</NavLink></li>
        </ul>
    )
}

export default Menu;