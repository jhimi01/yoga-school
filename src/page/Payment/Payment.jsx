import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Payment = () => {

    const item = useLoaderData();
    console.log(item)


return (
 <div>
    <h2>pement</h2>
    <h1>Class Name: {item.className}</h1>
    <h2>Price: ${item.price}</h2>
 </div>
)
};


export default Payment;