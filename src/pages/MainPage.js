import React from 'react'

import logo from '../img/react.png'

import '../css/MainPage.css'

const MainPage = () => {
    return (
        <div className='mainPage'>
          <h1>Welcome on my portfolio site!</h1>
            <img src={logo}></img>
          <p>Whole application was created using React.js with additional modules like React Router DOM or React Redux. I wish you pleasant experiences while viewing this application.</p>
        </div>
    )
}

export default MainPage;