import React from "react";
import { useNavigate } from "react-router-dom";
import Sign from "./Button.module.css";

export default function Button() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };

  return (
    <div className={Sign.btn}>
      <button className={Sign.button} onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
}
