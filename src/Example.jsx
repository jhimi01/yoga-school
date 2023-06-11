import React, { useCallback, useEffect, useState } from "react";
import { adminClassFeedback, getAllClasses } from "../../api/class";
import Swal from "sweetalert2";

const AdminManageClasses = () => {
  const [allClasses, setAllClasses] = useState([]);
  const [shouldRefetch, setShouldRefetch] = useState(false);
  const [feedback, setFeedback] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  const [activeFeedbackId, setActiveFeedbackId] = useState(null);

  const fetchAllClass = useCallback(() => {
    getAllClasses().then((data) => {
      setAllClasses(data);
    });
  }, [shouldRefetch]);

  useEffect(() => {
    fetchAllClass();
  }, [shouldRefetch]);

  const handleApprove = (id) => {
    fetch(`http://localhost:5000/users/addclass/approve/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setShouldRefetch(!shouldRefetch);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Class has been Approved',
          showConfirmButton: false,
          timer: 1500
        });
        console.log(data);
      });
  };

  const handleDeny = (id) => {
    fetch(`http://localhost:5000/users/addclass/deny/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setShouldRefetch(!shouldRefetch);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Class has been Denied',
          showConfirmButton: false,
          timer: 1500
        });
        console.log(data);
      });
  };

  const handleFeedback = (id) => {
    setActiveFeedbackId(id);
    setFeedback(!feedback);
  };

  const handleSubmitFeedback = (id) => {
    if (feedbackText.trim() === "") {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Feedback',
        text: 'Please enter a valid feedback message.',
      });
      return;
    }

    adminClassFeedback(id, feedbackText)
      .then(() => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Feedback has been sent',
          showConfirmButton: false,
          timer: 1500
        });
        setShouldRefetch(!shouldRefetch);
        setActiveFeedbackId(null);
        setFeedback(false);
        setFeedbackText("");
      })
      .catch((error) => {
        console.error(error);
        // Handle the error
      });
  };

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
                    <button
                      disabled
                      className="badge badge-ghost badge-lg text-gray-500"
                    >
                      Approve
                    </button>
                    <button
                      disabled
                      className="badge badge-ghost badge-lg text-gray-500"
                    >
                      Deny
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="badge badge-ghost badge-lg"
                      onClick={() => handleApprove(item._id)}
                    >
                      Approve
                    </button>
                    <button
                      className="badge badge-ghost badge-lg"
                      onClick={() => handleDeny(item._id)}
                    >
                      Deny
                    </button>
                  </>
                )}
                <button
                  className="badge badge-ghost badge-lg"
                  onClick={() => handleFeedback(item._id)}
                >
                  Feedback
                </button>
                {feedback && activeFeedbackId === item._id && (
                  <div className="flex gap-2 mt-2">
                    <input
                      type="text"
                      placeholder="Enter your feedback"
                      value={feedbackText}
                      onChange={(e) => setFeedbackText(e.target.value)}
                      className="input input-bordered"
                    />
                    <button
                      className="btn btn-primary"
                      onClick={() => handleSubmitFeedback(item._id)}
                    >
                      Send
                    </button>
                  </div>
                )}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminManageClasses;
