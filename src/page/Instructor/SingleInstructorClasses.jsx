import React from 'react';

const SingleInstructorClasses = ({item, index}) => {
    return (
        <tr className="hover">
        <th>{index + 1}</th> 
        <td>{item.className}</td> 
        <td>${item.price}</td> 
        <td>{item.availableSeats}</td> 
        <td>{item.Enrolled}</td> 
        <td>{item.status}</td> 
        <td>update</td> 
        <td>not found</td> 
      </tr>
    );
};

export default SingleInstructorClasses;