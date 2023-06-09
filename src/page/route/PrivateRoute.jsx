import React, { Children, useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loader} = useContext(AuthContext)
    const location = useLocation() 

    if (loader) {
        return <div style={{ display: "flex", justifyContent: "center" ,alignItems:'center' ,height:'55vh'}}>
        <progress className="progress w-3/4"></progress>
       </div>
    }

    if (user) {
        return children
    }

    return <Navigate to='/login' state={{from: location}} 
        replace
    />
};

export default PrivateRoute;