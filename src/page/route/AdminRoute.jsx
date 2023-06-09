import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const AdminRoute = ({children}) => {
    const location = useLocation()
    const { user, role, loading } = useContext(AuthContext) 

    if (loading) {
        return <p>Loading...</p>
    }

    if (user) {
        return children
    }

    
    
    
    return <Navigate to='/' state={{from: location}} replace></Navigate> 
};

export default AdminRoute;