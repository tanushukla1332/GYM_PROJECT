import React from "react";
import { useNavigate } from "react-router-dom";
import Butt from './Button.module.css'

export default function Button() {
  const LoginNavigator = useNavigate();
 
  return (
    <div>
      <div className={Butt.btn}>
        <button
          onClick={() => LoginNavigator("/signup")}
          // style={{ display: "flex", padding: "15px", }}
        >
Join us
        </button>
        
      </div>
    </div>
  );
}
