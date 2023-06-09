import React from 'react';

const SubBanner = ({ bannerimg, heading }) => {
  return (
    <div className='h-[400px] relative'>
      <img className='h-full w-full object-cover' src={bannerimg} alt='banner img' />
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
      <h3 className='absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-5xl' style={{letterSpacing:'2px'}}>
        {heading}
      </h3>
    </div>
  );
};

export default SubBanner;
