import React, { useState, useEffect } from 'react'
import Sign from "./Signin.module.css"
import { Link } from "react-router-dom";

export default function SignIn() {
  const [userList, setUserList] = useState([])
  const [email, setEmail] = useState("")
  const [paasword, setPassword] = useState("")
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem('users'));
    setUserList(data);
  }, [])
  console.log(userList)

  function handelsubmitButton() {

  }
  return (
    <>

      <div className={Sign.mainContainer}>
        <div className={Sign.from}>
          <img
            className={Sign.image}
            src="https://png.pngtree.com/png-vector/20190114/ourmid/pngtree-vector-add-user-icon-png-image_313043.jpg"
            alt=""
          />
          <div className={Sign.inputDiv}>
            Email:<input type="email" value={email} placeholder="enter your email" onChange={(e) => setEmail(e.target.value)}/>
            <br />

            Password:<input type="password" value={paasword} className={Sign.passwordInput} placeholder="Enter your paasword" onChange={(e) => setPassword(e.target.value)} />
          </div><br />
          <div className={Sign.buttonDiv}>
            <p className={Sign.registerLink}>
              Don't have an account?
              <br />
              <Link to="/signup">SignUp</Link>
            </p>
            <button className={Sign.button} onClick={handelsubmitButton}>Sign in</button>
          </div>
        </div>
      </div>
    </>
  );
}