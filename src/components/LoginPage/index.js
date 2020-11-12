import React from "react";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";
import Profile from "../Profile";
import { useAuth0 } from "@auth0/auth0-react";

function LoginPage() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </div>
  );
}

export default LoginPage;


// LogIn page should link to the Apply for programme page.... if user has already applied for programme then display User profile information
// fetch request from the DB for the id of that USER.

