import React from 'react';
import { useContext } from 'react';
import { SiGmail } from 'react-icons/si';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { selectClass } from '../../api/selectedClass';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { Link, NavLink} from 'react-router-dom';
import useCart from '../../hook/useCart';

const SingleClasses = ({yogaclass}) => {
    const { role, user} = useContext(AuthContext)
    const {classImage,className, instructorEmail, instructorName,price,availableSeats, status, _id }  = yogaclass;
    const [disabled, setDisable] = useState(false)
    const [, refetch] = useCart()
    

    const handleSelect= ()=>{
        const currentClass = {
            email: user?.email,
            classImage,
            className,
            instructorEmail,
            instructorName,
            price,
            availableSeats,
            mySelectedClassid:_id,
          };
      
          selectClass(currentClass)
            .then((data) => {
                if (data.insertedId) {
                    refetch()
                    setDisable(true)
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      });
                      refetch()
                }
            });
    }

    return (
        <div className={`${availableSeats < 1?'bg-red-400':'bg-base-300'}`}>
            <img className='h-[200px] w-full object-cover' src={classImage} alt="class img" />
            <div className='text-center  pt-4'>
                <div className=''>
                    <h4 className='text-xl font-semibold'>Class: {className}</h4>
                    <h4 className='text-lg text-gray-600'>Price: ${price}</h4>
                    <h4 className={`${availableSeats === 0?'bg-red-100':'bg-base-300'} text-lg text-gray-600`}>Available Seats: {availableSeats}</h4>
                </div>
                <div className="divider" style={{margin: 1}}></div>
                <div className=''>
                    <h3 className='text-xl'>Instructor: {instructorName}</h3>
                    <h3 className='text-sm mt-1'><SiGmail className='inline-block text-red-800'/> : {instructorEmail}</h3>
                    {/* <p>{status}</p> */}
                </div>

            <div  
           
            className='mt-2'>
            {user ? 
             <button onClick={()=>handleSelect(_id)} disabled={availableSeats < 1 || role === 'instructor' || role === 'admin'} className='btn bg-base-200 rounded-none w-full'>{disabled? 'selected':'select'}</button> :
              <Link to='/login'><button 
              disabled={disabled || role === 'instructor' || role === 'admin'} className='btn bg-base-200 rounded-none w-full'
              >{disabled? 'selected':'select'}</button></Link>}
                
            </div>
            </div>
        </div>
    );
};

export default SingleClasses;