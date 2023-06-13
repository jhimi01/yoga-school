import React, { useState } from 'react';
import {
    useStripe,
    useElements,
    CardElement,
  } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [ cardError, setCardError ] = useState('')

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
        <button type="submit" className='btn w-full' disabled={!stripe}>
          Pay
        </button>
      </form>
      {cardError && <p className='text-red-600'>{cardError}</p>}
       </div>
    );
};

export default CheckoutForm;