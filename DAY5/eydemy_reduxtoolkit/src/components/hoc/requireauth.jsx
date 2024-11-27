import React from "react";
import { useAuthenticated } from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function RequireAuth(props) {
  const isAuserAuthenticated = useAuthenticated(); // usage of the custom hook !

  if (!isAuserAuthenticated) {
    return <Navigate to="/" />;
  }

  return <>{props.children}</>;
}
