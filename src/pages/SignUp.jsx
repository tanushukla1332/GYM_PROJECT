import React, { useState } from 'react'
import Login from "./Login.module.css"
import { Link } from "react-router-dom";

export default function SignUpPage() {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[userName,setUserName]=useState("")
    const getUsersdata = () => {
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
    
    function handleSumbit(event){
         event.preventDefault()
         const users=getUsersdata()
         users.push({
            userName,
            email,
            password,


         })
         localStorage.setItem('users', JSON.stringify(users));
    }
    function handleUserName(event){
        setUserName(event.target.value)
    }
    function handleChangeEmail (event){
        setEmail(event.target.value)
    
        //localStorage.setItem()
        //console.log(mail)        
    }
    function handleChangePass(event){
        setPassword (event.target.value)
        // console.log(value)
    }
  return (
    <div className={Login.mainContainer}>
    <div className={Login.from} style={{textAlign:'center'}}>
        <img className={Login.image} src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
        alt="profile"/>
        <form onSubmit={handleSumbit} >
          <div className={Login.inputDiv}>
        UserName : <input type="text" placeholder='Enter your username' onChange={handleUserName} /><br /><br />
        Email:  <input type="email" placeholder='Enter your email' onChange={handleChangeEmail } /><br /><br />
        Password: <input type="password" placeholder='Enter your password'  onChange={ handleChangePass}/><br /><br />
        
        {/* <input  type="submit"/> */}
        <div className={Login.buttonDiv}>
    <p className="registerLink">
      Already an account?
      <br />
      <Link to="/signin">SignIn</Link>
    </p>
    <button className={Login.button}>SignUp</button>
  </div>
        </div>
        </form>
    </div>
    </div>
   
  )
}
