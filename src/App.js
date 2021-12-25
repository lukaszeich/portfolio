import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Footer from './page_layout/Footer'
import Header from './page_layout/Header';
import Main from './page_layout/Main'
import Menu from './page_layout/Menu'

import './css/App.css'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
    <header className='header'><Header/></header>
    <nav className='menu'><Menu/></nav>
    <main className='main'><Main/></main>
    <footer className='footer'><Footer/></footer>
    </div>
    </Router>
  );
}

export default App;
