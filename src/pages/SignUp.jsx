import React, { useState } from "react";
import signUp from './Signup.module.css'
import { Link } from "react-router-dom";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");

  const getUsersData = () => {
    const users =localStorage.getItem("users");
    try {
      if (users) {
       
        return JSON.parse(users); 
      }
    } catch (error) {
      return [];
    }
    return [];
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!userName || !email || !password) {
      setError("Please fill all fields");
      return;
    }
    if (!validateEmail(email)) {
      setError("Invalid email format");
      return;
    }
    if (password.length < 8) {
      alert("plz enter required 8 word");
      return;
    }
    const users = getUsersData();
    users.push({
      userName,
      email,
      password,
    });
    localStorage.setItem("users", JSON.stringify(users));
    alert('sign up done successfully')
    setError("");
    setUserName("");
    setEmail("");
    setPassword("");
  };

  const validateEmail = (email) => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className={signUp.mainContainer}>
      <div className={signUp.form}>
        <form onSubmit={handleSubmit}>
          <div className={signUp.inputDiv}>
            <p>UserName :</p>
            <input
              type="text"
              placeholder="Enter your username"
              value={userName}
              onChange={(e)=>setUserName(e.target.value)}
            />
            <br />
            <p>Email:</p>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <br />
            <p>Password:</p>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            <br />
          </div>
          {error && <p className={signUp.error}>{error}</p>}
          <br />
          <div className={signUp.buttonDiv}>
            <p className={signUp.registerLink}>
              Already have an account.
              <Link to="/" className={signUp.link}>SignIn</Link>
            </p>
            <button className={signUp.button}>SignUp</button>
          </div>
        </form>
      </div>
    </div>
  );
}
