import React from "react";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";
import CheckoutForm from "./checkoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "@tanstack/react-query";
import { getAllClasses } from "../../api/class";

const Payment = () => {
  const item = useLoaderData();
  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT);

  // get all classes to update available seat and enrolled classes
  const {
    data: classes = [],
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const data = await getAllClasses();
      return data;
    },
  });

  if (isLoading) {
    // Handle loading state
    return <div>Loading...</div>;
  }

  const updateeneollAvailability = classes.filter(
    (itemclass) => itemclass._id === item.mySelectedClassid
  );
  console.log("updateeneollAvailability", updateeneollAvailability[0]);
  const filterid = updateeneollAvailability[0];

  const itemPrice = (item?.price).toFixed(2);
  const price = parseFloat(itemPrice);

  // get approvedclasses

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
          <CheckoutForm
            price={price}
            item={item}
            updateeneollAvailability={updateeneollAvailability}
            filterid={filterid}
          ></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
