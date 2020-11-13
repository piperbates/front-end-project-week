import React, { Component } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./styles.css";

function LoginButton() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <div className="mainLogin">
        <div className="loginPage">
          <h2 className="h2Login">Welcome, please login to continue</h2>
          <button
            className="btnsForm loginBtn"
            onClick={() => loginWithRedirect()}
          >
            Login
          </button>
        </div>
      </div>
    )
  );
}

export default LoginButton;
