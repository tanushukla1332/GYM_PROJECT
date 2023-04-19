import React, { useState } from 'react';
import Sign from './Signin.module.css';
import { Link } from 'react-router-dom';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [error, setError] = useState('');

  const getUsersData = () => {
    const users = localStorage.getItem('users'); // getting data
    try {
      if (users) {
        // users is there
        return JSON.parse(users); // parsing
      }
    } catch (error) {
      return [];
    }
    return [];
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!userName || !email || !password) {
      setError('Please fill all fields');
      return;
    }
    if (!validateEmail(email)) {
      setError('Invalid email format');
      return;
      
    } else if (password.length<=8)
    alert("plz enter required 8 word")
    const users = getUsersData();
    users.push({
      userName,
      email,
      password,
    });
    localStorage.setItem('users', JSON.stringify(users));
    setError('');
    setUserName('');
    setEmail('');
    setPassword('');
  };

  const handleUserName = (event) => {
    setUserName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePass = (event) => {
    setPassword(event.target.value);
  };

  const validateEmail = (email) => {
    // source: https://stackoverflow.com/a/46181/13924966
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className={Sign.mainContainer}>
      <div className={Sign.from}>
        <img
          className={Sign.image}
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
          alt="profile"
        />
        <form onSubmit={handleSubmit}>
          <div className={Sign.inputDiv}>
            UserName :{' '}
            <input
              type="text"
              placeholder="Enter your username"
              value={userName}
              onChange={handleUserName}
            />
            <br />
            Email:{' '}
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleChangeEmail}
            />
            <br />
            Password:{' '}
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handleChangePass}
            />
            <br />
          </div>
          {error && <p className={Sign.error}>{error}</p>}
          <br />
          <div className={Sign.buttonDiv}>
            <p className={Sign.registerLink}>
              Already have an account?
              <br />
              <Link to="/signin">SignIn</Link>
            </p>
            <button className={Sign.button}>SignUp</button>
          </div>
        </form>
      </div>
    </div>
  );
}
