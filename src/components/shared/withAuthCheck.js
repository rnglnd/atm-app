import React, { useEffect } from 'react';
// import { withRouter } from "react-router";

 const withAuthCheck = (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      if (!props.isAuthenticated) {
        props.history.push('/login');
      }
    });
    
    return <WrappedComponent {...props} />;
  }
};

export default withAuthCheck;
