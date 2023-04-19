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
  }, []);

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function handleSumbit(event) {
    event.preventDefault();

    // Validate email and password
    setEmailError("");
    setPasswordError("");
    let isValid = true;
    if (!email || !validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    }
    if (!password) {
      setPasswordError("Please enter your password.");
      isValid = false;
    } else if (password.length <= 4) alert("plz enter required 8 word");

    if (isValid) {
      // Check if user is in the user list
      const foundUser = userList.find(
        (user) => user.email === email && user.password === password
      );
      if (foundUser) {
        localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
        alert("You have successfully signed in.");
        nav("/");
      } else {
        alert("Incorrect email or password.");
      }
    }
  }

  // If user is already signed in, redirect to the homepage
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      // nav("/");
    }
  }, [nav]);

  return (
    <>
      <div className={Sign.mainContainer}>
        <div className={Sign.from}>
          <img
            className={Sign.image}
            src="https://png.pngtree.com/png-vector/20190114/ourmid/pngtree-vector-add-user-icon-png-image_313043.jpg"
            alt=""
          />
          <form onSubmit={handleSumbit}>
            <div className={Sign.inputDiv}>
              Email:
              <input
                type="email"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <div className={Sign.error}>{emailError}</div>}
              <br />
              Password:
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
