import React from 'react';

const SingleInstructor = ({instructor}) => {

    return (
        <div>
            <img className='h-[340px] object-cover w-full' src="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=600" alt="instructor image" />
            <div>
                <p>Instructor</p>
                <h3>Name</h3>
                <h3>email</h3>
            </div>
        </div>
    );
};

export default SingleInstructor;