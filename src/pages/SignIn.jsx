import React,{useState,useEffect} from 'react'
import Login from "./Login.module.css"
import { Link } from "react-router-dom";

export default function SignIn() {
  const[userList,setUserList]=useState([])
  useEffect(()=>{

    let data=JSON.parse(localStorage.getItem('users'));
    setUserList(data);
  },[])
  // console.log(userList)
    return (
      <>
        
        <div className={Login.mainContainer}>
          <div className={Login.from}>
            <img
              className={Login.image}
              src="https://png.pngtree.com/png-vector/20190114/ourmid/pngtree-vector-add-user-icon-png-image_313043.jpg"
              alt=""
            />
            <div className={Login.inputDiv}>
            Email:<input type="email"
                placeholder="EMAIL"
              />
              <br />
            
              Password:<input type="password" className={Login.passwordInput} placeholder="PASSWORD" />
            </div>
            <br />
            <div className={Login.buttonDiv}>
    <p className={Login.registerLink}>
      Don't have an account?
      <br />
      <Link to="/signup">SignUp</Link>
    </p>
    <button className={Login.button}>SignIn</button>
  </div>
          </div>
        </div>
      </>
    );
  }