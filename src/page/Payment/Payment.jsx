import React from "react";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";
import CheckoutForm from "./checkoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const Payment = () => {
  const item = useLoaderData();
  console.log(item);

  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT);

  const itemPrice = (item?.price).toFixed(2);
  const price = parseFloat(itemPrice)
  console.log(typeof price)
  return (
    <div>
      <Helmet>
        <title>Payment | DoYoga</title>
      </Helmet>
      <div>
        <h2>pement</h2>
        <h1>Class Name: {item.className}</h1>
        <h2>Price: ${item.price}</h2>
      </div>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm price={price}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
