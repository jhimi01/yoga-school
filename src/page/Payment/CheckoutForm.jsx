import React, { useContext, useEffect, useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import { deletemyselectedclass } from "../../api/selectedClass";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ price, item, filterid }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useContext(AuthContext);
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://yoga-school-server.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.clientSecret);
        setClientSecret(data.clientSecret);
      });
  }, []);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    console.log(card);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("[PaymentMethod]", paymentMethod);
    }

    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }
    console.log("paymentIntent", paymentIntent.amount / 100);
    console.log(item.availableSeats);
    axios
      .post("https://yoga-school-server.vercel.app/enrolled/class", {
        studentEmail: item.email,
        className: item.className,
        instructorEmail: item.instructorEmail,
        instructorName: item.instructorName,
        classPrice: paymentIntent.amount / 100,
        card: paymentMethod.card.brand,
        timestamp: new Date().getTime(), 
      })
      .then((data) => {
        console.log(data);
        deletemyselectedclass(item._id)
        .then(data => {
          Swal.fire(
            'Enrolled!',
            'Your successfuly enrolled.',
            'success'
          )
          navigate('/dashboard/my-enrolled-classes')
          console.log(data);
        });
      });


      // ----------- update class -----------
axios
.put(`https://yoga-school-server.vercel.app/enrolled/update/${filterid._id}`, {
  availableSeats: filterid.availableSeats - 1,
  Enrolled: filterid.Enrolled + 1,
})
  .then((response) => {
    console.log("Class updated successfully", response.data);
  })
  .catch((error) => {
    console.log("Error updating class:", error);
  });


    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentMethod.id);
      const transactionId = paymentIntent.id;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-1/2 mt-10">
        <CardElement
          className="input input-bordered w-full pt-3 mb-3"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#235436",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          className="btn w-full"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600">{cardError}</p>}
      {transactionId && (
        <p className="text-green-600">
          Transection complete with transectionId: {transactionId}
        </p>
      )}
    </div>
  );
};

export default CheckoutForm;
