import React from 'react';
import { Link } from 'react-router-dom';
import ErrorAnimation from '../assets/Error-404.json'
import Lottie from "lottie-react";
import { BiArrowBack } from 'react-icons/bi';


const Error = () => {
    return (
        <div className='flex items-center flex-col mt-8'>
       <div className='text-center'>
       <Lottie style={{height: 300,}} animationData={ErrorAnimation} />
       <h1 className="text-3xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="text-lg text-gray-500 font-bold mb-4">
        We are sorry, but the page you were looking for could not be found.
      </p>
       </div>
       <Link to='/'> <button className='btn btn-neutral'><BiArrowBack/><p>Go back to home</p></button></Link>
        </div>
    );
};

export default Error;