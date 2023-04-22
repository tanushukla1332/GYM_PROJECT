import React, { useState, useEffect } from "react";
import Sign from "./Signin.module.css";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [userList, setUserList] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("users"));
    setUserList(data);

    // Check if user is already signed in
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      nav("/home");
    }
  }, [nav]);

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function handleSumbit(event) {
    event.preventDefault();
  
    setEmail('')
    setPassword('')
    // Validate email and password
    let isValid = true;
    if (!email || !validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    }
    if (!password) {
      setPasswordError("Please enter your password.");
      isValid = false;
    }
    if (password.length < 8) {
      setPasswordError("Please enter a password with at least 8 characters.");
      isValid = false;
    }
  
    if (isValid) {
      // Check if user is in the user list
      if (userList.length > 0) {
        const foundUser = userList.find(
          (user) => user.email === email && user.password === password
        );
        if (foundUser) {
          localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
          alert("You have successfully signed in.");
          nav("/home");
        } else {
          alert("Incorrect email or password.");
        }
      } else {
        alert("No user found. Please sign up first.");
      }
    }
  
    setEmail('')
    setPassword('')
  }
  

  // If user is already signed in, redirect to the homepage

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      nav("/home");
    }
  }, [nav]);

  return (
    <>
      <div className={Sign.mainContainer}>
        <div className={Sign.from}>
          <img
            className={Sign.image}
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
            alt=""
          />
          <form onSubmit={handleSumbit}>
            <div className={Sign.inputDiv}>
              <p>Email:</p>
              <input
                type="email"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <div className={Sign.error}>{emailError}</div>}
              <br />
              <p> Password:</p>
              <input
                type="password"
                value={password}
                className={Sign.passwordInput}
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && (
                <div className={Sign.error}>{passwordError}</div>
              )}
            </div>
            <br />
            <div className={Sign.buttonDiv}>
              <p className={Sign.registerLink}>
                Don't have an account?
                <br />
                <Link to="/signup">Sign up</Link>
              </p>
              <button className={Sign.button}>Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
