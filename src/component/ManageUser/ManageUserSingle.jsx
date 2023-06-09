

const ManageUserSingle = ({item, index, role, handleAdmin, handleInstructor, instructorDisabled, adminDisabled,  isUserAdmin, isUserInstructor,}) => {
    return (
        <tr>
        <th>{index}</th>
        <td>
          <div className="flex items-center space-x-3">
            <div>
              <div className="font-bold">{item.name}</div>
            </div>
          </div>
        </td>
        <td>{item.email}</td>
        <th>
        <button
          onClick={() => handleAdmin(item.email)}

        //   disabled={isUserAdmin || isUserInstructor || role === "instructor" || role === "admin"}
          className="btn btn-ghost btn-xs bg-base-200"
        >
            {item.role}
          </button>
        </th>
        <th>
          <button
          onClick={() => handleInstructor(item.email)}

        //   disabled={isUserAdmin || isUserInstructor || role === "instructor" || role === "admin"}
          className="btn btn-ghost btn-xs bg-base-200"
        >
            {item.role}
          </button>
        </th>
      </tr>
    );
};

export default ManageUserSingle;








// const ManageUserSingle = ({ item, index, role, handleAdmin, handleInstructor, instructorDisabled, adminDisabled }) => {
//     return (
//       <tr>
//         <th>{index}</th>
//         <td>
//           <div className="flex items-center space-x-3">
//             <div>
//               <div className="font-bold">{item.name}</div>
//             </div>
//           </div>
//         </td>
//         <td>{item.email}</td>
//         <th>
//           <button
//             onClick={() => handleAdmin(item.email)}
//             disabled={adminDisabled || role === "instructor" || role === "admin"}
//             className="btn btn-ghost btn-xs bg-base-200"
//           >
//             {item.role}
//           </button>
//         </th>
//         <th>
//           <button
//             onClick={() => handleInstructor(item.email)}
//             disabled={instructorDisabled || role === "instructor" || role === "admin"}
//             className="btn btn-ghost btn-xs bg-base-200"
//           >
//             {item.role}
//           </button>
//         </th>
//       </tr>
//     );
//   };
  