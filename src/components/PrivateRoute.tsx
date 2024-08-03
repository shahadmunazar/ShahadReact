import React, { ReactElement } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = (): ReactElement => {
  const token = localStorage.getItem('authToken');

  // Check if the token exists
  if (!token) {
    // Redirect to login if no token
    return <Navigate to="/authentication/login" />;
  }

  // Render the nested routes if authenticated
  return <Outlet />;
};

export default PrivateRoute;
