import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export function IfNotLoggedIn({ to }) {
  const user = false;
  if (!user) {
    return <Outlet />;
  } else {
    return <Navigate to={to} replace />;
  }
}

export function IfNotAuthenticated({ to }) {
  const user = false;
  if (!user) {
    return <Navigate to={to} replace />;
  } else {
    return <Outlet />;
  }
}
