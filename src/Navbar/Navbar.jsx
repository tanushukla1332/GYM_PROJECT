import React from 'react'
import {Link} from 'react-router-dom'
import Logo1 from '../Logo/Logo1'
import Nav from './Navbar.module.css'
import Button from '../Button\'S/Button'

export default function Navbar() {
  return (
    <div className={Nav.main_container}>
        <nav className={Nav.conatiner}>
            <ul>
            <Logo1/>
                <li ><Link to="/">Home</Link></li>   
                <li ><Link to="/About">About</Link></li>  
                <li><Link to="/Clientstories">Client stories</Link></li>   
                <li><Link to="/ContactUs">Contact Us</Link></li>   
                 <Button/>
            </ul>
        </nav>
        
    </div>

  )
}
