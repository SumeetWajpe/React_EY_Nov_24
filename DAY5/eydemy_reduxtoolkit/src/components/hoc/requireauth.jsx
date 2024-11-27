import React from "react";
import { useAuthenticated } from "../../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

export default function RequireAuth(props) {
  const isAuserAuthenticated = useAuthenticated(); // usage of the custom hook !

  const location = useLocation();
  if (!isAuserAuthenticated) {
    return <Navigate to="/" state={location.pathname} />;
  }

  return <>{props.children}</>;
}
