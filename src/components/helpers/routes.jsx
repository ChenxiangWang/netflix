import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export function IfNotLoggedIn({ to, user }) {
  if (!user) {
    return <Outlet />;
  } else {
    return <Navigate to={to} replace />;
  }
}

export function IfNotAuthenticated({ to, user }) {
  if (!user) {
    return <Navigate to={to} replace />;
  } else {
    return <Outlet />;
  }
}
