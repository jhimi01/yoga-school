import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
    const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const {}= useQuery({
        quertKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(user.email)
        }
    })
    return (
        <div>
            
        </div>
    );
};

export default useAdmin;