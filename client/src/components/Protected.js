// The Protected component will check whether isLoggedIn is true or false. 
// If it's true, it will go ahead and return the Private component. 
// If it's false, it will redirect the user to a page where they can log in.
import React from "react";
import { Navigate } from "react-router-dom";

const Protected = ({ isLoggedIn, children }) => {
    if (!isLoggedIn) {
        return <Navigate to="/" replace />;
    }
    return children;
};

export default Protected;