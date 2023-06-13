import React, { useContext, useEffect, useState } from 'react';
import {
    useStripe,
    useElements,
    CardElement,
  } from '@stripe/react-stripe-js';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const CheckoutForm = ({price}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [ cardError, setCardError ] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const {user} = useContext(AuthContext)
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState("")


    useEffect(()=>{
      fetch('http://localhost:5000/create-payment-intent', {
        method: 'POST',
        headers:{
          'content-type': 'application/json'
        },body: JSON.stringify({price})
      }).then(res => res.json())
      .then(data => {
        console.log(data.clientSecret)
        setClientSecret(data.clientSecret)
      })
    },[])


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
          console.log(card)
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
          if (error) {
            console.log('[error]', error);
            setCardError(error.message)
          } else {
            setCardError('')
            console.log('[PaymentMethod]', paymentMethod);
          }

 
          setProcessing(true)
          const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  email : user?.email || 'unknown',
                  name: user?.displayName || 'anonymous',
                },
              },
            },
          );

          if(confirmError){
            console.log(confirmError)
          }
           console.log('paymentIntent', paymentIntent)
           setProcessing(false)
           if (paymentIntent.status === "succeeded") {
            setTransactionId(paymentMethod.id)
            const transactionId = paymentIntent.id
           }
      };

    return (
       <div>
         <form onSubmit={handleSubmit} className='w-1/2 mt-10'>
        <CardElement
        className='input input-bordered w-full pt-3 mb-3'
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#235436',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button type="submit" className='btn w-full' disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      {cardError && <p className='text-red-600'>{cardError}</p>}
      {transactionId && <p className='text-green-600'>Transection complete with transectionId: {transactionId}</p>}
       </div>
    );
};

export default CheckoutForm;