import React from 'react';
import { Link} from 'react-router-dom';
import Logo1 from '../Logo/Logo1';
import Nav from './Navbar.module.css';
import Button from "../Buttons/Button";

export default function Navbar() {
  return (
    <div className={Nav.main_container}>
      <nav className={Nav.container}>
        <Logo1 />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/client-stories">Client Stories</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
        <Button />
      </nav>
    </div>
  );
}
