import React from 'react';

const SingleInstructorClasses = ({item, index}) => {

    return (
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
        {/* <td>{item.className}</td>  */}
        <td>${item.price}</td> 
        <td>{item.availableSeats}</td> 
        <td>{item.Enrolled}</td> 
        <td>{item.status}..</td> 
        <td>update</td> 
        <td>not found</td> 
      </tr>
    );
};

export default SingleInstructorClasses;