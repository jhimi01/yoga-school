import React, { useEffect, useState } from 'react';
import SubBanner from '../../component/SubBanner';
import { allInsructor } from '../../api/auth';
import {Helmet} from "react-helmet";
import SingleInstructor from './SingleInstructor';

const Instructor = () => {
    const [instructors, setInstructors] = useState([])

    useEffect(()=>{
        allInsructor()
        .then(data => {
            setInstructors(data)
        })
    },[])

    console.log(instructors)

    return (
        <div>
          <Helmet>
                <title>Instructor | DoYoga</title>
            </Helmet>
           <SubBanner bannerimg={'https://i.ibb.co/drZK2d6/pexels-yan-krukau-8436464-2.jpg'} heading={'Instructors'}></SubBanner>
           <div className='grid md:grid-cols-3 lg:grid-cols-4 mt-32 grid-cols-1 mx-auto md:w-5/6 w-full gap-11'>
            {instructors.map((instructor) => <SingleInstructor instructor={instructor}></SingleInstructor>)}
           </div>
        </div>
    );
};

export default Instructor;