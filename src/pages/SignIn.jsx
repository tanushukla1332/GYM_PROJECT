import React, { useState, useEffect } from "react";
import styles from './Signin.module.css';

import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [userList, setUserList] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("users")) || [];
    setUserList(data);
  }, []);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      nav("/home");
    }
  }, [nav]);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmailError("");
    setPasswordError("");

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
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.form}>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputDiv}>
            <h3>Login Form</h3>
            <p>Email:</p>
            <input
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <div className={styles.error}>{emailError}</div>}
            <br />
            <p> Password:</p>
            <input
              type="password"
              value={password}
              className={styles.passwordInput}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && (
              <div className={styles.error}>{passwordError}</div>
            )}
          </div>
          <br />
          <div className={styles.buttonDiv}>
            <p className={styles.registerLink}>
              Don't have an account?
              <br />
              <Link to="/signup">Sign up</Link>
            </p>
            <button className={styles.button}>Sign in</button>
          </div>
        </form>
      </div>
    </div>
  );
}
