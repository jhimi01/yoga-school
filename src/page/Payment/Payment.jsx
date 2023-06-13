import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {Helmet} from "react-helmet";

const Payment = () => {

    const item = useLoaderData();
    console.log(item)


return (
 <div>
   <Helmet>
                <title>Payment | DoYoga</title>
            </Helmet>
    <h2>pement</h2>
    <h1>Class Name: {item.className}</h1>
    <h2>Price: ${item.price}</h2>
 </div>
)
};


export default Payment;