import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Logo1 from '../Logo/Logo1'
import Nav from './Navbar.module.css'
import Button from '../Button\'S/Button'

export default function Navbar() {
    
  return (
    <div className={Nav.main_container}>
       
        <nav className={Nav.conatiner}>
        <Logo1/>
        
            <ul>
                <li ><Link to="/">Home</Link></li>   
                <li ><Link to="/About">About</Link></li>  
                <li><Link to="/Clientstories">Client stories</Link></li>   
                <li><Link to="/ContactUs">Contact Us</Link></li> 
                </ul>
                <Button/>
        </nav>
        
        
        
    </div>

  )
}
