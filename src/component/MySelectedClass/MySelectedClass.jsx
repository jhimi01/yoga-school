import React, { useContext, useEffect } from 'react';
import { allselectedmyclass } from '../../api/selectedClass';
import { SiLg } from 'react-icons/si';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useState } from 'react';
import MySelectedClassSingle from './MySelectedClassSingle';
import { useQuery } from '@tanstack/react-query';
import useCart from '../../hook/useCart';
import { Helmet } from 'react-helmet';

const MySelectedClass = () => {
    const { user } = useContext(AuthContext)
    const [selectedClass, setSelectedClass] = useState([])
    const [refetch, setRefetch] = useState(false)

// const [selectedClass, refetch] = useCart()

    

   const fetchMyBookings = () =>{
     allselectedmyclass(user?.email)
    .then(data => {
        setSelectedClass(data)
    })
    }
    useEffect(()=>{
      fetchMyBookings()
    },[refetch, user?.email])

    return (
        <div>
           <Helmet>
                <title>My Selected Class | DoYoga</title>
            </Helmet>
        <h2 className="text-center text-3xl my-5">My Seleted Class</h2>
            <div className="overflow-x-auto">
  <table className="table table-xl text-center">
    <thead>
      <tr>
      <th></th> 
        <th>Class Name</th> 
        <th>Price</th>  
        <th>Delete</th>
        <th>Enrolle</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {/* {
        selectedClass.map((item, index) =>  <MySelectedClassSingle 
        key={item._id}
         item={item}
         index={index}
        //  fetchMyBookings={fetchMyBookings}
         ></MySelectedClassSingle>)
      } */}
     {
        <MySelectedClassSingle item={selectedClass} 
        fetchMyBookings={fetchMyBookings}
        //  refetch={refetch} 
        setRefetch={setRefetch} refetch={refetch}
         ></MySelectedClassSingle>
     }
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MySelectedClass;