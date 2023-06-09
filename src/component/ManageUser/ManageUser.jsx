import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useEffect } from "react";
import { getAllUser, makeAdmin, makeInstructor } from "../../api/auth";
import { useState } from "react";
import Swal from "sweetalert2";

const ManageUser = () => {
  const { user, role } = useContext(AuthContext);
  const [userinfo, setUSerinfo] = useState([]);
//   const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    getAllUser().then((data) => setUSerinfo(data));
  }, [userinfo]);

 const handleInstructor =(email)=>{
    makeInstructor(email).then(()=>{
        // if (role === 'instructor') {
        //     setDisabled(true)
        // }
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'added as a Instructor',
            showConfirmButton: false,
            timer: 1500
          })
    })
}
 const handleAdmin =(email)=>{
    makeAdmin(email).then(()=>{
        // if (role === 'admin') {
        //     setDisabled(true)
        // }
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'added as a Admin',
            showConfirmButton: false,
            timer: 1500
          })
    })
    console.log(email)
 }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead className="bg-base-200">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>email</th>
            <th>make admin</th>
            <th>make instructor</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {userinfo.map((item, index) => {
            if (item.email === user?.email) {
      return null; // Skip rendering this row
    }
    
            return (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </div>
                </td>
                <td>{item.email}</td>
                <th>
                  <button onClick={()=>handleAdmin(item.email)} className="btn btn-ghost btn-xs bg-base-200">
                    {item.role}
                  </button>
                </th>
                <th>
                  <button onClick={()=>handleInstructor(item.email)} className="btn btn-ghost btn-xs bg-base-200">
                    {item.role}
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUser;




// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
// import { getAllUser, makeAdmin, makeInstructor } from "../../api/auth";
// import Swal from "sweetalert2";

// const ManageUser = () => {
//   const { user, role } = useContext(AuthContext);
//   const [userinfo, setUserInfo] = useState([]);

//   useEffect(() => {
//     getAllUser().then((data) => setUserInfo(data));
//   }, []);

//   const handleInstructor = (email) => {
//     makeInstructor(email).then(() => {
//       setUserInfo((prevState) =>
//         prevState.map((user) =>
//           user.email === email ? { ...user, role: "instructor" } : user
//         )
//       );

//       Swal.fire({
//         position: "top-end",
//         icon: "success",
//         title: "Added as an Instructor",
//         showConfirmButton: false,
//         timer: 1500,
//       });
//     });
//   };

//   const handleAdmin = (email) => {
//     makeAdmin(email).then(() => {
//       Swal.fire({
//         position: "top-end",
//         icon: "success",
//         title: "Added as an Admin",
//         showConfirmButton: false,
//         timer: 1500,
//       });
//     });
//   };

//   return (
//     <div className="overflow-x-auto">
//       <table className="table">
//         {/* head */}
//         <thead className="bg-base-200">
//           <tr>
//             <th>#</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Make Admin</th>
//             <th>Make Instructor</th>
//           </tr>
//         </thead>
//         <tbody>
//           {userinfo.map((item, index) => 
//           {

//             if (item.email === user?.email) {
//       return null; // Skip rendering this row
//     }

//            return (
//             <tr key={item._id}>
//               <th>{index + 1}</th>
//               <td>
//                 <div className="flex items-center space-x-3">
//                   <div>
//                     <div className="font-bold">{item.name}</div>
//                   </div>
//                 </div>
//               </td>
//               <td>{item.email}</td>
//               <th>
//                 <button
//                   onClick={() => handleAdmin(item.email)}
//                   disabled={item.role === "admin"}
//                   className="btn btn-ghost btn-xs bg-base-200"
//                 >
//                   {item.role}
//                 </button>
//               </th>
//               <th>
//                 <button
//                   onClick={() => handleInstructor(item.email)}
//                   disabled={item.role === "instructor"}
//                   className="btn btn-ghost btn-xs bg-base-200"
//                 >
//                   {item.role}
//                 </button>
//               </th>
//             </tr>
//           )
//           }
          
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ManageUser;
