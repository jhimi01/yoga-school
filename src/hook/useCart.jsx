import { useQuery } from '@tanstack/react-query';
import { allselectedmyclass } from '../api/selectedClass';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useContext } from 'react';

const useCart = () => {
    const { user } = useContext(AuthContext)
    const {refetch , data: selectedClass = []} = useQuery({
        queryKey: ['selectedClass', user?.email],
        // enabled: !AiOutlineLoading,

       
        queryFn: async ()=>{
            if (!user) {
                return []
            }
            const data = await allselectedmyclass(user?.email)
            return data
        },
    })
    return [selectedClass, refetch]
};

export default useCart;