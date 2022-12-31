import React from 'react';
import { Navigate,Outlet } from 'react-router-dom';

const PrivateComponent = () =>{
    const auth = localStorage.getItem('USER');
    return auth?<Outlet/>:<Navigate to="/login"/>//we are checking if there is some data present in our local storage then we alow to show internal private components of our board

}

export default PrivateComponent;