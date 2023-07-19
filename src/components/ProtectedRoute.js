import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, ...props}) => {
  return (
     false ? <Component {...props} /> : <Navigate to="/sign-in" replace/>
)};

export default ProtectedRoute;