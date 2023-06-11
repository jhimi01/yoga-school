import React, { useState } from 'react';
import Swal from 'sweetalert2';

const SingleInstructorClasses = ({item, index, fetchInstructorclasses}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [className, setClassName] = useState(item.className);
  const [classImage, setClassImage] = useState(item?.classImage);
  const [availableSeats, setAvailableSeats] = useState(item.price);
  const [price, setPrice] = useState(item.availableSeats);
  console.log(item.feedback?.feedback)
  const openModal = () => {
    setIsModalOpen(true);
  }
  
  const closeModal = () => {
    setIsModalOpen(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedClass = {
      className,
      classImage,
      availableSeats,
      price,
    };


    fetch(`http://localhost:5000/instructors/class/update/${item._id}`,{
      method: 'PUT',
      headers:{
        'content-type': 'application/json',
      },body: JSON.stringify(updatedClass)
    }).then(res => res.json())
    .then(data => {
      if (data.modifiedCount > 0) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        setIsModalOpen(false);
      }
      fetchInstructorclasses()
    })
    // axios
    //   .put(`/instructors/class/update/${item._id}`, updatedClass)
    //   .then((response) => {
    //     console.log(response);
    //     Swal.fire({
    //       position: 'top-end',
    //       icon: 'success',
    //       title: 'Your work has been saved',
    //       showConfirmButton: false,
    //       timer: 1500
    //     })
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     Swal.fire({
    //       icon: 'error',
    //       title: 'Oops...',
    //       text: 'Something went wrong!',
    //     })
    //   });

    };


    return (
      <>

      <tr className="hover">
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={item?.classImage} alt="" />
            </div>
          </div>
          <div className="font-bold">{item.className}</div>
        </div>
      </td>
      <td>${item.price}</td>
      <td>{item.availableSeats}</td>
      <td>{item.Enrolled}</td>
      <td>{item.status}</td>
      <th>
      <button onClick={openModal} className="btn ">update
     </button>
     {
        isModalOpen && (
            <div className="fixed w-full overflow-hidden inset-0 flex items-center justify-center z-50">
    <div className="modal modal-open">
      <div className="modal-box text-center">
        <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-5xl  text-center">Add class</h2>
        <div className="flex items-center justify-between">
          <div>
            <label
              htmlFor="className"
              className="block text-sm font-medium text-gray-700"
            >
              Class Name
            </label>
            <div className="mt-1">
              <input
                id="className"
                type="text"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                required
                className="input  input-bordered rounded-none"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="classImage"
              className="block text-sm font-medium text-gray-700"
            >
              Class Image
            </label>
            <div className="mt-1">
              <input
                id="classImage"
                type="text"
                value={classImage}
                onChange={(e) => setClassImage(e.target.value)}
                required
                className="input  input-bordered rounded-none overflow-hidden"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <label
              htmlFor="availableSeats"
              className="block text-sm font-medium text-gray-700"
            >
              Available Seats
            </label>
            <div className="mt-1">
              <input
                id="availableSeats"
                type="number"
                value={availableSeats}
                onChange={(e) => setAvailableSeats(Number(e.target.value))}
                required
                className="input input-bordered rounded-none"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <div className="mt-1">
              <input
                id="price"
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                required
                className="input input-bordered rounded-none"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className="btn bg-base-300 rounded-none">
            Add class
          </button>
        </div>
      </form>
      {/* <button className='btn rounded-none' onClick={()=>handleSubmit()}>update</button> */}
        <div className="modal-action">

          <button
            className="btn"
            onClick={closeModal}
          >
            Cencel
          </button>
        </div>
       

        
      </div>
    </div>
  </div>
        )
     }
    
    </th>
    <>
    {item.feedback && item.feedback?.feedback ? <td>{item.feedback?.feedback}</td> :<td>not found</td>}
    </>
      {/* <td>not found</td> */}
      
    </tr>

   </>
    )
  }

   


export default SingleInstructorClasses;