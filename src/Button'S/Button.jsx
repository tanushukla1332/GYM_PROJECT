import React from 'react'
import { useNavigate } from 'react-router-dom'

 export default function Button() {
    const loginnavigator=useNavigate()
  return (
    <div>
        <div>
        <button onClick={()=>loginnavigator('/login')}>Sign in</button>
        </div>
    </div>
  )
}
