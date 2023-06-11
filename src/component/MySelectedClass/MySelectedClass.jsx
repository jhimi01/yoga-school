import React, { useContext, useEffect } from 'react';
import { allselectedmyclass } from '../../api/selectedClass';
import { SiLg } from 'react-icons/si';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useState } from 'react';
import MySelectedClassSingle from './MySelectedClassSingle';

const MySelectedClass = () => {
    const { user } = useContext(AuthContext)
    const [selectedClass, setSelectedClass] = useState([])

   const fetchMyBookings = () =>{
    allselectedmyclass(user?.email)
    .then(data => {
        setSelectedClass(data)
    })
    }
    useEffect(()=>{
      fetchMyBookings()
    },[user])
    return (
        <div>
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
        <MySelectedClassSingle item={selectedClass} fetchMyBookings={fetchMyBookings}></MySelectedClassSingle>
     }
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MySelectedClass;