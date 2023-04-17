import React from 'react'
import { useNavigate } from 'react-router-dom'

 export default function Button() {
    const loginnavigator=useNavigate()
  return (
    <div>
        <div>
        <button onClick={()=>loginnavigator('/login')}
        style={{display:'flex', padding:'15px'}}
        >Sign in</button>
        </div>
    </div>
  )
}
