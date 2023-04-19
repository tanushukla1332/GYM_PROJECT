import React,{useState,useEffect} from 'react'
import Sign from "./Signin.module.css"
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
        
        <div className={Sign.mainContainer}>
          <div className={Sign.from}>
            <img
              className={Sign.image}
              src="https://png.pngtree.com/png-vector/20190114/ourmid/pngtree-vector-add-user-icon-png-image_313043.jpg"
              alt=""
            />
            <div className={Sign.inputDiv}>
            Email:<input type="email"
                placeholder="EMAIL"
              />
              <br />
            
              Password:<input type="password" className={Sign.passwordInput} placeholder="PASSWORD" />
            </div>
            <br />
            <div className={Sign.buttonDiv}>
    <p className={Sign.registerLink}>
      Don't have an account?
      <br />
      <Link to="/signup">SignUp</Link>
    </p>
    <button className={Sign.button}>SignIn</button>
  </div>
          </div>
        </div>
      </>
    );
  }