import React from "react";
import {
  deletemyselectedclass,
  // getmyselectedclass,
} from "../../api/selectedClass";
import Swal from "sweetalert2";
// import { useHistory } from "react-router-dom";
import useCart from "../../hook/useCart";
import Payment from "../../page/Payment/Payment";
import { Link } from "react-router-dom";

const MySelectedClassSingle = ({ item, index, fetchMyBookings, setRefetch, refetch ,handleDelete }) => {



  console.log(item._id)

  
  // const handleDelete = async (id) => {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       deletemyselectedclass(id)
  //       .then(data => {
  //         if (data.deletedCount > 0) {
  //           Swal.fire(
  //             'Deleted!',
  //             'Your file has been deleted.',
  //             'success'
  //           )
  //           setRefetch(!refetch)
  //           fetchMyBookings()
  //         }
  //       });
  //       // refetch()
  //     }
  //   })
  // };



  const handleDeleteClick = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(id);
      }
    });
  };





if(item?.error){
  return <div>unauthorized</div>
}

  return (
    <>
      {
        item.length === 0 ? <h2>not found</h2> :  <tr key={item?._id} className="hover">
          <th>{index + 1}</th>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img
                    src={item?.classImage}
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
              <div>
                <div className="font-bold">{item?.className}</div>
              </div>
            </div>
          </td>
          <td>${item?.price}</td>
          <td>
            <button 
            // onClick={() => handleDelete(item?._id)} 
            onClick={() => handleDeleteClick(item?._id)}
            className="btn">
              Delete
            </button>
          </td>
          <td>
          <Link to={`/dashboard/my-enrolled-classes/${item?._id}`}>
  <button className="btn">Enroll</button>
</Link>
<button>

</button>
          </td>
        </tr>
      }
    </>
  );
};

export default MySelectedClassSingle;
