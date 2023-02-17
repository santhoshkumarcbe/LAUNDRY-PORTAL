
import React from 'react';
import {BrowserRouter as Router,Route,Routes,Navigate } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
     
  return (
    <Router>
        <Routes>
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated==="false") {
          return <Component {...props} />;
        } else {
          return (
            <Navigate
              to={{
                pathname: '/',
                state: { from: props.location }
              }}
            />
          );
        }
      }}
    />
    </Routes>
    </Router>
  );
};

export default ProtectedRoute;
