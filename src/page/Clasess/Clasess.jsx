import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import SubBanner from '../../component/SubBanner';
import { getAllClasses } from '../../api/class';
import SingleClasses from './SingleClasses';
import { Helmet } from 'react-helmet';

const Clasess = () => {
    const { data: classes = [], error, isLoading, refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async ()=>{
            const data = await getAllClasses()
            return data
        }
    })


    const approvedClasses = classes.filter((singleClass) => singleClass.status === 'approved');

    return (
        <div>
           <Helmet>
                <title>Class | DoYoga</title>
            </Helmet>
              <SubBanner bannerimg={'https://i.ibb.co/tqL8Sgk/pexels-elina-fairytale-3822356-1.jpg'} heading={'Classes'}></SubBanner>
              <div className='grid md:grid-col-3 gap-6 lg:grid-cols-4 my-10 grid-cols-1 mx-auto w-full md:w-5/6'>
              {approvedClasses.map((singleClass) => <SingleClasses yogaclass={singleClass} key={singleClass._id} refetch={refetch} />)}            
              </div>
        </div>
    );
};

export default Clasess;