import React, { useContext, useEffect } from 'react';
import { allselectedmyclass } from '../../api/selectedClass';
import { SiLg } from 'react-icons/si';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useState } from 'react';

const MySelectedClass = () => {
    const { user } = useContext(AuthContext)
    const [selectedClass, setSelectedClass] = useState([])
    useEffect(()=>{
        allselectedmyclass(user?.email)
        .then(data => {
            console.log(data)
            setSelectedClass(data)
        })
    },[])

    return (
        <div>
           class: {selectedClass.length}
        </div>
    );
};

export default MySelectedClass;