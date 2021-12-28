import React, {useState} from 'react';


import Footer from './page_layout/Footer'
import Main from './page_layout/Main'
import Menu from './page_layout/Menu'

import './css/App.css'

function App() {

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(prevState => !prevState)
  }

  return (
    
    <div className="App">
    <nav className={active ? "menu active" : "menu"}>
      <Menu click={handleClick}/>
      <div className={active ? "menuButton active" : "menuButton"} onClick={handleClick}><i className="fas fa-bars"></i></div>
    </nav>
    <main className={active? "main active" : "main"}><Main/></main>
    <footer className='footer'><Footer/></footer>
    </div>

  );
}

export default App;
