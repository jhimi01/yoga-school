import React, { useContext, useEffect } from 'react';
import { allselectedmyclass, deletemyselectedclass } from '../../api/selectedClass';
import { SiLg } from 'react-icons/si';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useState } from 'react';
import MySelectedClassSingle from './MySelectedClassSingle';
import { useQuery } from '@tanstack/react-query';
import useCart from '../../hook/useCart';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';

const MySelectedClass = () => {
    const { user } = useContext(AuthContext)
    const [selectedClass, setSelectedClass] = useState([])
    const [refetch, setRefetch] = useState(false)


   const fetchMyBookings = () =>{
     allselectedmyclass(user?.email)
    .then(data => {
        setSelectedClass(data)
    })
    }
    useEffect(()=>{
      fetchMyBookings()
    },[refetch, user?.email])


    const handleDelete = async (id) => {
      try {
        const result = await Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!',
        });
  
        if (result.isConfirmed) {
          await deletemyselectedclass(id);
          setRefetch(!refetch);
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        }
      } catch (error) {
        console.error(error);
        Swal.fire('Error!', 'An error occurred while deleting the class.', 'error');
      }
    };

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
      {
        selectedClass.map((item, index) =>  <MySelectedClassSingle 
        key={item._id}
         item={item}
         index={index}
         fetchMyBookings={fetchMyBookings}
         handleDelete={handleDelete}
         setRefetch={setRefetch}
         refetch={refetch}
         ></MySelectedClassSingle>)
      }

    </tbody>
  </table>
</div>
        </div>
    );
};

export default MySelectedClass;