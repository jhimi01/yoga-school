import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import SubBanner from '../../component/SubBanner';
import { getAllClasses } from '../../api/class';
import SingleClasses from './SingleClasses';

const Clasess = () => {
    // const [classes, setClasses] = useState([])
    const { data: classes = [], error, isLoading } = useQuery({
        queryKey: ['classes'],
        queryFn: async ()=>{
            const data = await getAllClasses()
            return data
        }
    })

    // if (isLoading) {
    //     // Handle loading state
    //     return <div>Loading...</div>;
    //   }


    // useEffect(()=>{
    //     getAllClasses()
    //     .then(data => {
    //         setClasses(data)
    //     })
    // },[])

    const approvedClasses = classes.filter((singleClass) => singleClass.status === 'approved');

    return (
        <div>
              <SubBanner bannerimg={'https://i.ibb.co/tqL8Sgk/pexels-elina-fairytale-3822356-1.jpg'} heading={'Classes'}></SubBanner>
              <div className='grid md:grid-col-3 gap-6 lg:grid-cols-4 my-10 grid-cols-1 mx-auto w-full md:w-5/6'>
              {approvedClasses.map((singleClass) => <SingleClasses yogaclass={singleClass} key={singleClass._id} />)}            
              </div>
        </div>
    );
};

export default Clasess;