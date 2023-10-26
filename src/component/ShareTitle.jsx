import React from 'react';

const ShareTitle = ({subheading, mainTitle}) => {
    return (
        <div className='text-center my-3'>
        <h4>{subheading}</h4>
        <h2 className='uppercase' style={{lineHeight:'1.4', letterSpacing:'2px', fontSize:'25px', fontWeight:'700', } }>{mainTitle}</h2>
            
        </div>
    );
};

export default ShareTitle;