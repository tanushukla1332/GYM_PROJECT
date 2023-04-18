import React,{useState,useEffect} from 'react'
import Login from "./Login.module.css"

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
              <input
                className={Login.emailInput}
                placeholder="EMAIL"
              />
              <br />
            
              <input className={Login.passwordInput} placeholder="PASSWORD" />
            </div>
            <br />
            <button className={Login.button}>SignIn</button>
          </div>
        </div>
      </>
    );
  }