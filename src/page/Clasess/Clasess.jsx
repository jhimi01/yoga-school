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

    useEffect(()=>{
        window.scroll(0, 0)
      },[])


    const approvedClasses = classes.filter((singleClass) => singleClass.status === 'approved');

    return (
        <div>
           <Helmet>
                <title>Class | DoYoga</title>
            </Helmet>
              <SubBanner bannerimg={'https://images.unsplash.com/photo-1579126038374-6064e9370f0f?auto=format&fit=crop&q=80&w=1431&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} heading={'Classes'}></SubBanner>
              <div className='grid md:grid-col-3 gap-6 lg:grid-cols-4 my-10 grid-cols-1 mx-auto w-full md:w-5/6'>
              {approvedClasses.map((singleClass) => <SingleClasses yogaclass={singleClass} key={singleClass._id} refetch={refetch} />)}            
              </div>
        </div>
    );
};

export default Clasess;