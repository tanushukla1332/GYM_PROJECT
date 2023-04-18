import React, { useState } from 'react'
export default function Loginpage() {

    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
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
            email,
            password,

         })
         localStorage.setItem('users', JSON.stringify(users));
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
    <div>
        <form onSubmit={handleSumbit}>
        Email:  <input type="email" placeholder='Enter your email' onChange={handleChangeEmail} /><br />
        Password: <input type="password" placeholder='Enter your password'  onChange={ handleChangePass}/><br />
        <input  type="submit"/>
        </form>
    </div>
   
  )
}
