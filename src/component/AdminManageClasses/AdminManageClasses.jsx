import React, { useCallback, useEffect, useState } from "react";
import { getAllClasses } from "../../api/class";
import Swal from "sweetalert2";

const AdminManageClasses = () => {
  const [allClasses, setAllClasses] = useState([]);
  const [shouldRefetch, setShouldRefetch] = useState(false);
  const [feedback, setFeedback] = useState('');

  const fetchAllClass = () => {
    getAllClasses().then((data) => {
      setAllClasses(data);
    });
  };


// const fetchAllClass = useCallback(() => {
//     getAllClasses().then((data) => {
//       setAllClasses(data);
//     });
//   }, [shouldRefetch]);


  useEffect(() => {
    fetchAllClass();
  }, [shouldRefetch]);
  console.log(allClasses);

  const handlApprove = (id) => {
    fetch(`http://localhost:5000/users/addclass/approve/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setShouldRefetch(!shouldRefetch)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Class has been Approved',
            showConfirmButton: false,
            timer: 1500
          })
        console.log(data)});
  };


  const handlDeny = (id) => {

    fetch(`http://localhost:5000/users/addclass/deny/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
      // Handle the response from the server
      console.log(result);
    })
    .catch(error => {
      // Handle the error
      console.error(error);
    });
  }

//   deny status
// const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = { feedback: feedback };

//     fetch(`/users/addclass/deny/${id}`, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     })
//     .then(response => response.json())
//     .then(result => {
//         setShouldRefetch(!shouldRefetch)
//       // Handle the response from the server
//       console.log(result);
//     })
//     .catch(error => {
//       // Handle the error
//       console.error(error);
//     });
//   };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead className="bg-base-200">
          <tr>
            <th></th>
            <th>Classes</th>
            <th>Instructor</th>
            <th>Price</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {allClasses.map((item, index) => (
            <tr key={item._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.classImage}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{item.className}</div>
                  </div>
                </div>
              </td>
              <td className="font-semibold">
                {item.instructorName}
                <br />
                <span className="badge badge-ghost badge-sm">
                  {item.instructorEmail}
                </span>
              </td>
              <td>${item.price}</td>
              <td className="text-gray-400">{item.status}</td>
              <th className="flex flex-col gap-3">
                {item.status === "approved" || item.status === 'deny' ? (
                  <>
                    <button disabled
                      className="badge badge-ghost badge-lg text-gray-500"
                    //   onClick={() => handlApprove(item._id)}
                    >
                      Approve
                    </button>
                    <button  
                    // onClick={() => handlApprove(item._id)}
                      disabled
                     className="badge badge-ghost badge-lg text-gray-500">Deny</button>
                  </>
                ) : (
                  <>
                    <button
                      className="badge badge-ghost badge-lg"
                      onClick={() => handlApprove(item._id)}
                    >
                      Approve
                    </button>
                    <button onClick={() => handlDeny(item._id)} className="badge badge-ghost badge-lg">Deny</button>
                  </>
                )}
                <button
                      className="badge badge-ghost badge-lg"
                    >
                      Feedback
                    </button>
                {/* <button className="badge badge-ghost badge-lg" onClick={()=>handlApprove(item._id)}>Approve</button>
              <button className="badge badge-ghost badge-lg">Deny</button> */}
             <div>
              {/* <button>Submit</button> */}
              </div>
              {/* onClick={handleSubmit} */}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminManageClasses;
