import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivetRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(user)

    if(loading){
        return <Spinner animation="grow" />;
    }
    
    if(user){
        return children
    }
    return <Navigate state={{from:location}} to="/login" replace></Navigate>
    ;
};

export default PrivetRoutes;

/**
 * check user login or not
 * if user is login ,then allow them to visit the route
 * else redirect the user to the login page
 * setup the privet router
 * handle loading
*/