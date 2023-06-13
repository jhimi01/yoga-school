import React, { useEffect, useState } from 'react';

const PaymentHistory = () => {
    const [payhistory, setPayhistory] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/enrolled/class')
        .then(res => res.json())
        .then(data => {
            setPayhistory(data)
            console.log(data)
        })
    },[])

    const convertTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleString(); // Convert timestamp to a human-readable format
    }


    return (
        <div>
            payment history
            <h2>{payhistory.length}</h2>
            


            <div className="overflow-x-auto w-full">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Enrolled Class</th>
        <th>Instructor</th>
        <th>Enrolled Time</th>
        <th>Enrolled Card</th>
        <th>amount</th>
      </tr>
    </thead>
    <tbody>
   
                {payhistory.map((item, index) => (
                    <tr key={item._id}>
        <th>{index + 1}</th>
        <td>{item?.className}</td>
        <td>{item?.instructorName}</td>
        <td>{convertTimestamp(item.timestamp)}</td>
        <td>{item?.card}</td>
        <td>{item?.classPrice}</td>
      </tr> // Convert and display the timestamp in a readable format
                ))}
        
  
    </tbody>
  </table>
</div>
        </div>
    );
};

export default PaymentHistory;