import React from 'react';
import { useContext } from 'react';
import { SiGmail } from 'react-icons/si';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SingleClasses = ({yogaclass}) => {
    const { role, user} = useContext(AuthContext)
    const {classImage,className, instructorEmail, instructorName,price,availableSeats, status }  = yogaclass
    return (
        <div>
            <img className='h-[200px] w-full object-cover' src={classImage} alt="class img" />
            <div className='text-center bg-base-300 pt-4'>
                <div className=''>
                    <h4 className='text-xl font-semibold'>Class: {className}</h4>
                    <h4 className='text-lg text-gray-600'>Price: ${price}</h4>
                    <h4 className='text-lg text-gray-600'>Available Seats: {availableSeats}</h4>
                </div>
                <div className="divider" style={{margin: 1}}></div>
                <div className=''>
                    <h3 className='text-xl'>Instructor: {instructorName}</h3>
                    <h3 className='text-sm mt-1'><SiGmail className='inline-block text-red-800'/> : {instructorEmail}</h3>
                    {/* <p>{status}</p> */}
                </div>
            <div className='mt-2'>
                <button disabled={role === 'instructor' || role === 'admin'} className='btn bg-base-200 rounded-none w-full'>Select</button>
            </div>
            </div>
        </div>
    );
};

export default SingleClasses;