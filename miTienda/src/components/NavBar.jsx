import React from 'react'
import './navBar.css'
import CartWidget from './CartWidget'

const NavBar = () => {

    return (
        <header className="header">
        <a href="/" className="logo">Prana</a>

        <nav className="navbar">
           <a href={"/"}>Home</a>
           <a href="/">Paletas</a>
           <a href="/">Bases</a>
           <a href="/">Labiales</a>
           <CartWidget />
        </nav>
        
    </header>
    )
}

export default NavBar
