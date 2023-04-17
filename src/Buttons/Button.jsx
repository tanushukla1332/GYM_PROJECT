import React from "react";
import { useNavigate } from "react-router-dom";

export default function Button() {
  const LoginNavigator = useNavigate();
  return (
    <div>
      <div>
        <button
          onClick={() => LoginNavigator("/login")}
          style={{ display: "flex", padding: "15px" }}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}
