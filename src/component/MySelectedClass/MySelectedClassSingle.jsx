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
// deletemyselectedclass,
//index, item, fetchMyBookings
const MySelectedClassSingle = ({ item, fetchMyBookings, setRefetch, refetch }) => {

  // const [, refetch] = useCart()
  // const history = useHistory();

  
  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deletemyselectedclass(id)
        .then(data => {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          console.log(data);
        });
        setRefetch(!refetch)
        fetchMyBookings()
        // refetch()
      }
    })

    
  
  };

  // const handleEnroll = (id) => {
  //   window.location.href = `/dashboard/my-enrolled-classes/${id}`;
  //   console.log(id)
  // };



if(item?.error){
  return <div>unauthorized</div>
}

  return (
    <>
      {item?.map((selectedClass, index) => (
        <tr key={selectedClass?._id} className="hover">
          <th>{index + 1}</th>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img
                    src={selectedClass?.classImage}
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
              <div>
                <div className="font-bold">{selectedClass?.className}</div>
              </div>
            </div>
          </td>
          <td>${selectedClass?.price}</td>
          <td>
            <button onClick={() => handleDelete(selectedClass?._id)} className="btn">
              Delete
            </button>
          </td>
          <td>
          <Link to={`/dashboard/my-enrolled-classes/${selectedClass?._id}`}>
  <button className="btn">Enroll</button>
</Link>
<button>

</button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default MySelectedClassSingle;
