import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuthentication } from "../authentication/UsersAuthenticationContext";

const RouteProtection = ({ children }) => {
  const { user } = useUserAuthentication();

  console.log("Check the user in Private Session: ", user);

  if (!user) {
    return <Navigate to="/" />;
  }


  console.log("User is in session!");
  return children;
};

export default RouteProtection;