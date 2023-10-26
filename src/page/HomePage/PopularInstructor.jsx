import React, { useEffect, useState } from 'react';
import ShareTitle from '../../component/ShareTitle';
import axios from 'axios';
import { allInsructor } from '../../api/auth';
import SingleInstructor from '../Instructor/SingleInstructor';

const PopularInstructor = () => {
    const [instructor, setInstructor] = useState([])

    useEffect(()=>{
        allInsructor()
        .then(data => {
            setInstructor(data)
            console.log(data)
        })
    },[])

    return (
        <div className='w-full md:w-5/6 mx-auto'>
            <ShareTitle subheading={'Polupar Instructor'} mainTitle={'DoYoga Trainer'}></ShareTitle>

            <div className='grid md:grid-cols-3 grid-cols-1 gap-10 pt-10 w-full'>
            {instructor.slice(0, 6).map(item => <SingleInstructor instructor={item}></SingleInstructor>)}
            </div>
        </div>
    );
};

export default PopularInstructor;