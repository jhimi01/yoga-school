import React, { useEffect, useState } from "react";
import { getAllClasses } from "../../api/class";

const AdminManageClasses = () => {
  const [allClasses, setAllClasses] = useState([]);
  const fetchAllClass = () => {
    getAllClasses().then((data) => {
      console.log(data);
      setAllClasses(data);
    });
  };

  useEffect(() => {
    fetchAllClass();
  }, []);
  console.log(allClasses);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead className="bg-base-200">
          <tr>
            <th>
            </th>
            <th>Classes</th>
            <th>Instructor</th>
            <th>Price</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {allClasses.map((item, index) =>  <tr key={item._id}>
            <th>
             {index + 1}
            </th>
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
              <button className="badge badge-ghost badge-lg">Approve</button>
              <button className="badge badge-ghost badge-lg">Deny</button>
              <button className="badge badge-ghost badge-lg">Feedback</button>
            </th>
          </tr>)}
         
        </tbody>
      </table>
    </div>
  );
};

export default AdminManageClasses;
