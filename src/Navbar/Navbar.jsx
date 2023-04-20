
import Logo1 from '../Logo/Logo1';
import Button from "../Buttons/Button";
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Nav from './Navbar.module.css'
import { FaBars, FaTimes } from 'react-icons/fa'


export default function Navbar() {
  const [show , setShow] =useState(false)
  return (
    <div  className={Nav.main} >
        <div className={Nav.logo}>
          <Logo1/>
        </div>
        <div className={`${show ?Nav.m_links:Nav.links}`}>
            <li className={Nav.link}><Link to='/'>Home</Link> </li>
            <li className={Nav.link}><Link to='/About'>About</Link> </li>
            <li className={Nav.link}><Link to="/contact-us">Contact Us</Link> </li>
            <li className={Nav.link}><Link to="/client-stories" >Client Stories</Link> </li>
            <Button/>
        </div>
        <div className={Nav.mobile_navbar_btn}>
                <div>
                    {
                        show ? (
                            <span className={Nav.close} onClick={() => setShow(false)}>
                                <FaBars />
                            </span>
                        ) : (
                            <span className={Nav.menu} onClick={() => setShow(true)}>
                                <FaTimes/>
                            </span>
                        )
                    }

                </div>
            </div>
      
    </div>
  )
}