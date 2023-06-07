import React from 'react';

const Home = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url("https://i.ibb.co/gy5L2Hj/pexels-chevanon-photography-317155.jpg")', backgroundPosition: '100% 100%'}}
        //  style={"background-image: url(/images/stock/photo-1507358522600-9f71e620c44e.jpg);"} 
         >
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. lorem100</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Home;