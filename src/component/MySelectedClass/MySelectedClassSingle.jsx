import React from "react";
import {
  deletemyselectedclass,
  // getmyselectedclass,
} from "../../api/selectedClass";
// deletemyselectedclass,
//index, item, fetchMyBookings
const MySelectedClassSingle = ({ item }) => {
  const handleDelete = async (id) => {
    console.log(id)
    deletemyselectedclass(id)
      .then(data => {
        console.log(data);
      });
  };

  const handleEnroll = () => {};

  return (
    <>
      {item.map((selectedClass, index) => (
        <tr key={selectedClass._id} className="hover">
          <th>{index + 1}</th>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img
                    src={selectedClass.classImage}
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
              <div>
                <div className="font-bold">{selectedClass.className}</div>
              </div>
            </div>
          </td>
          <td>${selectedClass.price}</td>
          <td>
            <button onClick={() => handleDelete(selectedClass._id)} className="btn">
              Delete
            </button>
          </td>
          <td>
            <button onClick={handleEnroll} className="btn">
              Enrolle
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default MySelectedClassSingle;
